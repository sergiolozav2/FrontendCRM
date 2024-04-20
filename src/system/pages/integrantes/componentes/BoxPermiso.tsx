import { PlaylistAddCheck } from "@mui/icons-material";
import { Box, Typography, IconButton } from "@mui/material";
import { BoxSpaceBetween } from "../../../../componentes/BoxSpaceBetween";
import { useForm } from "react-hook-form";
import { useState } from "react";
import CheckBoxComponent from "../../../../componentes/CheckBoxComponent";
interface Props {
  rol: any;
}
export const BoxPermiso = ({ rol }: Props) => {
  const [verPermisos, setVerPermisos] = useState(false);
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <Box>
      <BoxSpaceBetween>
        <Typography pt={1}>{rol.label}</Typography>
        <IconButton onClick={() => setVerPermisos(!verPermisos)}>
          <PlaylistAddCheck></PlaylistAddCheck>
        </IconButton>
      </BoxSpaceBetween>
      {verPermisos ? (
        <Box>
          <CheckBoxComponent
            valueLabel={"Conversaciones"}
            valueId={"conversacion"}
            register={register}
          ></CheckBoxComponent>
          <CheckBoxComponent
            valueLabel={"Items"}
            valueId={"item"}
            register={register}
          ></CheckBoxComponent>
          <CheckBoxComponent
            valueLabel={"Clientes"}
            valueId={"cliente"}
            register={register}
          ></CheckBoxComponent>
          <CheckBoxComponent
            valueLabel={"Ventas"}
            valueId={"venta"}
            register={register}
          ></CheckBoxComponent>
          <CheckBoxComponent
            valueLabel={"Mensaje Rapido"}
            valueId={"mensaje"}
            register={register}
          ></CheckBoxComponent>
          <CheckBoxComponent
            valueLabel={"Integrantes"}
            valueId={"integrante"}
            register={register}
          ></CheckBoxComponent>
        </Box>
      ) : null}
    </Box>
  );
};
