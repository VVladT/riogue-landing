import { Injectable } from '@angular/core';
import { CompanyIdentityList } from './company-identity.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyIdentityService {
  private readonly basePath = "/images/identity";

  private readonly identityList: CompanyIdentityList = [
    {
      name: 'Misión',
      description: 'Nuestro propósito fundamental, es el de ofrecer un servicio de telecomunicaciones e informática profesional, para todo índole de nivel empresarial, aportando la confianza y tranquilidad necesaria a la hora de adquirir soluciones de calidad a un precio razonable, en un mundo complejo que evoluciona a velocidad en las nuevas tecnologías de comunicación',
      imgUrl: `${this.basePath}/mision.webp`,
      imgOnRight: false
    },
    {
      name: 'Visión',
      description: 'Buscamos ser una empresa de referencia, que camina con el cambio de la tecnología y la sociedad, dando a conocer las posibilidades de los estándares y tecnologías libres. Esta labor se debe desempeñar de forma ética y satisfactoria para nosotros, nuestros clientes y el resto de la sociedad',
      imgUrl: `${this.basePath}/vision.jpg`,
      imgOnRight: true
    },
    {
      name: 'Objetivo',
      description: 'Establecer relaciones de negocios sólidas y permanentes con nuestros clientes, manteniéndonos como sus socios estratégicos, brindándoles soluciones outsourcing para sus negocios locales y offshore',
      imgUrl: `${this.basePath}/objetivos.webp`,
      imgOnRight: false
    },
  ]

  getIdentityList(): CompanyIdentityList {
    return this.identityList;
  }
}
