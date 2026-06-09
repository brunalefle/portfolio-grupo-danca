import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  image: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  selectedImage: string | null = null;

  items: GalleryItem[] = [
    { image: 'assets/images/cover1.jpg', title: 'Cover Evento', category: 'covers' },
    { image: 'assets/images/comp1.jpg', title: 'Competição 2024', category: 'competicoes' },
    { image: 'assets/images/show1.jpg', title: 'Apresentação Solo', category: 'apresentacoes' },
    { image: 'assets/images/cover2.jpg', title: 'Cover Festa', category: 'covers' },
    { image: 'assets/images/comp2.jpg', title: 'Competição 2023', category: 'competicoes' },
    { image: 'assets/images/show2.jpg', title: 'Apresentação Grupo', category: 'apresentacoes' },
    { image: 'assets/images/cover3.jpg', title: 'Cover Casamento', category: 'covers' },
    { image: 'assets/images/comp3.jpg', title: 'Campeonato', category: 'competicoes' },
  ];

  openImage(image: string): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
