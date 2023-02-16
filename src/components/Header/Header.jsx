import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

export const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="fixed flex justify-between items-center h-[60px] w-[100%] bg-black">
      <div className="flex text-white gap-4 pl-14 items-center">
        <h1>
          <b className="text-[1.3rem]">Logo</b>
        </h1>

        <Link to="/home">
          <h1>Home</h1>
        </Link>
        <h1 className="cursor-pointer" onClick={handleClickOpen}>
          Company Info
        </h1>
      </div>
      <div className="flex text-white gap-4 pr-14 items-center">
        <Link to="/">
          <b>Logout</b>
        </Link>
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <div>
            <h6>
              <b>Company:</b> Geeksynergy Technologies Pvt Ltd
            </h6>
            <h6>
              <b>Address:</b> Sanjayanagar, Bengaluru-56
            </h6>
            <h6>
              <b>Phone:</b> XXXXXXXXX09
            </h6>
            <h6>
              <b>Email:</b> XXXXXX@gmail.com
            </h6>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
