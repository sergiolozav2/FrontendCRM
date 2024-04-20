import { Box } from "@mui/material";
interface Props {
  children: JSX.Element | JSX.Element[];
  sx?: any;
}

export const BoxDisplayCenter = ({ children, sx }: Props) => {
  return (
    <Box display={"flex"} justifyContent={"center"} sx={sx ?? {}}>
      {children}
    </Box>
  );
};
