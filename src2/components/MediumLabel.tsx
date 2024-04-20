import { Typography } from "@mui/material";
interface Props {
  sx?: any;
  children: JSX.Element | JSX.Element[];
}
export const MediumLabel = ({ children, sx }: Props) => {
  return (
    <Typography sx={sx ?? {}} fontSize={"12px"}>
      {children}
    </Typography>
  );
};
