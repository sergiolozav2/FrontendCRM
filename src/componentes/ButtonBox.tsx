import { Button, Grid, Typography } from "@mui/material";

interface Props {
  onClickFunction: (e?: any) => void;
  md?: number;
  isFill: boolean;
  label: string;
  xs?: number;
  mr?: number;
  sm?: number;
  expanded?: boolean;
  withMargin?: boolean;
  disabled?: boolean;
}

export const ButtonBox = ({
  onClickFunction,
  md,
  isFill,
  label,
  xs,
  sm,
  mr,
  expanded,
  withMargin,
  disabled,
}: Props) => {
  return (
    <Grid
      item
      sm={sm ?? md ?? false}
      md={md ?? sm ?? false}
      xs={xs ? xs : false}
      sx={{ mt: withMargin ? 2 : 0, mb: withMargin ? 2 : 0, mr: mr ? mr : 0 }}
    >
      <Button
        size="medium"
        sx={{
          width: expanded ? "100%" : null,
          height: expanded ? "100%" : null,
          // backgroundColor: isFill ? "#6733E7" : "white",
          // color: !isFill ? "#6733E7" : "white",
          // borderColor: !isFill ? "#6733E7" : "white",
        }}
        variant={isFill ? "contained" : "outlined"}
        disabled={disabled ? disabled : false}
        onClick={(e) => {
          onClickFunction(e ?? "");
        }}
      >
        <Typography sx={{ fontSize: "10px", textAlign: "left", width: "100%" }}>
          {label}
        </Typography>
      </Button>
    </Grid>
  );
};
