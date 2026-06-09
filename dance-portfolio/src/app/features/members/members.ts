import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Member {
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-members',
  imports: [CommonModule],
  templateUrl: './members.html',
  styleUrl: './members.css',
})
export class Members {
  members: Member[] = [
    { name: 'Ana Silva', role: 'Coreógrafa', image: 'assets/images/member1.jpg' },
    { name: 'Bruno Costa', role: 'Dançarino', image: 'assets/images/member2.jpg' },
    { name: 'Carla Santos', role: 'Dançarina', image: 'assets/images/member3.jpg' },
    { name: 'Diego Oliveira', role: 'Dançarino', image: 'assets/images/member4.jpg' },
    { name: 'Elegância Ferreira', role: 'Dançarina', image: 'assets/images/member5.jpg' },
    { name: 'Felipe Martins', role: 'Dançarino', image: 'assets/images/member6.jpg' },
  ];
}
