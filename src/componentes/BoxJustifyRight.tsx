import { Box } from "@mui/material";
interface Props {
  children: JSX.Element | JSX.Element[];
}
export const BoxJustifyRight = ({ children }: Props) => {
  return (
    <Box display={"flex"} justifyContent={"right"}>
      {children}
    </Box>
  );
};
