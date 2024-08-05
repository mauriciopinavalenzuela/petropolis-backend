export class PersonaDto {
    nombre: string;
    rol: string;
  }
  
  export class LiderDto {
    nombre: string;
    rol: string;
  }
  
  export class AreaDto {
    nombre: string;
    lider: LiderDto;
    personas: PersonaDto[];
  }
  
  export class EcommerceDto {
    nombre: string;
    descripcion: string;
    tipo: string;
    objetivoGeneral: string;
    objetivosEspecificos: string[];
  }
  
  export class EquipoDto {
    nombre: string;
    areas: AreaDto[];
    ecommerce: EcommerceDto; 
  }
  