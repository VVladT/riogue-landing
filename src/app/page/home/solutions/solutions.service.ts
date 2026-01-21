import { Injectable } from '@angular/core';
import { Solutions } from './solutions.model';

@Injectable({
  providedIn: 'root',
})
export class SolutionsService {
  private readonly basePath = "images/solutions"

  private readonly solutions: Solutions = [
    {
      name: 'Soluciones de Internet',
      description: '',
      imgUrl: `${this.basePath}/TI-mujer-con-laptop.jpg`
    },
    {
      name: 'Cableado Estructurado de datos, audio y video',
      description: '',
      imgUrl: `${this.basePath}/instalacion-cables-electricos.png`
    },
    {
      name: 'Implementación de cámaras de video',
      description: '',
      imgUrl: `${this.basePath}/instalar-una-camara-de-seguridad.jpg`
    },
    {
      name: 'Implementación de sistemas de alarmas',
      description: '',
      imgUrl: `${this.basePath}/instalacion-alarma.jpg`
    },
    {
      name: 'Instalación de racks para sistemas de audio y video',
      description: '',
      imgUrl: `${this.basePath}/estructuras-metalicas.jpg`
    },
    {
      name: 'Reparación y Mantenimiento de Hardware y Software',
      description: '',
      imgUrl: `${this.basePath}/reparacion-de-computadoras.jpeg`
    },
    {
      name: 'Implementación de cerco eléctrico y pozo a tierra',
      description: '',
      imgUrl: `${this.basePath}/instalacion-cerco-electrico.jpg`
    },
  ]

  getSolutions(): Solutions {
    return this.solutions;
  }
}
