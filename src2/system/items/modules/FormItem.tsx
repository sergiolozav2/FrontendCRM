import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { InputBox } from "../../../components/InputBox";
import { SelectBox } from "../../../components/SelectBox";
import { TableDetails } from "./TableDetails";
import { TableImages } from "./TableImages";
import {
  Add,
  KeyboardArrowDown,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { useState } from "react";
export const FormItem = () => {
  const [viewDetails, setViewDetails] = useState(false);
  const [editDetails, setEditDetails] = useState(false);
  const [editImages, setEditImages] = useState(false);
  const [listDetails, setListDetails] = useState<any[]>([]);
  const [listImages, setListImages] = useState<any[]>([]);
  const [objectDetails, setObjectDetails] = useState<any>({});
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const propUseForm = { register, setValue, getValues };
  const submitForm = (formData: any) => {
    formData.detail = objectDetails;
    console.log(formData);
  };
  const addField = (formData: any) => {
    const objeto = { campo: getValues("campo"), valor: getValues("valor") };
    setListDetails([...listDetails, objeto]);
    formData[getValues("campo")] = getValues("valor");
    setObjectDetails(formData);
  };
  const addImage = (event: any) => {
    const file = event.target.files[0];
    const imagen = { nombre: file.name, file: file };
    const campo = "imagen" + listImages.length + 1;
    console.log(imagen);
    console.log(listImages);
    objectDetails[campo] = imagen;
    setListImages([...listImages, imagen]);
  };
  const handleDeleteDetail = (campo: any) => {
    setListDetails(listDetails.filter((detail: any) => detail.campo != campo));
    delete objectDetails[campo];
  };
  const handleView = () => {};

  return (
    <Box
      pt={2}
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(submitForm)}
      noValidate
    >
      <Grid item md={12}>
        <Card sx={{ p: 2 }}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  pr: { xs: 0, md: 2 },
                  borderRight: { xs: "", md: "1px solid gainsboro" },
                }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <Typography variant="h6">
                      Informacion del producto
                    </Typography>
                  </Grid>

                  <InputBox
                    label={"Nombre"}
                    name={"nombreItem"}
                    errors={errors}
                    sm={6}
                    useForm={propUseForm}
                  ></InputBox>
                  <InputBox
                    label={"Precio"}
                    name={"precio"}
                    sm={3}
                    useForm={propUseForm}
                  ></InputBox>
                  <SelectBox
                    optionsList={[{ moneda: "Bs" }, { moneda: "$us" }]}
                    sm={3}
                    label={"Moneda"}
                    optionLabel={"moneda"}
                    optionValueId={"moneda"}
                    control={control}
                  ></SelectBox>
                  <InputBox
                    label={"Descripcion"}
                    name={"descripcion"}
                    sm={12}
                    useForm={propUseForm}
                  ></InputBox>
                  {listDetails.map((detail: any) => (
                    <InputBox
                      label={detail.campo}
                      name={detail.campo}
                      sm={3}
                      defaultValue={detail.valor}
                      useForm={propUseForm}
                    ></InputBox>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} md={4}>
                <Grid container spacing={0.3}>
                  <Grid item sm={12} mt={{ sm: 2, md: 0 }}>
                    <Typography fontSize={"20px"}>Mas Detalles</Typography>
                  </Grid>
                  <Grid item sm={12}>
                    <label htmlFor="upload-file">
                      <Button
                        variant="text"
                        component="span"
                        sx={{
                          fontSize: "12px",
                          textTransform: "None",
                          color: "gray",
                        }}
                      >
                        <Add fontSize="small"></Add>
                        Subir ARCHIVO
                      </Button>
                      <input
                        id="upload-file"
                        hidden
                        accept="image/png, image/jpeg, image/jpg, application/pdf"
                        type="file"
                        onChange={(evento: any) => addImage(evento)}
                      />
                    </label>

                    <Box>
                      {listImages.length > 0 ? (
                        <Grid item xs={12}>
                          <Button
                            variant="text"
                            sx={{
                              fontSize: "12px",
                              textTransform: "None",
                              color: "gray",
                            }}
                            onClick={() => setEditImages(!editImages)}
                          >
                            {editImages ? (
                              <KeyboardArrowDown fontSize="small"></KeyboardArrowDown>
                            ) : (
                              <KeyboardArrowRight fontSize="small"></KeyboardArrowRight>
                            )}
                            Editar Imagens
                          </Button>
                          {editImages ? (
                            <Box pl={1.7}>
                              <TableImages
                                images={listImages}
                                handleDelete={handleDeleteDetail}
                                handleView={handleView}
                              ></TableImages>
                            </Box>
                          ) : null}
                        </Grid>
                      ) : null}
                    </Box>
                    <Button
                      variant="text"
                      sx={{
                        fontSize: "12px",
                        textTransform: "None",
                        color: "gray",
                      }}
                      onClick={() => setViewDetails(!viewDetails)}
                    >
                      {viewDetails ? (
                        <KeyboardArrowDown fontSize="small"></KeyboardArrowDown>
                      ) : (
                        <KeyboardArrowRight fontSize="small"></KeyboardArrowRight>
                      )}
                      Agregar Campo
                    </Button>
                    {viewDetails ? (
                      <Box pl={1.7}>
                        <Grid container spacing={1}>
                          <InputBox
                            label={"Campo"}
                            name={"campo"}
                            sm={5}
                            useForm={propUseForm}
                          ></InputBox>
                          <InputBox
                            label={"Valor"}
                            name={"valor"}
                            sm={5}
                            useForm={propUseForm}
                          ></InputBox>

                          <Grid
                            item
                            sm={2}
                            xs={12}
                            sx={{ display: "flex", justifyContent: "right" }}
                          >
                            <IconButton onClick={() => addField(objectDetails)}>
                              <Add fontSize="small"></Add>
                            </IconButton>
                          </Grid>

                          {listDetails.length > 0 ? (
                            <Grid item xs={12}>
                              <Button
                                variant="text"
                                sx={{
                                  fontSize: "12px",
                                  textTransform: "None",
                                  color: "gray",
                                }}
                                onClick={() => setEditDetails(!editDetails)}
                              >
                                {viewDetails ? (
                                  <KeyboardArrowDown fontSize="small"></KeyboardArrowDown>
                                ) : (
                                  <KeyboardArrowRight fontSize="small"></KeyboardArrowRight>
                                )}
                                Editar Campos
                              </Button>
                              {editDetails ? (
                                <Box pl={1.7}>
                                  <TableDetails
                                    details={listDetails}
                                    handleDelete={handleDeleteDetail}
                                  ></TableDetails>
                                </Box>
                              ) : null}
                            </Grid>
                          ) : null}
                        </Grid>
                      </Box>
                    ) : null}
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                md={12}
                mt={1}
                display={"flex"}
                justifyContent={"left"}
              >
                <Button
                  variant="contained"
                  size="medium"
                  type="submit"
                  sx={{ mr: 1 }}
                >
                  Guardar
                </Button>

                <Button variant="outlined" size="medium" type="submit">
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};
