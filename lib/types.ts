
export interface VLUContent {
  sitio_web: string;
  marca: {
    nombre: string;
    colores_primarios: {
      azul_principal: string;
      turquesa_claro: string;
      azul_medio: string;
      azul_oscuro: string;
    };
    posicionamiento: string;
    propuesta_valor: string;
  };
  resumen_ejecutivo: {
    contexto_estrategico: string;
    desafios_criticos: string[];
    objetivos_primarios: string[];
  };
  arquitectura_mensajes: {
    mensajes_universales: string[];
  };
  calendario_campanas: {
    periodo: string;
    total_campanas: number;
    campanas: Campana[];
  };
  estrategia_canales: {
    [key: string]: {
      enfoque: string;
      contenido_tipo: string[];
    };
  };
  viaje_cliente: {
    [key: string]: {
      objetivos: string;
      tacticas: string[];
    };
  };
  inversion_medios: {
    asignacion_presupuesto: string;
    estrategia_segmentacion: string;
    optimizacion: {
      alto_rendimiento: string;
      bajo_rendimiento: string;
      ajustes_estacionales: string;
    };
  };
  mecanismos_confianza: {
    generacion_ugc: string;
    recoleccion_resenas: {
      [key: string]: string;
    };
    construccion_comunidad: {
      [key: string]: string;
    };
  };
  kpis_medicion: {
    [key: string]: string[];
  };
  fases_implementacion: {
    [key: string]: {
      periodo: string;
      campanas: string[];
      metricas_exito: string[];
    };
  };
  indicadores_anuales_exito: {
    [key: string]: string[];
  };
  proximos_pasos: string[];
}

export interface Campana {
  nombre: string;
  periodo: string;
  objetivo_segmento: string;
  canales_primarios: string[];
  concepto_creativo: string;
  kpis?: string[];
}
