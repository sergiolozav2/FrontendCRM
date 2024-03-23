import { Typography } from "@mui/material";
interface Props {
  label: string;
}
export const TitleTable = ({ label }: Props) => {
  return (
    <Typography color={"#C2C2C2"} textAlign="center" fontSize={"12px"} pt={1.4}>
      {label}
    </Typography>
  );
};
