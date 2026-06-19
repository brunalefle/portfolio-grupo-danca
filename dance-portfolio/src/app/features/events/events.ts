import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface PortfolioProject {
  title: string;
  category: 'special-cover' | 'on-the-street' | 'live-performance' | 'backstage';
  tag: string;
  description: string;
  bgGradient: string;
  youtubeId: string;
  reelsId?: string;
}

@Component({
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  private sanitizer = inject(DomSanitizer);

  activeFilter: string = 'todos';
  selectedVideoUrl: SafeResourceUrl | null = null;
  selectedVideoType: 'youtube' | 'instagram' | null = null;

  categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'special-cover', label: 'Special Covers' },
    { id: 'on-the-street', label: 'K-pop On The Street' },
    { id: 'live-performance', label: 'Live Performances' },
    { id: 'backstage', label: 'Bastidores & Reels' }
  ];

  projects: PortfolioProject[] = [
    {
      title: 'BADVILLAIN - "숨 (ZOOM)"',
      category: 'special-cover',
      tag: 'PRODUÇÃO CINEMATOGRÁFICA',
      description: 'Produção em estúdio profissional com qualidade cinematográfica de videoclipe, figurinos idênticos aos dos "idols" e conceito de roteiro planejado. O formato ideal para inserção orgânica de marcas parceiras (Product Placement).',
      bgGradient: 'from-cyan-950/40 via-slate-900/30 to-slate-950',
      youtubeId: '0oimhVhKuE4'
    },
    {
      title: 'BTS - "2.0"',
      category: 'on-the-street',
      tag: 'AÇÃO DE RUA / ENGAJAMENTO',
      description: 'Performance de rua gravada com grande elenco e coreografia marcante, atraindo uma multidão de espectadores em espaços públicos e gerando alta visibilidade e engajamento orgânico imediato.',
      bgGradient: 'from-blue-950/40 via-slate-900/30 to-slate-950',
      youtubeId: '3lu_s6I7Jyk'
    },
    {
      title: 'BADVILLAIN - "숨 (ZOOM)"',
      category: 'on-the-street',
      tag: 'AÇÃO DE RUA / ENGAJAMENTO',
      description: 'Performance enérgica gravada em vias movimentadas de Porto Alegre. Demonstra a capacidade ímpar do grupo de capturar a atenção rápida do público de rua e reter a atenção de multidões em tempo real.',
      bgGradient: 'from-cyan-950/30 via-slate-900/40 to-slate-950',
      youtubeId: 'QYehNPsVTzc'
    },
    {
      title: 'THE BOYZ - "REVEAL"',
      category: 'live-performance',
      tag: '1º LUGAR DREAMFEST',
      description: 'Apresentação consagrada com o 1º lugar no Dreamfest. Demonstra a nossa capacidade de dominar palcos de grande porte e criar conexões emocionais profundas com o público em festivais de alta escala.',
      bgGradient: 'from-cyan-900/30 via-slate-900/40 to-slate-950',
      youtubeId: 'GW6qoS8-95k'
    },
    {
      title: 'ATEEZ - "HALAZIA"',
      category: 'live-performance',
      tag: '1º LUGAR ANIMEXPO',
      description: 'Performance de altíssimo impacto vencedora do 1º lugar no Animexpo. Destaque para a intensidade artística e a capacidade única do grupo de engajar multidões em eventos de grande porte.',
      bgGradient: 'from-blue-900/30 via-slate-900/40 to-slate-950',
      youtubeId: 'zA-2N33Ku3c'
    },
    {
      title: 'Alô Kpoppers de Porto Alegre e Região! 🧉✨',
      category: 'backstage',
      tag: 'SHORT FORM / REELS',
      description: 'O NEXA vai invadir a CONNECT DANCE com um domingo cheio de dança, energia e muito K-pop! Inscrições e horários de aula no link da bio. 💥',
      bgGradient: 'from-blue-950/50 via-slate-900/30 to-slate-950',
      youtubeId: '',
      reelsId: 'DYfNBukxbwE'
    },
    {
      title: 'K-pop Cover in Public Be Like... 🎬',
      category: 'backstage',
      tag: 'SHORT FORM / REELS',
      description: 'kpop cover in public be like... Um pouquinho de como é gravar um dance cover de K-pop nas ruas de Porto Alegre. 🎬',
      bgGradient: 'from-cyan-950/40 via-slate-900/30 to-slate-950',
      youtubeId: '',
      reelsId: 'DYdGlMQJxLD'
    },
    {
      title: 'Especial Pijama Party no Next.TheClub! 🪩',
      category: 'backstage',
      tag: 'SHORT FORM / REELS',
      description: 'A Next Pijama Party especial com a Hyelin (EXID) e o Jason já está chegando! Nos vemos sexta dia 24 aqui em Porto Alegre. Ingressos com surpresa no pv. 😎',
      bgGradient: 'from-blue-900/30 via-slate-900/40 to-slate-950',
      youtubeId: '',
      reelsId: 'DXanYJCjIVF'
    },
    {
      title: '🚨 DEU POSITIVO! 🚨',
      category: 'backstage',
      tag: 'SHORT FORM / REELS',
      description: 'Positivo que estaremos de PIJAMA na maior festa de K-pop da América Latina! Com a presença de convidados direto da Coreia, como a Hyelin (EXID) e DJ Jason. 🤩💤',
      bgGradient: 'from-cyan-900/30 via-slate-900/40 to-slate-950',
      youtubeId: '',
      reelsId: 'DXM5-7IkZXR'
    },
    {
      title: 'Nos Vemos no Anime Buzz! ✨',
      category: 'backstage',
      tag: 'SHORT FORM / REELS',
      description: 'Nos vemos amanhã no Anime Buzz no primeiro e segundo bloco a partir das 13h! Marquem na agenda pra não perder nada. ✨',
      bgGradient: 'from-blue-950/50 via-slate-900/30 to-slate-950',
      youtubeId: '',
      reelsId: 'DXA0iSjjLsg'
    },
    {
      title: 'Vem Dançar com a Gente! 💃',
      category: 'backstage',
      tag: 'SHORT FORM / REELS',
      description: 'Vem dançar com a gente dia 14/12! O formulário de inscrição para o nosso workshop especial já está disponível no link da nossa bio!! 💃',
      bgGradient: 'from-cyan-950/40 via-slate-900/30 to-slate-950',
      youtubeId: '',
      reelsId: 'DSBPm1rEop2'
    }
  ];

  setFilter(category: string): void {
    this.activeFilter = category;
  }

  get filteredProjects(): PortfolioProject[] {
    if (this.activeFilter === 'todos') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.activeFilter);
  }

  openVideo(youtubeId: string): void {
    this.selectedVideoType = 'youtube';
    this.selectedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${youtubeId}?autoplay=1`
    );
  }

  openReels(reelsId: string): void {
    this.selectedVideoType = 'instagram';
    this.selectedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.instagram.com/reel/${reelsId}/embed/`
    );
  }

  closeVideo(): void {
    this.selectedVideoUrl = null;
    this.selectedVideoType = null;
  }

  openExternal(url: string): void {
    window.open(url, '_blank');
  }
}
