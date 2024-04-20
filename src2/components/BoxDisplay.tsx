import { Box } from "@mui/material";
interface Props {
  children: JSX.Element | JSX.Element[];
  sx?: any;
}
export const BoxDisplay = ({ children, sx }: Props) => {
  return (
    <Box display={"flex"} sx={sx}>
      {children}
    </Box>
  );
};
