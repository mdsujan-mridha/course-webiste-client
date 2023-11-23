import React, { Fragment, useState } from 'react';
import avatar from "../../images/user/avater.jpg";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Account = () => {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClickClose = () => {
        setOpen(false)
    }
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme?.breakpoints?.down('md'));

    return (
        <Fragment>
            <div className="flex flex-col gap-5 justify-center items-center">
                <div className='mt-5'>
                    <img src={avatar} alt="" className='w-96 h-96 rounded-full' />
                </div>
                <div>
                    <button className='btn btn-secondary' onClick={handleClickOpen}> Update Profile </button>
                    <Dialog
                        onClose={handleClickClose}
                        open={open}
                        fullScreen={fullScreen}
                        aria-labelledby="responsive-dialog-title"
                        sx={{
                            '& .MuiDialog-paper': {
                                backgroundColor: '#2d2752',
                            },
                        }}
                    >
                        <DialogTitle id="responsive-dialog-title" className='text-white text-center font-bold text-xl'>
                            Hey, Sujan Update Profile
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <form className='w-full'>
                                <input type="name"
                                        placeholder='Enter you name'
                                        className=' w-full p-2 bg-transparent border-b-2 outline-none placeholder:text-gray-50 py-3 rounded-md shadow-2xl'
                                        style={{ borderColor: '#5714F5', fontSize: "12px", fontWeight: "500" }}

                                    />
                                    <input type="email"
                                        placeholder='Enter you email'
                                        className=' w-full p-2 bg-transparent border-b-2 outline-none placeholder:text-gray-50 py-3 rounded-md shadow-2xl'
                                        style={{ borderColor: '#5714F5', fontSize: "12px", fontWeight: "500" }}

                                    />
                                </form>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <button autoFocus onClick={handleClickClose}>
                                cancel
                            </button>
                            <button onClick={handleClickClose} autoFocus>
                                Update
                            </button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        </Fragment>
    );
};

export default Account;