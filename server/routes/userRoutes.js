const express = require("express");
const {
    registerUser,
    loginUser,
    logout,
    forgotPassword,
    resetPassword,
    updatePassword,
    updateProfile,
    getUserDetails,
    getAllUsers,
    getAllUser,
    updateUserRole,
    deleteUser
} = require("../controller/userController");

const {
    isAuthenticatedUser,
    authorizeRoles } = require("../middleware/auth");
const router = express.Router();
// register user 
router.route("/register").post(registerUser);
// login user 
router.route("/login").post(loginUser)
// logout user 
router.route("/logout").get(logout);
//forgot password
router.route("/password/forgot").post(forgotPassword);
// reset password 
router.route("/password/reset/:token").put(resetPassword);
// update password 
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
// update profile 
router.route("/me/updateProfile").put(isAuthenticatedUser, updateProfile);
// get user details 
router.route("/me").get(isAuthenticatedUser, getUserDetails);
// get all user by admin 
router.route("/admin/users").get(isAuthenticatedUser, authorizeRoles("admin"), getAllUsers);
// get single user details by admin 
router.route("/admin/user/:id")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getAllUser)
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateUserRole)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUser);
    
module.exports = router;