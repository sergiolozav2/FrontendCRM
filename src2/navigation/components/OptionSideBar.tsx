import {
  AttachEmail,
  AttachEmailOutlined,
  Forum,
  ForumOutlined,
  Groups,
  LocalGroceryStoreOutlined,
  Message,
  Paid,
  PaidOutlined,
  PersonAdd,
  PersonAddOutlined,
  PlaylistAddCheck,
} from "@mui/icons-material";
import { Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";

interface Props {
  label: string;
  opcion_seleccionada: any;
  activo: boolean;
  sm?: number;
  md?: number;
  xs?: number;
  changeOption: (e: any) => void;
  // register:  any;
}

export const OptionSideBar = ({
  label,
  changeOption,
  opcion_seleccionada,
  md,
  sm,
  activo,
  xs,
}: Props) => {
  return (
    <Grid
      item
      xs={xs ? xs : 12}
      md={md ? md : 12}
      sm={sm ? sm : 12}
      sx={activo ? { backgroundColor: "white" } : {}}
    >
      <Button
        variant={activo ? "contained" : undefined}
        sx={{
          p: 2,
          width: "100%",
          color: activo ? "white" : null,
        }}
        onClick={() => {
          changeOption(opcion_seleccionada);
        }}
      >
        {(() => {
          switch (Number(opcion_seleccionada.opcion)) {
            case 1:
              return (
                <ForumOutlined
                  fontSize="small"
                  sx={{ marginRight: "10px" }}
                ></ForumOutlined>
              );
            case 2:
              return (
                <LocalGroceryStoreOutlined
                  fontSize="small"
                  sx={{ marginRight: "10px" }}
                ></LocalGroceryStoreOutlined>
              );
            case 3:
              return (
                <Groups fontSize="small" sx={{ marginRight: "10px" }}></Groups>
              );
            case 4:
              return (
                <PaidOutlined
                  fontSize="small"
                  sx={{ marginRight: "10px" }}
                ></PaidOutlined>
              );
            case 5:
              return (
                <AttachEmailOutlined
                  fontSize="small"
                  sx={{ marginRight: "10px" }}
                ></AttachEmailOutlined>
              );
            case 6:
              return (
                <PersonAddOutlined
                  fontSize="small"
                  sx={{ marginRight: "10px" }}
                ></PersonAddOutlined>
              );
            case 7:
              return (
                <PlaylistAddCheck
                  fontSize="small"
                  sx={{ marginRight: "10px" }}
                ></PlaylistAddCheck>
              );
            default:
              return null;
          }
        })()}

        {/* <Message fontSize="small" sx={{ pr: "5px" }}></Message> */}
        <Typography sx={{ fontSize: "11px", textAlign: "left", width: "100%" }}>
          {label}
        </Typography>
      </Button>
    </Grid>
  );
};
