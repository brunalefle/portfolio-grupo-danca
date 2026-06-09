import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';
import { Home } from './features/home/home';
import { About } from './features/about/about';
import { Members } from './features/members/members';
import { Gallery } from './features/gallery/gallery';
import { Events } from './features/events/events';
import { Contact } from './features/contact/contact';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Button,
    Navbar,
    Footer,
    Home,
    About,
    Members,
    Gallery,
    Events,
    Contact,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dance-portfolio');
}
