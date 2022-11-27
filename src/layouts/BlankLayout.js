// ** MUI Imports
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

// Styled component for Blank Layout component
const BlankLayoutWrapper = styled(Box)(({ theme }) => ({
  height: "100vh",
  minHeight: "100vh",
  overflowX: "hidden",
  position: "relative",

  // For V1 Blank layout pages
  "& .content-center": {
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(5),
  },

  // For V2 Blank layout pages
  "& .content-right": {
    display: "flex",
    minHeight: "100vh",
    overflowX: "hidden",
    position: "relative",
  },
}));

// Export Blank layout
export default function BlankLayout({ children }) {
  return (
    <BlankLayoutWrapper className="layout-wrapper">
      {children}
    </BlankLayoutWrapper>
  );
}
