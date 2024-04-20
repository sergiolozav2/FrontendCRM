import {
  Box,
  Button,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { BasePage } from "../../components/BasePage";
import { InputBox } from "../../components/InputBox";

import { useState } from "react";
import { BoxSpaceBetween } from "../../../src/componentes/BoxSpaceBetween";
import { Add, CancelOutlined, FilterList, MenuOpen } from "@mui/icons-material";
import { BoxDisplay } from "../../components/BoxDisplay";
import { BoxHidden } from "../../components/BoxHidden";
import {
  listaCategorias,
  listaEtapas,
  listaFiltroClientes,
  listaInformacionClientes,
  listaPrioridades,
} from "../../datos/datos";
import { useForm } from "react-hook-form";
import React from "react";
import { CardCliente } from "./components/CardCliente";
import { TableCliente } from "./components/TableCliente";
import { SelectBox } from "../../components/SelectBox";
import { ModalBox } from "../../components/ModalBox";
import { SelectColorBox } from "../../components/SelectColorBox";
import { ButtonBox } from "../../components/ButtonBox";
import { BoxJustifyRight } from "../../../src/componentes/BoxJustifyRight";
export const ClientePage = () => {
  const [activeSearch, setActiveSearch] = useState(false);
  const [tipo, setTipo] = useState(1);
  const [listaClientes, setListaClientes] = useState(listaInformacionClientes);
  const [selectedFilter, setSelectedFilter] = useState({
    tipo: 0,
    filtro: "Ninguno",
  });
  const [vista, setVista] = useState(1);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { register, control, setValue, getValues } = useForm();
  const useFormProps = { register, setValue, getValues };
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (filter: any) => {
    setSelectedFilter(filter);
    setAnchorEl(null);
  };
  const handleSearch = () => {
    setActiveSearch(!activeSearch);
  };
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const filterData = (e: any) => {
    const filter = getValues("campo");
    setListaClientes(
      listaInformacionClientes.filter((cliente: any) =>
        cliente[filter].toString().toUpperCase().includes(e.toUpperCase())
      )
    );
  };

  return (
    <BasePage opcion={{ titulo: "Clientes", opcion: 3, ruta: "/clientes" }}>
      <BoxSpaceBetween>
        <Tabs
          value={vista}
          onChange={(_event: React.SyntheticEvent, newValue: number) =>
            setVista(newValue)
          }
          aria-label="basic tabs example"
        >
          <Tab color="secondary" key={1} label={"CLIENTES"} {...a11yProps(0)} />
          <Tab color="secondary" key={2} label={"ETAPAS"} {...a11yProps(1)} />
        </Tabs>
        <BoxDisplay>
          <>
            {vista == 1 ? (
              <Button onClick={handleModal}>
                <Add></Add>
                <BoxHidden>
                  <>Agregar</>
                </BoxHidden>
              </Button>
            ) : (
              <Button onClick={handleSearch}>
                <FilterList></FilterList>
                <BoxHidden>
                  <>Filtrar</>
                </BoxHidden>
              </Button>
            )}
          </>
          <Divider orientation="vertical"></Divider>
          <Button
            onClick={handleClick}

            // onClick={handleClick}
          >
            <MenuOpen></MenuOpen>
            <BoxHidden>
              <>Categorizar</>
            </BoxHidden>
          </Button>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: 48 * 4.5,
                width: "20ch",
              },
            }}
          >
            {listaFiltroClientes.map((option: any) => (
              <MenuItem
                key={option.filtro}
                selected={option === selectedFilter}
                onClick={() => handleClose(option)}
              >
                {option.filtro}
              </MenuItem>
            ))}
          </Menu>
          <Divider orientation="vertical"></Divider>
        </BoxDisplay>
      </BoxSpaceBetween>

      <Divider></Divider>
      <>
        {activeSearch ? (
          <Grid
            container
            spacing={2}
            mt={1}
            mb={1}
            sx={{ backgroundColor: "white", p: 1 }}
          >
            <InputBox
              sm={3}
              label={"Valor"}
              name={"valor"}
              useForm={useFormProps}
              onChangeField={(e) => filterData(e.target.value)}
            ></InputBox>
            <SelectBox
              sm={3}
              label={"Campo"}
              optionsList={[
                { label: "Nombre", campo: "nombre" },
                { label: "Telefono", campo: "telefono" },
                { label: "Etapa", campo: "etapaNombre" },
                { label: "Categoria", campo: "categoriaNombre" },
              ]}
              optionLabel={"label"}
              optionValueId={"campo"}
              control={control}
            ></SelectBox>
            <Grid
              item
              sm={2}
              sx={{ display: "flex", justifyContent: "left", pt: 2 }}
            >
              <Button onClick={handleSearch}>
                <CancelOutlined></CancelOutlined>
                {/* <BoxHidden>
                  <>Cancelar</>
                </BoxHidden> */}
              </Button>
            </Grid>
          </Grid>
        ) : null}
      </>
      {vista == 1 ? (
        <CardCliente></CardCliente>
      ) : (
        <>
          {selectedFilter.tipo == 1 &&
            listaCategorias.map((categoria: any, index: any) => (
              <Box key={index}>
                <TableCliente
                  clientes={listaClientes}
                  tipo={selectedFilter.tipo}
                  filtro={categoria}
                ></TableCliente>
              </Box>
            ))}
          {selectedFilter.tipo == 2 &&
            listaEtapas.map((etapa: any, index: any) => (
              <Box key={index}>
                <TableCliente
                  clientes={listaClientes}
                  tipo={selectedFilter.tipo}
                  filtro={etapa}
                ></TableCliente>
              </Box>
            ))}
          {selectedFilter.tipo == 3 &&
            listaPrioridades.map((prioridad: any, index: any) => (
              <Box key={index}>
                <TableCliente
                  clientes={listaClientes}
                  tipo={selectedFilter.tipo}
                  filtro={prioridad}
                ></TableCliente>
              </Box>
            ))}
          {selectedFilter.tipo == 0 && (
            <TableCliente
              clientes={listaClientes}
              tipo={selectedFilter.tipo}
              filtro={{}}
            ></TableCliente>
          )}
        </>
      )}
      <ModalBox openModal={openModal} handleCloseModal={handleModal}>
        <Typography fontSize={20}>Agregar Tipo de Cliente</Typography>
        <Divider></Divider>
        <Grid container spacing={2} mt={1}>
          <InputBox
            sm={12}
            label={"Nombre"}
            name={"valor"}
            useForm={useFormProps}
          ></InputBox>
          <SelectBox
            optionsList={[{ value: "Etapa" }, { value: "Categoria" }]}
            label={"Tipo"}
            optionLabel={"value"}
            optionValueId={"value"}
            extra_function={(e) => {
              if (e == "Etapa") {
                setTipo(1);
              } else {
                setTipo(0);
              }
            }}
            control={control}
          ></SelectBox>
          {tipo == 0 ? (
            <SelectColorBox
              sm={6}
              optionsList={[
                { nombre: "Turquesa", color: "#23E9A5" },
                { nombre: "Celeste", color: "#63C7FF" },
                { nombre: "Azul", color: "#3C7BFF" },
                { nombre: "Violeta", color: "#675BFF" },
                { nombre: "Lila", color: "#B023E9" },
                { nombre: "Fucsia", color: "#FB3088" },
                { nombre: "Rojo", color: "#EF5252" },
                { nombre: "Naranja", color: "#FD8429" },
                { nombre: "Amarillo", color: "#FDCB29" },
                { nombre: "Verde", color: "#A1EA22" },
              ]}
              label={"Color"}
              optionLabel={"nombre"}
              optionValueId={"nombre"}
              control={control}
            ></SelectColorBox>
          ) : (
            <SelectColorBox
              sm={6}
              optionsList={[
                { nombre: "1er Etapa", color: "#3498DB" },
                { nombre: "2da Etapa", color: "#29ABC9" },
                { nombre: "3ra Etapa", color: "#29C9C2" },
                { nombre: "4ta Etapa", color: "#1CB68E" },
                { nombre: "5ta Etapa", color: "#27B563" },
              ]}
              label={"Color"}
              optionLabel={"nombre"}
              optionValueId={"nombre"}
              control={control}
            ></SelectColorBox>
          )}
          <Grid item xs={12}>
            <BoxJustifyRight>
              <></>
              <ButtonBox
                onClickFunction={handleModal}
                isFill={true}
                label={"Guardar"}
                mr={1}
              ></ButtonBox>

              <ButtonBox
                onClickFunction={handleModal}
                isFill={false}
                label={"Cancelar"}
              ></ButtonBox>
            </BoxJustifyRight>
          </Grid>
        </Grid>
      </ModalBox>
    </BasePage>
  );
};
