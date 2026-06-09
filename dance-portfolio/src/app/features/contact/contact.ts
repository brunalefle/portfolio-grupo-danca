import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  form = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  onSubmit(): void {
    console.log('Formulário enviado:', this.form);
    // Aqui você implementaria a lógica de envio
    alert('Mensagem enviada com sucesso!');
    this.form = { name: '', email: '', subject: '', message: '' };
  }
}
