import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Event {
  date: string;
  title: string;
  location: string;
  description: string;
  type: 'highlight' | 'experience';
}

@Component({
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  events: Event[] = [
    {
      date: '2018',
      title: 'Animextreme',
      location: 'Porto Alegre, RS',
      description: 'Nossa primeira apresentação oficial, marcada por energia e conexão com o público K-pop.',
      type: 'highlight',
    },
    {
      date: '2019',
      title: 'Dreamfest I',
      location: 'Porto Alegre, RS',
      description: '1º lugar com “Shooting Stars”, consolidando nossa presença nas competições.',
      type: 'highlight',
    },
    {
      date: '2019',
      title: 'Union Contest',
      location: 'Porto Alegre, RS',
      description: '1º lugar com “Sticker”, reforçando nossa consistência técnica.',
      type: 'highlight',
    },
    {
      date: '2019',
      title: 'Dreamfest II',
      location: 'Porto Alegre, RS',
      description: '2º lugar com “Love Me Right”, mantendo a liderança nas principais competições.',
      type: 'highlight',
    },
    {
      date: '2024',
      title: 'Hyelin (EXID)',
      location: 'Porto Alegre, RS',
      description: 'Atuamos como backdancers oficiais, uma experiência decisiva e inspiradora.',
      type: 'experience',
    },
    {
      date: '2025',
      title: 'FIH2 Curitiba',
      location: 'Curitiba, PR',
      description: 'Primeira competição interestadual como grupo independente do RS, com palco profissional e aprendizado marcante.',
      type: 'experience',
    },
  ];
}
