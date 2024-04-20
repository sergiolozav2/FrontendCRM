export const listaVentas = [
  {
    itemID: 1,
    itemNombre: "Item 1",
    cantidadItem: 5,
    totalItem: 10,
    ventas: [
      {
        clienteID: 1,
        clienteNombre: "Juan",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "efectivo",
      },
      {
        clienteID: 2,
        clienteNombre: "Maria",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "efectivo",
      },
      {
        clienteID: 3,
        clienteNombre: "Alex",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "efectivo",
      },
    ],
  },
  {
    itemID: 2,
    itemNombre: "Item 1",
    cantidadItem: 5,
    totalItem: 10,
    ventas: [
      {
        clienteID: 4,
        clienteNombre: "Diana",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "efectivo",
      },
      {
        clienteID: 1,
        clienteNombre: "Juan",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "efectivo",
      },
      {
        clienteID: 7,
        clienteNombre: "Luciana",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "efectivo",
      },
    ],
  },
  {
    itemID: 3,
    itemNombre: "Item 1",
    cantidadItem: 5,
    totalItem: 10,
    ventas: [
      {
        clienteID: 1,
        clienteNombre: "Juan",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "efectivo",
      },
      {
        clienteID: 2,
        clienteNombre: "Ana",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "efectivo",
      },
      {
        clienteID: 3,
        clienteNombre: "Cliente 3",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "efectivo",
      },
    ],
  },
  {
    itemID: 4,
    itemNombre: "Item 1",
    cantidadItem: 5,
    totalItem: 10,
    ventas: [
      {
        clienteID: 4,
        clienteNombre: "Julia",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "efectivo",
      },
      {
        clienteID: 1,
        clienteNombre: "Juan",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "efectivo",
      },
      {
        clienteID: 5,
        clienteNombre: "Marta",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "efectivo",
      },
    ],
  },
];
export const listaVentasByCliente = [
  {
    clienteID: 1,
    clienteNombre: "Maria",
    cantidadItem: 5,
    totalItem: 6,
    ventas: [
      {
        itemID: 1,
        productoNombre: "item 1",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "Efectivo",
      },
      {
        itemID: 2,
        productoNombre: "item 2",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "Efectivo",
      },
    ],
  },
  {
    clienteID: 2,
    clienteNombre: "Carla",
    cantidadItem: 5,
    totalItem: 6,
    ventas: [
      {
        itemID: 1,
        productoNombre: "item 1",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "Efectivo",
      },
    ],
  },
  {
    clienteID: 3,
    clienteNombre: "Steph",
    cantidadItem: 5,
    totalItem: 6,
    ventas: [
      {
        itemID: 1,
        productoNombre: "item 1",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "Efectivo",
      },
      {
        itemID: 2,
        productoNombre: "item 2",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "Efectivo",
      },
      {
        itemID: 3,
        productoNombre: "item 3",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "Efectivo",
      },
    ],
  },
  {
    clienteID: 4,
    clienteNombre: "Mariano",
    cantidadItem: 5,
    totalItem: 6,
    ventas: [
      {
        itemID: 1,
        productoNombre: "item 1",
        cantidadItem: 2,
        precioItem: 500,
        totalItem: 1000,
        fecha: "20/10/2024",
        tipoPago: "Efectivo",
      },
    ],
  },
];
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
export const listaSesion = [
  {
    wa_sesionID: "4d4d68f5-42ab-49a5-8865-99176f2769c5",
    creadoEn: "2024-03-20T18:29:15.848Z",
    creador: {
      usuarioID: 1,
      correo: "user@example.com",
      nombre: "Pedro",
    },
  },
  {
    wa_sesionID: "789ff366-5c7e-48b6-afff-e69f05ab29dc",
    creadoEn: "2024-03-20T23:30:20.085Z",
    creador: {
      usuarioID: 1,
      correo: "user@example.com",
      nombre: "Pedro",
    },
  },
];

export const informacionUsuario = {
  usuario: {
    usuarioID: 1,
    nombre: "Pedro",
    correo: "user@example.com",
    empresa: {
      empresaID: 1,
      creadoEn: "2024-03-20T18:28:50.076Z",
      nombreEmpresa: "Maxcorp",
    },
    tipo: "EMPRESARIO",
    telefono: "+123456",
    licencia: null,
    rol: null,
  },
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSUQiOjEsImVtcHJlc2FJRCI6MSwidHlwZSI6Imp3dCIsImlhdCI6MTcxMTY0MDYzNywiZXhwIjoxNzExOTg2MjM3fQ.13DvuuPfqZ4vkwiqmBlgwdpy-2OMncDjnq887MMSzXo",
  refreshToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvSUQiOjEsImVtcHJlc2FJRCI6MSwidHlwZSI6InJlZnJlc2giLCJpYXQiOjE3MTE2NDA2MzcsImV4cCI6MTcxMTcyNzAzN30.965rYkp-k_zGRNZl6yfNuYpW4xqFUyP-kcACbT-hcy4",
};

export const listaMensajes = [
  {
    clienteID: 1,
    listaMensajes: [
      {
        personMessage: 2,
        message:
          "Buenas tardes como esta, me gustaría preguntar por el producto tanto",
        timeMessage: "18:45",
      },
      {
        personMessage: 2,
        message: "Todavia lo tiene disponible",
        timeMessage: "18:45",
      },
      {
        personMessage: 1,
        message: "Buenas noches, si, estaría a 100bs sin incluir envio",
        timeMessage: "18:45",
      },
      {
        personMessage: 2,
        message: "Y con envio cuantos sería",
        timeMessage: "18:45",
      },
      {
        personMessage: 2,
        message: "a la Av. Banzer 7mo anillo",
        timeMessage: "18:45",
      },
      {
        personMessage: 1,
        message: "Seria 10Bs",
        timeMessage: "18:45",
      },
      {
        personMessage: 2,
        message: "Esta Perfecto, muchas gracias",
        timeMessage: "18:45",
      },
    ],
  },
  {
    clienteID: 2,
    listaMensajes: [
      {
        personMessage: 2,
        message: "Buenas noches a cuanto el promoción de invierno",
        timeMessage: "18:45",
      },
      {
        personMessage: 1,
        message: "El paquete está a 500Bs",
        timeMessage: "18:45",
      },
      {
        personMessage: 1,
        message: "Por la compra de dos, hay un 20% de descuento",
        timeMessage: "18:45",
      },
      {
        personMessage: 2,
        message: "Con uno estaría bien, gracias",
        timeMessage: "18:45",
      },
      {
        personMessage: 1,
        message: "Claro, el pago como desea realizar",
        timeMessage: "18:45",
      },
      {
        personMessage: 2,
        message: "Se puede por transferencia",
        timeMessage: "18:45",
      },
      {
        personMessage: 2,
        message: "O por QR también estaría bien",
        timeMessage: "18:45",
      },
    ],
  },
  {
    clienteID: 3,
    listaMensajes: [
      {
        personMessage: 2,
        message: "Vi en facebook que tiene a la venta tal producto",
        timeMessage: "18:45",
      },
      {
        personMessage: 2,
        message: "Quisiera saber el precio y en cuanto tiempo me lo entregan",
        timeMessage: "18:45",
      },
      {
        personMessage: 1,
        message: "Si, estaría a 100Bs, en 2 días se entrega",
        timeMessage: "18:45",
      },
      {
        personMessage: 2,
        message:
          "Estaría perfecto muchas gracias, hasta cuando le puedo confirmar",
        timeMessage: "18:45",
      },
      {
        personMessage: 1,
        message:
          "Hasta acabar stock, unos tres días mas estaría disponible yo creo",
        timeMessage: "18:45",
      },
      {
        personMessage: 1,
        message: "Me avisa cualquier cosa",
        timeMessage: "18:45",
      },
    ],
  },
  {
    clienteID: 4,
    listaMensajes: [
      {
        personMessage: 1,
        message: "Buenas tardes",
        timeMessage: "18:45",
      },
    ],
  },
  {
    clienteID: 5,
    listaMensajes: [
      {
        personMessage: 1,
        message: "Buenas tardes",
        timeMessage: "18:45",
      },
    ],
  },
  {
    clienteID: 6,
    listaMensajes: [
      {
        personMessage: 1,
        message: "Buenas tardes",
        timeMessage: "18:45",
      },
    ],
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
export const listaConversaciones2 = [
  {
    chatID: 1,
    jid: "59175034784@s.whatsapp.net",
    creadoEn: "2024-03-20T18:57:17.325Z",
    clienteID: 1,
    cliente: null,
    mensajes: [
      {
        mensajeID: 1,
        creadoEn: "2024-03-20T18:57:17.331Z",
        wa_id: "3EB0A555FA5100F49CC666",
        wa_contenido: '{"conversation":"g7xp"}',
        tipoMensaje: "TEXTO",
        chatID: 1,
      },
      {
        mensajeID: 3,
        creadoEn: "2024-03-20T19:49:35.000Z",
        wa_id: "3EB0C4DCBDD6EA67166030",
        wa_contenido: '{"conversation":"nex87e2"}',
        tipoMensaje: "TEXTO",
        chatID: 1,
      },
    ],
  },
  {
    chatID: 2,
    jid: "59175034784@s.whatsapp.net",
    creadoEn: "2024-03-20T18:57:17.325Z",
    clienteID: 2,
    cliente: null,
    mensajes: [
      {
        mensajeID: 1,
        creadoEn: "2024-03-20T18:57:17.331Z",
        wa_id: "3EB0A555FA5100F49CC666",
        wa_contenido: '{"conversation":"g7xp"}',
        tipoMensaje: "TEXTO",
        chatID: 1,
      },
      {
        mensajeID: 3,
        creadoEn: "2024-03-20T19:49:35.000Z",
        wa_id: "3EB0C4DCBDD6EA67166030",
        wa_contenido: '{"conversation":"nex87e2"}',
        tipoMensaje: "TEXTO",
        chatID: 1,
      },
    ],
  },
  {
    chatID: 3,
    jid: "59175034784@s.whatsapp.net",
    creadoEn: "2024-03-20T18:57:17.325Z",
    clienteID: 3,
    cliente: null,
    mensajes: [
      {
        mensajeID: 1,
        creadoEn: "2024-03-20T18:57:17.331Z",
        wa_id: "3EB0A555FA5100F49CC666",
        wa_contenido: '{"conversation":"g7xp"}',
        tipoMensaje: "TEXTO",
        chatID: 1,
      },
      {
        mensajeID: 3,
        creadoEn: "2024-03-20T19:49:35.000Z",
        wa_id: "3EB0C4DCBDD6EA67166030",
        wa_contenido: '{"conversation":"nex87e2"}',
        tipoMensaje: "TEXTO",
        chatID: 1,
      },
    ],
  },
  {
    chatID: 4,
    jid: "59175034784@s.whatsapp.net",
    creadoEn: "2024-03-20T18:57:17.325Z",
    clienteID: 4,
    cliente: null,
    mensajes: [
      {
        mensajeID: 1,
        creadoEn: "2024-03-20T18:57:17.331Z",
        wa_id: "3EB0A555FA5100F49CC666",
        wa_contenido: '{"conversation":"g7xp"}',
        tipoMensaje: "TEXTO",
        chatID: 1,
      },
      {
        mensajeID: 3,
        creadoEn: "2024-03-20T19:49:35.000Z",
        wa_id: "3EB0C4DCBDD6EA67166030",
        wa_contenido: '{"conversation":"nex87e2"}',
        tipoMensaje: "TEXTO",
        chatID: 1,
      },
    ],
  },
];

export const listaClientes = [
  {
    clienteID: 1,
    clienteNombre: "Maria Jose",
    telefono: "70005958",
    email: "mjso0308@gmail.com",
    categoria: "Ropa Femenina",
    prioridad: "Media",
    etapa: "Negociacion",
    colorEtapa: "red",
    colorCategoria: "#63C7FF",
    colorPrioridad: "red",
  },
  {
    clienteID: 2,
    clienteNombre: "Juan SC",
    telefono: "78965412",
    email: "juan_sc@gmail.com",
    categoria: "Accesorios",
    prioridad: "Alta",
    etapa: "Negociacion",
    colorEtapa: "red",
    colorCategoria: "#A1EA22",
    colorPrioridad: "red",
  },
  {
    clienteID: 3,
    clienteNombre: "Luciana LP",
    telefono: "60045480",
    email: "luciana_lp@gmail.com",
    categoria: "Zapatos",
    prioridad: "Alta",
    etapa: "Seguimiento",
    colorEtapa: "red",
    colorCategoria: "#675BFF",
    colorPrioridad: "red",
  },
  {
    clienteID: 4,
    clienteNombre: "+591 71234567",
    telefono: "71234567",
    email: "",
    categoria: "Sin Categoría",
    prioridad: "Media",
    etapa: "Contacto inicial",
    colorEtapa: "red",
    colorCategoria: "gray",
    colorPrioridad: "red",
  },
  {
    clienteID: 5,
    clienteNombre: "Carlos CBBA",
    telefono: "60000000",
    email: "juan_sc@gmail.com",
    categoria: "Ropa Masculina",
    prioridad: "Alta",
    etapa: "Negociacion",
    colorEtapa: "red",
    colorCategoria: "#FB3088",
    colorPrioridad: "red",
  },
  {
    clienteID: 6,
    clienteNombre: "Camila SC",
    telefono: "78965412",
    email: "juan_sc@gmail.com",
    categoria: "Accesorios",
    prioridad: "Alta",
    etapa: "Negociacion",
    colorEtapa: "red",
    colorCategoria: "#A1EA22",
    colorPrioridad: "red",
  },
];

export const listaOpciones = [
  { titulo: "CONVERSACIONES", opcion: 1, ruta: "/conversaciones" },
  { titulo: "ITEMS", opcion: 2, ruta: "/items" },
  { titulo: "CLIENTES", opcion: 3, ruta: "/clientes" },
  { titulo: "VENTAS", opcion: 4, ruta: "/ventas" },
  { titulo: "MENSAJES RÁPIDOS", opcion: 5, ruta: "/mensajes-rapidos" },
  { titulo: "INTEGRANTES", opcion: 6, ruta: "/integrantes" },
  { titulo: "TAREAS", opcion: 7, ruta: "/tareas" },
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
