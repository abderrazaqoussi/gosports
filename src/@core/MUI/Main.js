// ** import from MUI
import Box from "@mui/material/Box";

export default function Main({ children, sx }) {
  return (
    <Box sx={sx} component="section">
      {children}
    </Box>
  );
}
