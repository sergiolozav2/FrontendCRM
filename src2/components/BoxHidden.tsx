import { Box } from "@mui/material";
interface Props {
  children: JSX.Element | JSX.Element[];
}
export const BoxHidden = ({ children }: Props) => {
  return <Box display={{ xs: "none", md: "block" }}>{children}</Box>;
};
