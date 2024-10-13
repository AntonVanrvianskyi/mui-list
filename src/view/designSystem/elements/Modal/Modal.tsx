import type {PropsWithChildren} from "react";
import {useTheme} from "@mui/material/styles";
import type {DialogProps} from "@mui/material/Dialog";
import Dialog from "@mui/material/Dialog";
import Backdrop from "@mui/material/Backdrop";
import type {BackdropProps} from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ModalProps extends DialogProps {
}

function BackDropModal(props: BackdropProps) {
  return (
    <Backdrop
      {...props}
      sx={{
        "&.MuiBackdrop-root": {
          backdropFilter: "blur(8px)",
        },
      }}
    />
  );
}

function Modal({children, ...rest}: PropsWithChildren<ModalProps>) {
  const theme = useTheme();
  return (
    <Dialog
      slots={{backdrop: BackDropModal}}
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "25px",
          backgroundColor: theme.palette.bgColor.dark,
          maxWidth: "fit-content",
          overflow: "hidden",
        },
      }}
      {...rest}
    >
      {children}
    </Dialog>
  );
}

export default Modal;
