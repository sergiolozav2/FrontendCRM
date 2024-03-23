export const Lista_TipoSolicitud = [
  {
    opcion: "Compra Local",
  },
  {
    opcion: "Importacion",
  },
];
export const Lista_TipoCompra = [
  {
    opcion: "Insumos",
  },
  {
    opcion: "Servicios",
  },
];
export const Lista_TipoMoneda = [
  {
    opcionLabel: "Bs.",
    opcionValue: "Bs.",
  },
  {
    opcionLabel: "$us",
    opcionValue: "$us",
  },
];
export const ListaSINO = [
  {
    opcionLabel: "SI",
    opcionValue: 1,
  },
  {
    opcionLabel: "NO",
    opcionValue: 2,
  },
];
export const ListaAlmacen = [
  {
    opcionLabel: "0 - SIN ALMACEN",
    opcionValue: 1,
  },
  {
    opcionLabel: "141 - PA¥-MP - CENTRAL NUEVO",
    opcionValue: 141,
  },
  {
    opcionLabel: "160 - PAN-REPUESTOS Y MATERIALES",
    opcionValue: 160,
  },
  {
    opcionLabel: "900 - ADM-ALMACEN MATERIALES",
    opcionValue: 900,
  },
  {
    opcionLabel: "154 -PA¥-MATERIAL GENERAL - CENTRAL ITALSA",
    opcionValue: 154,
  },
  {
    opcionLabel: "241 - DISP.MED-MP - CENTRAL NUEVO",
    opcionValue: 241,
  },
  {
    opcionLabel: "902 - ADM-ALMACEN MARKETING",
    opcionValue: 902,
  },
];
export const ListaMetodoPago = [
  {
    opcionValue: "CONTADO",
    opcionLabel: "CONTADO",
  },
  {
    opcionValue: "CREDITO",
    opcionLabel: "CREDITO",
  },
];
export const ListaVistas = [
  {
    opcionValue: 1,
    opcionLabel: "TODAS",
  },
  {
    opcionValue: 2,
    opcionLabel: "PENDIENTES",
  },
  {
    opcionValue: 3,
    opcionLabel: "APROBADAS",
  },
];
export const ListaPeriodos = [
  {
    opcionValue: 1,
    opcionLabel: "DIA",
  },
  {
    opcionValue: 2,
    opcionLabel: "SEMANA",
  },
  {
    opcionValue: 3,
    opcionLabel: "MES",
  },
];
export const Meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
export const AccionesEstado = [
  "",
  "APROBAR REVISION",
  "APROBAR REVISION",
  "APROBAR",
  "APROBAR",
  "REALIZAR COMPRA",
  "RECIBIR DEL PROVEEDOR",
  "RECIBIDO EN CONTABILIDAD",
];
export const Estados = [
  "PENDIENTE",
  "COTIZADO",
  "REVISADO",
  "SEMI-APROBADO",
  "APROBADO",
  "EN CURSO",
  "RECIBIDO",
  "CONTABILIDAD",
  "RECHAZADO",
  "CANCELADO",
];
export const Excepciones = [
  "Cotizaciones competitivas de Items similares o especificos han sido obtenidas en los ultimos 12 meses",
  "Menos de 3 fuentes están disponibles o responden",
  "El item/servicio es formalmente identificado como propiedad exclusiva del proveedor",
  "Existe una fuente estratégica formal para el ítem",
  "Material, equipo o servicio de prueba",
  "El item es necesario para eliminar un riesgo inminente de seguridad o salud",
  "El item es necesario para restaurar, prevenir o mitigar eminente riesgo de pérdida de capacidad de produccion",
];
export const Años = [
  {
    opcionValue: 2020,
    opcionLabel: "2020",
  },
  {
    opcionValue: 2021,
    opcionLabel: "2021",
  },
  {
    opcionValue: 2022,
    opcionLabel: "2022",
  },
  {
    opcionValue: 2023,
    opcionLabel: "2023",
  },
  {
    opcionValue: 2024,
    opcionLabel: "2024",
  },
  {
    opcionValue: 2025,
    opcionLabel: "2025",
  },
  {
    opcionValue: 2026,
    opcionLabel: "2026",
  },
  {
    opcionValue: 2027,
    opcionLabel: "2027",
  },
  {
    opcionValue: 2028,
    opcionLabel: "2028",
  },
  {
    opcionValue: 2029,
    opcionLabel: "2029",
  },
  {
    opcionValue: 2030,
    opcionLabel: "2030",
  },
  {
    opcionValue: 2031,
    opcionLabel: "2031",
  },
  {
    opcionValue: 2032,
    opcionLabel: "2032",
  },
  {
    opcionValue: 2033,
    opcionLabel: "2033",
  },
  {
    opcionValue: 2034,
    opcionLabel: "2034",
  },
  {
    opcionValue: 2035,
    opcionLabel: "2035",
  },
];

export const listaConversaciones = [
  { nombreContacto: "Cliente 1", lastMessage: "Gracias", timeMessage: "18:45" },
  { nombreContacto: "Cliente 2", lastMessage: "Gracias", timeMessage: "18:44" },
  { nombreContacto: "Cliente 3", lastMessage: "Gracias", timeMessage: "18:45" },
  { nombreContacto: "Cliente 4", lastMessage: "Gracias", timeMessage: "18:45" },
];

export const listaMensajes = [
  {
    personMessage: 1,
    message: "mensaje 1",
    timeMessage: "18:45",
  },
];

export const listaInformacionClientes = [
  {
    nombre: "Cliente 1",
    telefono: 70005958,
    colorEtapa: "#3498DB",
    etapa: "Contacto Inicial",
    colorPrioridad: "#F51D5C",
    prioridad: "Alta",
    probabilidad: "50%",
    categoria: 2,
    cantidad: 5,
    ganancias: 50000,
  },
  {
    nombre: "Cliente 2",
    telefono: 70005958,
    colorEtapa: "#29C9C2",
    etapa: "Seguimiento",
    colorPrioridad: "#1FCB71",
    prioridad: "Baja",
    probabilidad: "50%",
    categoria: 2,
    cantidad: 5,
    ganancias: 50000,
  },
  {
    nombre: "Cliente 3",
    telefono: 70005958,
    colorEtapa: "#1CB68E",
    etapa: "Negociacion",
    colorPrioridad: "#F5B31D",
    prioridad: "Media",
    probabilidad: "50%",
    categoria: 1,
    cantidad: 5,
    ganancias: 50000,
  },
  {
    nombre: "Cliente 4",
    telefono: 70005958,
    colorEtapa: "#1CB68E",
    etapa: "Negociacion",
    colorPrioridad: "#1FCB71",
    prioridad: "Baja",
    probabilidad: "50%",
    categoria: 3,
    cantidad: 5,
    ganancias: 50000,
  },
  {
    nombre: "Cliente 5",
    telefono: 70005958,
    colorEtapa: "#29C9C2",
    etapa: "Seguimiento",
    colorPrioridad: "#F51D5C",
    prioridad: "Alta",
    probabilidad: "50%",
    categoria: 1,
    cantidad: 5,
    ganancias: 50000,
  },
  {
    nombre: "Cliente 6",
    telefono: 70005958,
    colorEtapa: "#1CB68E",
    etapa: "Negociacion",
    colorPrioridad: "#F51D5C",
    prioridad: "Alta",
    probabilidad: "50%",
    categoria: 3,
    cantidad: 5,
    ganancias: 50000,
  },
  {
    nombre: "Cliente 7",
    telefono: 70005958,
    colorEtapa: "#27B563",
    etapa: "Vendido",
    colorPrioridad: "#F5B31D",
    prioridad: "Media",
    probabilidad: "50%",
    categoria: 1,
    cantidad: 5,
    ganancias: 50000,
  },
  {
    nombre: "Cliente 8",
    telefono: 70005958,
    colorEtapa: "#1CB68E",
    etapa: "Negociacion",
    colorPrioridad: "#F51D5C",
    prioridad: "Alta",
    probabilidad: "50%",
    categoria: 2,
    cantidad: 5,
    ganancias: 50000,
  },
  {
    nombre: "Cliente 9",
    telefono: 70005958,
    colorEtapa: "#27B563",
    etapa: "Vendido",
    colorPrioridad: "#F5B31D",
    prioridad: "Media",
    probabilidad: "50%",
    categoria: 4,
    cantidad: 5,
    ganancias: 50000,
  },
  {
    nombre: "Cliente 10",
    telefono: 70005958,
    colorEtapa: "#29C9C2",
    etapa: "Seguimiento",
    colorPrioridad: "#F5B31D",
    prioridad: "Media",
    probabilidad: "50%",
    categoria: 4,
    cantidad: 5,
    ganancias: 50000,
  },
  {
    nombre: "Cliente 11",
    telefono: 70005958,
    colorEtapa: "#3498DB",
    etapa: "Contacto Inicial",
    colorPrioridad: "#F5B31D",
    prioridad: "Media",
    probabilidad: "50%",
    categoria: 5,
    cantidad: 5,
    ganancias: 50000,
  },
];

export const listaCategorias = [
  {
    nombre: "Ropa Femenina",
    categoria: 1,
    color: "#63C7FF",
    cantidadClientes: 2,
    cantidadGanancias: 10000,
  },
  {
    nombre: "Ropa Masculina",
    color: "#FB3088",
    categoria: 2,
    cantidadClientes: 4,
    cantidadGanancias: 50000,
  },
  {
    nombre: "Zapatos",
    color: "#675BFF",
    categoria: 3,
    cantidadClientes: 7,
    cantidadGanancias: 70000,
  },
  {
    nombre: "Accesorios",
    color: "#A1EA22",
    categoria: 4,
    cantidadClientes: 10,
    cantidadGanancias: 30000,
  },
  {
    nombre: "Sin categoria",
    categoria: 5,
    color: "gray",
    cantidadClientes: 2,
    cantidadGanancias: 10000,
  },
];
export const listaOpciones = [
  { titulo: "CONVERSACIONES", opcion: 1, ruta: "/conversaciones" },
  { titulo: "ITEMS", opcion: 2, ruta: "/items" },
  { titulo: "CLIENTES", opcion: 3, ruta: "/clientes" },
  { titulo: "VENTAS", opcion: 4, ruta: "/ventas" },
  { titulo: "MENSAJES RÁPIDOS", opcion: 5, ruta: "/mensajes-rapidos" },
];
export const listaItems = [
  {
    itemID: 1,
    nombre: "Item 1",
    descripcion: "Descripcion 1",
    precio: 40,
    montoVendido: 200,
    cantidadVendida: 5,
    cantidadCotizada: 10,
  },
  {
    itemID: 2,
    nombre: "Item 2",
    descripcion: "Descripcion 2",
    precio: 20,
    montoVendido: 300,
    cantidadVendida: 15,
    cantidadCotizada: 20,
  },
  {
    itemID: 3,
    nombre: "Item 3",
    descripcion: "Descripcion 3",
    precio: 15,
    montoVendido: 150,
    cantidadVendida: 10,
    cantidadCotizada: 30,
  },
  {
    itemID: 4,
    nombre: "Item 4",
    descripcion: "Descripcion 4",
    precio: 35,
    montoVendido: 350,
    cantidadVendida: 10,
    cantidadCotizada: 30,
  },
];
export const listaTareas = [
  {
    tareaID: 1,
    descripcion: "Recoger manteles y platos de Doña Juanita",
    cliente_id: 1,
    cliente_nombre: "Cliente 1",
    fecha_fin: "20/12/2023",
  },
  {
    tareaID: 2,
    descripcion: "Comprar mas sillas para alquilar",
    cliente_id: 0,
    cliente_nombre: "",
    fecha_fin: "21/12/2023",
  },
  {
    tareaID: 3,
    descripcion: "Item 3",
    cliente_id: "Entregar 200 mesas en la zona Norte",
    cliente_nombre: "Descripcion 3",
    fecha_fin: "24/12/2023",
  },
];
export const listaIntegrantes = [
  {
    integranteID: 1,
    nombre: "Juan Perez",
    cargo: "Administrador",
    correo: "jperez@gmail.com",
    telefono: "70005958",
  },
  {
    integranteID: 2,
    nombre: "Carla Fernandez",
    cargo: "Gerente de Ventas",
    correo: "cfernandez@gmail.com",
    telefono: "60004948",
  },
  {
    integranteID: 3,
    nombre: "Pedro Martinez",
    cargo: "Pasante de Ventas",
    correo: "pmartinez@gmail.com",
    telefono: "70056585",
  },
  {
    integranteID: 4,
    nombre: "Gonzalo Villarroel",
    cargo: "Encargado Call Center",
    correo: "gvillarroel@gmail.com",
    telefono: "65202220",
  },
];
