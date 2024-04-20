import { Box } from "@mui/material";
interface Props {
  children: JSX.Element | JSX.Element[];
}
export const BoxSpaceBetween = ({ children }: Props) => {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      {children}
    </Box>
  );
};
