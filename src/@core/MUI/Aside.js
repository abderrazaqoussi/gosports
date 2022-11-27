// ** import from MUI
import Box from "@mui/material/Box";

export default function Aside({ children, sx }) {
  return (
    <Box sx={sx} component="aside">
      {children}
    </Box>
  );
}
