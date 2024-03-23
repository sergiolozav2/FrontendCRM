import { Box } from "@mui/material";
interface Props {
  children: JSX.Element | JSX.Element[];
}
export const BoxDisplay = ({ children }: Props) => {
  return <Box display={"flex"}>{children}</Box>;
};
