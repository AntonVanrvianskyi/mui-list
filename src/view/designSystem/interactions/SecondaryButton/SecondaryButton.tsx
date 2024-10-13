import type {ButtonProps} from "@mui/material";
import Button from "@mui/material/Button";
import {useTheme} from "@mui/material/styles";
import { flexMixin } from "../../mixins";

interface SecondaryButtonProps extends ButtonProps {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (args: any) => void;
}

function SecondaryButton({
  label, onClick, ...rest
}: SecondaryButtonProps) {
  const theme = useTheme();

  return (
    <Button
      variant="contained"
      fullWidth
      disableRipple
      onClick={onClick}
      sx={{
        "&.MuiButtonBase-root": {
          cursor: "pointer",
          whiteSpace: "nowrap",
          borderRadius: "55px",
          height: 32,
          boxShadow: "none",
          background: "linear-gradient(0deg, rgba(255, 120, 45, 0.08) 0%, rgba(255, 120, 45, 0.08) 100%)",
          fontSize: "14px",
          fontWeight: 400,
          textTransform: "none",
          ...flexMixin({
            jc: "center",
            ai: "center",
            fd: "row",
          }),
          color: theme.palette.white.main,

          "&:hover": {
            background: "linear-gradient(0deg, rgba(255, 120, 45, 0.32) 0%, rgba(255, 120, 45, 0.32) 100%)",
            color: theme.palette.white.main,
            boxShadow: "none",
          },
          "&:active": {
            background: "linear-gradient(0deg, rgba(255, 120, 45, 0.64) 0%, rgba(255, 120, 45, 0.64) 100%)",
            color: theme.palette.white.main,
            boxShadow: "none",
          },

          "& .MuiButton-root": {
            borderRadius: "55px",
          },
        },
      }}
      {...rest}
    >
      {label}
    </Button>
  );
}

export default SecondaryButton;
