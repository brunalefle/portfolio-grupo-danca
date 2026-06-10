import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface AchievementGroup {
  year: string;
  entries: { label: string; detail: string }[];
}

interface StatCard {
  label: string;
  value: string;
}

@Component({
  selector: 'app-achievements',
  imports: [CommonModule],
  templateUrl: './achievements.html',
  styleUrl: './achievements.css',
})
export class Achievements {
  achievements: AchievementGroup[] = [
    {
      year: '2019',
      entries: [
        { label: 'TKC', detail: 'Say My Name — 3º lugar' },
        { label: 'KBuzz', detail: 'Touch — 3º lugar' },
      ],
    },
    {
      year: '2022',
      entries: [
        { label: 'Dreamfest I', detail: 'Love Killa — 1º lugar' },
        { label: 'Dreamfest II', detail: 'Step Back — 1º lugar' },
      ],
    },
    {
      year: '2023',
      entries: [
        { label: 'Dreamfest I', detail: 'Shooting Stars — 1º lugar' },
        { label: 'Union Contest', detail: 'Sticker — 1º lugar' },
        { label: 'Dreamfest II', detail: 'Love Me Right — 2º lugar' },
      ],
    },
    {
      year: '2025',
      entries: [
        { label: 'Dreamfest I', detail: 'Peaches — 1º lugar' },
        { label: 'Animexpo', detail: 'Halazia — 1º lugar' },
        { label: 'Dreamfest II', detail: 'Reveal — 1º lugar' },
      ],
    },
  ];

  stats: StatCard[] = [
    { label: 'Títulos conquistados', value: '5 primeiros lugares oficiais' },
    { label: 'Dreamfest', value: 'Pentacampeão Dreamfest' },
    { label: 'Desde', value: '2017 em atividade' },
    { label: 'Experiência', value: 'Eventos dentro e fora do estado' },
  ];
}
