export enum StorageKeys {
  ACCESOS = "_accesos",
  APLICACION = "_aplicacion",
  ROL_INDEX = "_rolIndex",
  ASIGNACIONES = "_asignaciones",
  CENTRO_COSTOS="_centros_costos",
  MODULOS = "_modulos",
  PERSONA = "_persona",
  ROL = "_rol",
  USER = "_user",
  USER_TOKEN = "_token",
  LOGGED = "_logged",
  OPCION="_opcion"
}

// Los nombres de los modulos deben ir en plural

export enum ModulosSistema {
    // -------- SEGURIDAD --------
    ACCESOS = "accesos",
    APLICACIONES = "aplicaciones",
    BITACORA = "bitacora",
    COMPONENTES = "componentes",
    DIVISIONES = "divisiones",
    UNIDADES_NEGOCIO = "unidades_negocio",
    EMPRESA = "empresas",
    MODULOS = "modulos",
    PERSONAS = "personas",
    ROLES = "roles",
    ROL_ASIGNACION = "rol_asignacion",
    USUARIOS = "users",

    // -------- SISTEMA ACTUAL --------
    BASE = "base",
    PROVEEDORES = "proveedores",
    PRESUPUESTOS = "presupuestos",
    ORDEN_COMPRAS = "orden_compras",
    TIPO_DOCUMENTOS = "tipo_documentos",
    PERMISOS="permisos",
    CLIENTES = "clientes",
    FACTURA_EXPORTACIONES = "factura-exportaciones",
    HISTORICO_PRESUPUESTOS = "HISTORICO_PRESUPUESTOS"
}

export enum TipoAcceso {
  INDEX = "_index",
  INSERT = "_insert",
  UPDATE = "_update",
  DELETE = "_delete",
}


export enum ApiEndpoints {
    // -------- SEGURIDAD --------
    ACCESOS = "accesos",
    APLICACIONES = "aplicaciones",
    APLICACIONES_CON_ROLES = "aplicaciones?habilitado=1&roles=1",
    BITACORA = "bitacoras",
    COMPONENTES = "componentes",
    DIVISIONES = "divisiones",
    ELIMINAR_USUARIO_ROL = "eliminar-usuario-rol",
    EMPRESAS = "empresas",
    HABILITAR_COMPONENTES = "componentes/habilitar",
    HABILITAR_EMPRESAS = "empresas/habilitar",
    HABILITAR_MODULOS = "modulos/habilitar",
    HABILITAR_PERSONAS = "personas/habilitar",
    HABILITAR_ROL_ASIGNACION = "rol-asignaciones/habilitar",
    HABILITAR_ROLES = "roles/habilitar",
    HABILITAR_USERS = "users/habilitar",
    LOGIN = "aut/login",
    MODULOS = "modulos",
    MODULOS_BY_APP = "modulos/app",
    PERSONAS = "personas",
    FILTRAR_PERSONAS = "personas/filtrar",
    IMPORTAR_PERSONAS = "personas-upload",
    ROL_ASIGNACION = "rol-asignaciones",
    ROLES = "roles",
    ROLES_ACCESOS = "roles/accesos",
    UNIDAD_NEGOCIO = "unidades-negocio",
    USERS = "users",
    USUARIO_ROL = "usuario-rol",
    USUARIO_ROL_BASE = "usuario-rol/set-rol-base",

    // -------- SISTEMA ACTUAL --------
    PROVEEDORES = "proveedores",
    PROVEEDORES_VENTAS = "proveedores-ventas",
    PROVEEDORES_TOP_VENTAS="proveedores-topVentas",
    ORDEN_COMPRASH = "orden-comprash",
    ORDEN_COMPRASH_APROBACION = "orden-comprash-aprobacion",
    ORDEN_COMPRASH_INDEX = "orden-index",
    ORDEN_COMPRASH_INDEX_BY_CC = "orden-index-byCC",
    ORDEN_COMPRASH_INDEX_BY_USER = "orden-index-byUser",
    ORDEN_COMPRASH_MAIL = "orden-comprash-mail",
    ORDEN_COMPRASB = "orden-comprasb",
    ORDEN_APROBADAS = "orden-aprobadas",
    ORDEN_APROBADAS_BY_USER = "orden-aprobadas-byUser",
    ORDEN_PENDIENTES = "orden-pendientes",
    ORDEN_PENDIENTES_BY_USER = "orden-pendientes-byUser",
    ORDEN_COMPRASB_BY_ORDENCOMPRA = "orden-comprasb-byOC",
    ORDEN_COMPRASH_BY_USER = "orden-byUser",
    COTIZACIONES="cotizaciones",
    COTIZACIONES_PROVEEDORES="cotizaciones-proveedores",
    COTIZACIONES_BY_ITEM="cotizaciones-byItem",
    COTIZACIONES_BY_ARCHIVO="cotizaciones-byArchivo",
    COTIZACIONES_BY_SOLICITUD="cotizaciones-bySolicitud",
    
    ARCHIVOS = "archivos",
    PRESUPUESTOS = "presupuestos",
    PRESUPUESTOS_BY_CC="presupuestos-byCC",
    PRESUPUESTO_COMPROMETIDO="presupuestos-comprometido",
    PRESUPUESTO_ACTUALIZAR="presupuestos-actualizar",
    PRESUPUESTO_EXISTENCIA="presupuestos-existencia",
    PRESUPUESTO_ANUAL="presupuestos-anual",
    PRESUPUESTO_MENSUAL="presupuestos-mensual",
    PRESUPUESTO_TRANSFERENCIA="presupuestos-transferencia",
    PRESUPUESTO_TRANSFERENCIA_BY_CC="presupuestos-transferencia-byCC",
    PRESUPUESTO_HABILITADO="presupuestos-habilitados",
    PRESUPUESTO_SELECCIONADO="presupuestos-seleccionado",
    PRESUPUESTO_EXISTENCIA_CC="presupuestos-existenciaByCC",
    PRESUPUESTO_NUEVO_HABILITADO="presupuestos-nuevo-mes",
    
    TRANSFERENCIAS="transferencias",
    TRANSFERENCIAS_ORIGEN="transferencias-origen",
    TRANSFERENCIAS_DESTINO="transferencias-destino",
    TRANSFERENCIAS_CC="transferencias-cc",
    PRESUPUESTO_SUFICIENTE="presupuestos-suficiente",
    
    APROBACIONES="aprobaciones",
    PERMISOS="permisos",
    PERMISOS_BY_USER="permisos-byUser",
    PERMISOS_BY_RESPONSABLE="permisos-byResponsable",
    CONFIGURACIONES_BASE="configuraciones-base",
    CONFIGURACIONES="configuraciones",

    CENTRO_COSTOS="centro-costos",
    CENTRO_COSTOS_BY_PERIODO="cc-byPeriodo",
    CENTRO_COSTOS_BY_USER="persona-centro-costos",

    PRESUPUESTOS_HABILITADOS_BY_CC="presupuestos-habilitadosByCC",
    HISTORICO_PRESUPUESTOS = "historico-presupuestos",
    // ARCHIVOS = "archivos",
    ARCHIVOS_BY_ORDENCOMPRA = "archivos_byOrdenCompra",
    APROBADOS_BY_ORDENCOMPRA = "aprobados_byOrdenCompra",
    CLIENTES = "clientes",
    LISTA_UN = "listar_un",
    LISTA_CC = "listar_cc",
    LISTA_ARTICULO = "listar_articulos",
    ORDEN_CANTIDAD = "orden-cantidad",


    CONFIGURACIONES_VALOR="configuraciones-valor" ,
    CONFIGURACIONES_TIPOCAMBIO="configuraciones-tipoCambio",
    //PROYECTO
    TAREAS = "tareas",
    
}

export enum Messages {
  NO_SE_PUDO_COMPLETAR = "No se pudo completar la operación",
  OPERACION_CORRECTA = "Operación correcta",
}

export enum PermisosConfiguraciones {
  TIPO_CAMBIO="tipo_cambio",
  EDICION_PRESUPUESTO="edicion_presupuestos",
  CREACION_PRESUPUESTO="creacion_presupuestos",
}