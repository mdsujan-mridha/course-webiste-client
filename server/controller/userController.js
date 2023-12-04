
const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../model/userModel");
const sendToken = require("../utils/jwtToken");
const ErrorHandler = require("../utils/ErrorHandler");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const cloudinary = require("cloudinary");
// register user 
exports.registerUser = catchAsyncError(async (req, res, next) => {

    // add cloudniry 

    const { name, email, password } = req.body;
    const user = await User.create({
        name, email, password,
        avatar: {
            public_id: "mycloud.public_id",
            url: "mycloud.secure_url",
        }
    });
    sendToken(user, 201, res);
});

// login 
exports.loginUser = catchAsyncError(async (req, res, next) => {

    const { email, password } = req.body;
    // if usr and password is empty 
    if (!email || !password) {
        return next(new ErrorHandler("Please Enter a valid email and password", 400))
    }
    // find user on database with email 
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("user not found with this email", 401));
    }
    //    compare user given password with stored password
    const isPasswordMatched = await user.comparePassword(password);
    // id password not match then send error message 
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Invalid email or password!", 401));
    }
    // if everything is ok then send response with status code and user 
    sendToken(user, 200, res);
});

// logout user 
exports.logout = catchAsyncError(async (req, res, next) => {

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(200).json({
        success: true,
        message: "Logged out",
    });
});
// forgot password 
exports.forgotPassword = catchAsyncError(async (req, res, next) => {

    // find user by email 
    const user = await User.findOne({ email: req.body.email });
    // if user not found then send error message 
    if (!user) {
        return next(new ErrorHandler("User not found", 404));
    }
    //    get token for reset password 
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    // demo url 
    const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;
    // demo url will be change ,When project will deploy on host
    // send a message with replay email 
    const message = `Your password reset token is:- \n\n ${resetPasswordUrl}\n\n If you have not request this email then please ignore it. \n\n\n Thank You`;

    // use try catch block for error handling 
    try {

        await sendEmail({
            email: user.email,
            subject: `Science Pathshala - সাইন্স পাঠশালা Reset password`,
            message,
        });
        res.status(200).json({
            success: true,
            message: `Reset password email send to ${user.email} successfully`,
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save({ validateBeforeSave: false, });
        return next(new ErrorHandler(error.message, 500));
    }
});

// reset password 
exports.resetPassword = catchAsyncError(async (req, res, next) => {

    //  create token 
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    // find user for update password 
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });

    // if user not found then send a message 
    if (!user) {
        return next(new ErrorHandler(
            "Reset password token is invalid or has been expired", 400
        ));
    }
    // if user given password not match with confirm password then send a error message 
    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not match", 400));
    }
    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    // is all is ok then save this user password on database 
    await user.save();
    sendToken(user, 200, res);
});

// get logged user details 
exports.getUserDetails = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    // if user not found then send a message  
    res.status(200).json({
        success: true,
        user,
    });
});

// update user password 
exports.updatePassword = catchAsyncError(async (req, res, next) => {
    // find user by id 
    const user = await User.findById(req.user.id).select("+password");

    // need to match password with old password 
    const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

    // if user given password is not match with old password then return a error message 
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Old password is incorrect", 400));
    }
    // if new password is does not match with confirm password then send a error message 
    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler("password does not match", 400));
    }

    // if all is ok then 
    user.password = req.body.newPassword;
    await user.save();
    sendToken(user, 200, res);

});
// update user profile 
exports.updateProfile = catchAsyncError(async (req, res, next) => {
    // name and email get from body 
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
    }
    // and user image will get from cloud 
    if (req.body.avatar !== "") {
        //    find user by id 
        const user = await User.findById(req.user.id);
        // if user update their profile picture then collect user image id from cloudinary 
        const imageId = user.avatar.public_id;
        // destroy previous image 
        await cloudinary.v2.uploader.destroy(imageId);
        // upload new image on cloudinary
        const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
            folder: "avatar",
            width: 150,
            crop: "scale",
        });
        newUserData.avatar = {
            public_id: "myCloud.public_id",
            url: "myCloud.secure_url",
        };
    }
    // now need to find and update user information 
    const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        runValidators: false,
        useFindAndModify: false,
    });
    // if everything is ok then then send response 
    res.status(200).json({
        success: true,
        message: "Update your profile",
        user,
    });

});

// get all user by admin 
exports.getAllUsers = catchAsyncError(async (req, res, next) => {
    // get all user 
    const users = await User.find();

    // if user collection is empty then send a error a message 
    if (!users) {
        return next(new ErrorHandler("user collection is empty", 401));
    }
    res.status(200).json({
        success: true,
        users,
    });
})

// get single user by admin 
exports.getAllUser = catchAsyncError(async (req, res, next) => {

    // find user by id 
    const user = await User.findById(req.params.id);
    // if user not found then send error message 
    if (!user) {
        return next(new ErrorHandler(`User not exist id :${req.params.id}`));
    }
    // if user exist then send response with user 
    res.status(200).json({
        success: true,
        user,
    })
});
// update user role 
exports.updateUserRole = catchAsyncError(async (req, res, next) => {
    // get user information from body 
    const newUserData = {
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    };
    //   find user by id and update user role only   
    await User.findByIdAndUpdate(req.params.id, newUserData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    // then send a response 
    res.status(200).json({
        success: true,
        message: 'Successfully update user role'
    });
});

// delete user by admin 
exports.deleteUser = catchAsyncError(async (req, res, next) => {
    // find user by admin 
    const user = await User.findById(req.params.id);
    // if user not found then send a error message 
    if (!user) {
        return next(new ErrorHandler(`User does not exist with id ${req.params.id}`));
    }
    // if user find then delete user 
    await user.deleteOne();
    // if delete user then send response 
    res.status(200).json({
        success: true,
        message: 'User deleted successfully',
    });
});
