import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface PartnershipBenefit {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-partnerships',
  imports: [CommonModule, RouterModule],
  templateUrl: './partnerships.html',
  styleUrl: './partnerships.css',
})
export class Partnerships {
  benefits: PartnershipBenefit[] = [
    {
      icon: 'fas fa-chart-line',
      title: 'Alcance & Engajamento',
      description: 'Mais de 1 milhão de visualizações nas redes e forte impacto no público jovem e ativo de cultura pop.',
    },
    {
      icon: 'fas fa-users',
      title: 'Conexão Geração Z',
      description: 'Fã-base apaixonada, engajada e fiel que consome e apoia financeiramente marcas apoiadoras.',
    },
    {
      icon: 'fas fa-star',
      title: 'Entretenimento de Elite',
      description: 'Performances e produções que recriam fielmente a intensidade dos grandes shows e turnês de K-pop.',
    },
    {
      icon: 'fas fa-camera',
      title: 'Audiovisual de Impacto',
      description: 'Inserções orgânicas em trends, reels virais e covers cinematográficos de altíssima qualidade visual.',
    },
  ];
}

