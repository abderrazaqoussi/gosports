// ** import from MUI
import Box from "@mui/material/Box";

export default function Header({ children, sx }) {
  return (
    <Box sx={sx} component="header">
      {children}
    </Box>
  );
}
