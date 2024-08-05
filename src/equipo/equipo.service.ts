import { Injectable } from '@nestjs/common';
import { EquipoDto, AreaDto, EcommerceDto } from './dto/equipo.dto';

@Injectable()
export class EquipoService {
  private equipo: EquipoDto = {
    nombre: 'Pet-tacular',
    areas: [
      {
        nombre: 'Diseño UX/UI',
        lider: { nombre: 'María Yáñez', rol: 'Líder de Diseño UX/UI' },
        personas: [
          { nombre: 'Carolina Herrera', rol: 'Diseñadora UX/UI' },
          { nombre: 'Luis Gonzales', rol: 'Diseñador UX/UI' },
          { nombre: 'Nelson Cáceres', rol: 'Diseñador UX/UI' },
          { nombre: 'Valeria Jara', rol: 'Diseñadora UX/UI' },
        ],
      },
      {
        nombre: 'Desarrollo Frontend',
        lider: { nombre: 'Leonardo Arias', rol: 'Líder de Desarollo Frontend' },
        personas: [
          { nombre: 'Claudia Moragrega', rol: 'Desarrolladora Frontend' },
        ],
      },
      {
        nombre: 'Desarollo Backend',
        lider: { nombre: 'Rodrigo Alcayaga', rol: 'Líder de Desarrollo Backend' },
        personas: [
          { nombre: 'Andree Baradit', rol: 'Desarrollador Backend' },
          { nombre: 'Anyelo Flores', rol: 'Desarrollador Backend' },
          { nombre: 'Lorenzo Baeza', rol: 'Desarrollador Backend' },
          { nombre: 'Mauricio Piña', rol: 'Desarrollador Backend' },
        ],
      },
    ],
    ecommerce: {
      nombre: 'Pétropolis',
      descripcion: 'Compra de productos especializados para mascotas con una experiencia personalizada.',
      tipo: 'Aplicación Web de E-commerce B2C (Business to Consumer)',
      objetivoGeneral: 'Ofrecer productos para mascotas con una experiencia de compra personalizada y adaptada a las necesidades de cada cliente.',
      objetivosEspecificos: [
        'Proporcionar una amplia gama de productos para mascotas de alta calidad.',
        'Brindar una experiencia de compra personalizada basada en las preferencias del cliente.',
        'Garantizar un proceso de compra fácil y rápido.',
        'Ofrecer soporte y asesoramiento especializado para el cuidado de mascotas.',
      ],
    },
  };

  obtenerEquipo(): EquipoDto {
    return this.equipo;
  }

  obtenerAreaPorNombre(nombre: string): { area?: AreaDto; mensaje?: string } {
    for (const area of this.equipo.areas) {
      if (area.nombre === nombre) {
        return { area };
      }
    }
    return { mensaje: `Área con nombre ${nombre} no encontrada` };
  }

  obtenerTodasLasAreas(): AreaDto[] {
    return this.equipo.areas;
  }

  obtenerDatosEcommerce(): EcommerceDto {
    return this.equipo.ecommerce;
  }
}