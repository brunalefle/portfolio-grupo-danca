import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GALLERY_ITEMS, GalleryItem } from './gallery-data';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  allItems: GalleryItem[] = GALLERY_ITEMS;

  categories: string[] = [
    'Animebuzz 2026',
    'Animebuzz 2025',
    'Animebuzz FJRS 2025',
    'Animexpo 2025',
    'Animextreme 2025',
    'Premiação DREAMFEST 2025',
  ];

  activeCategory: string = 'Animebuzz 2026';
  activeSubCategory: string = 'todos';
  visibleCount: number = 12;
  selectedImageIndex: number | null = null;

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (this.selectedImageIndex !== null) {
      if (event.key === 'ArrowRight') {
        this.nextImage();
      } else if (event.key === 'ArrowLeft') {
        this.prevImage();
      } else if (event.key === 'Escape') {
        this.closeLightbox();
      }
    }
  }

  get currentSubCategories(): string[] {
    const subs = new Set<string>();
    this.allItems.forEach((item) => {
      if (item.category === this.activeCategory && item.subCategory) {
        subs.add(item.subCategory);
      }
    });
    return Array.from(subs);
  }

  get filteredItems(): GalleryItem[] {
    return this.allItems.filter((item) => {
      const matchCategory = item.category === this.activeCategory;
      const matchSubCategory =
        this.activeSubCategory === 'todos' ||
        item.subCategory === this.activeSubCategory;
      return matchCategory && matchSubCategory;
    });
  }

  get visibleItems(): GalleryItem[] {
    return this.filteredItems.slice(0, this.visibleCount);
  }

  get selectedImage(): GalleryItem | null {
    if (
      this.selectedImageIndex !== null &&
      this.selectedImageIndex >= 0 &&
      this.selectedImageIndex < this.filteredItems.length
    ) {
      return this.filteredItems[this.selectedImageIndex];
    }
    return null;
  }

  setCategory(cat: string): void {
    this.activeCategory = cat;
    this.activeSubCategory = 'todos';
    this.visibleCount = 12;
    this.closeLightbox();
  }

  setSubCategory(subCat: string): void {
    this.activeSubCategory = subCat;
    this.visibleCount = 12;
    this.closeLightbox();
  }

  loadMore(): void {
    this.visibleCount += 12;
  }

  openLightbox(index: number): void {
    this.selectedImageIndex = index;
  }

  closeLightbox(): void {
    this.selectedImageIndex = null;
  }

  nextImage(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex =
        (this.selectedImageIndex + 1) % this.filteredItems.length;
    }
  }

  prevImage(event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    if (this.selectedImageIndex !== null) {
      this.selectedImageIndex =
        (this.selectedImageIndex - 1 + this.filteredItems.length) %
        this.filteredItems.length;
    }
  }
}

