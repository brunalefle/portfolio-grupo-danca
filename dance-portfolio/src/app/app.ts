import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Gallery } from './features/gallery/gallery';
import { Events } from './features/events/events';
import { Achievements } from './features/achievements/achievements';
import { Partnerships } from './features/partnerships/partnerships';
import { Contact } from './features/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Navbar,
    Footer,
    Home,
    About,
    Gallery,
    Events,
    Achievements,
    Partnerships,
    Contact,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dance-portfolio');
}
