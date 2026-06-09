import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Event {
  date: string;
  title: string;
  location: string;
  description: string;
  type: 'event' | 'workshop';
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
      date: '15 de Junho',
      title: 'Workshop de Hip Hop',
      location: 'Estúdio Centro',
      description: 'Aprenda as bases do hip hop com nossos instrutores',
      type: 'workshop',
    },
    {
      date: '22 de Junho',
      title: 'Apresentação Festival',
      location: 'Teatro Municipal',
      description: 'Apresentação especial no festival de dança da cidade',
      type: 'event',
    },
    {
      date: '30 de Junho',
      title: 'Workshop de Contemporâneo',
      location: 'Estúdio Centro',
      description: 'Explore novos movimentos da dança contemporânea',
      type: 'workshop',
    },
    {
      date: '10 de Julho',
      title: 'Competição Regional',
      location: 'Arena Esportiva',
      description: 'Competição com grupos de toda a região',
      type: 'event',
    },
  ];
}
