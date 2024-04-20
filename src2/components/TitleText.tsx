import { Typography } from "@mui/material";
import React from "react";
interface Props {
  title: string;
}
export const TitleText = ({ title }: Props) => {
  return <Typography fontSize={"20px"}>{title}</Typography>;
};
