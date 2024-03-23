import { Box, Grid, Typography } from "@mui/material";
import { ButtonBox } from "../../../../componentes/ButtonBox";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { listaCategorias } from "../../../../listas/Listas";
import { BoxCategoria } from "../components/BoxCategoria";
import { TextFieldBox } from "../../../../componentes/TextFieldBox";

export const ShowCategoria = ({}) => {
  const [formVisible, setFormVisible] = useState(false);
  const { register, setValue, getValues } = useForm();
  const useFormProps = { register, setValue, getValues };
  return (
    <Grid item xs={12}>
      {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>Categorías</Typography>
        <ButtonBox
          onClickFunction={() => setFormVisible(!formVisible)}
          isFill={true}
          label={"+ Categoría"}
        ></ButtonBox>
      </Box> */}
      {formVisible ? (
        <Box>
          <TextFieldBox
            label={"nombre"}
            fieldValueName={"Nombre"}
            useForm={useFormProps}
          ></TextFieldBox>
        </Box>
      ) : null}
      {listaCategorias.map((categoria: any) => (
        <BoxCategoria categoria={categoria}></BoxCategoria>
      ))}
    </Grid>
  );
};
