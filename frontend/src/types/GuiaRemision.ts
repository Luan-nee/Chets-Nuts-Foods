export interface GuiaRemision {
  id: string;
  motivoTraslado: string;
}

export interface Remitente {
  ruc: string;
  razonSocial: string | null;
  nombres: string | null;
  apellidos: string | null;
}

export interface Destinatario {
  tipoDocumento: string;
  numeroDocumento: string;
  apellidosNombresRazonSocial: string;
}

export interface DocumentoRelacionado {
  tipoDocumento: "factura" | "boleta" | "otro";
  rucEmisor: string | null;
  serieDocumento: string | null;
  numeroDocumento: string | null;
}

export interface DetalleBienes {
  bienes: DocumentoRelacionado[];
  UnidadPesoBruto: string;
  PesoBrutoTotal: number;
}

export interface PuntoPartida {
  opcionUbicacion:
    | "establecimiento remitente"
    | "establecimiento tercero"
    | "domicilio remitente"
    | "otro";
  /* Establecimiento Remitente - datos necesarios */
  tipo_r: "Domicilio Fiscal" | "Establecimiento";
  ubigeo_r: string; // 170101
  domicilio_r: string; // AV. DOS DE MAYO MZ. J LOTE. 7A (FRENTE A COLEGIO DOS DE MAYO) MADRE DE DIOS - TAMBOPATA - TAMBOPATA

  /* Establecimiento de un tercero inscrito en el RUC - datos necesarios */
  ruc_c: string;
  tipo_c: "Domicilio Fiscal" | "Establecimiento";
  ubigeo_c: string; // 170101
  domicilio_c: string; // AV. DOS DE MAYO MZ. J LOTE. 7A (FRENTE A COLEGIO DOS DE MAYO) MADRE DE DIOS - TAMBOPATA - TAMBOPATA
}

export interface PuntoLlegada {
  direccion: string;
  ubigeo: string;
  departamento: string;
  provincia: string;
  distrito: string;
}
