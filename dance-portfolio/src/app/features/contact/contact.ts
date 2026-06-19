import { Component, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private cdr = inject(ChangeDetectorRef);

  form = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  submitStatus: 'idle' | 'sending' | 'success' | 'error' | 'validation-error' = 'idle';
  validationMessage: string = '';

  onSubmit(): void {
    if (this.submitStatus === 'sending') return;

    // Reset validations
    this.submitStatus = 'idle';
    this.validationMessage = '';

    const name = this.form.name.trim();
    const email = this.form.email.trim();
    const subject = this.form.subject.trim();
    const message = this.form.message.trim();

    // Validação de campos vazios
    if (!name || !email || !subject || !message) {
      this.submitStatus = 'validation-error';
      this.validationMessage = 'Todos os campos do formulário são obrigatórios e precisam ser preenchidos.';
      this.cdr.detectChanges();
      return;
    }

    // Validação de padrão de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.submitStatus = 'validation-error';
      this.validationMessage = 'Por favor, digite um formato de e-mail válido (exemplo: nome@dominio.com).';
      this.cdr.detectChanges();
      return;
    }

    this.submitStatus = 'sending';
    this.cdr.detectChanges();

    // Fallback de segurança: se a requisição travar, libera o botão após 8 segundos
    const safetyTimeout = setTimeout(() => {
      if (this.submitStatus === 'sending') {
        console.warn('O envio do formulário excedeu o tempo limite. Forçando reset.');
        this.submitStatus = 'error';
        this.cdr.detectChanges();
        setTimeout(() => {
          if (this.submitStatus === 'error') {
            this.submitStatus = 'idle';
            this.cdr.detectChanges();
          }
        }, 5000);
      }
    }, 8000);

    // Enviar via FormData para evitar requisições preflight OPTIONS de CORS
    const formData = new FormData();
    formData.append('Nome', name);
    formData.append('Email', email);
    formData.append('Assunto', subject);
    formData.append('Mensagem', message);
    formData.append('_subject', `Novo Contato do Site: ${subject}`);

    fetch('https://formsubmit.co/ajax/nexadanceteam@gmail.com', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
      .then((response) => {
        clearTimeout(safetyTimeout);
        if (response.ok) {
          this.submitStatus = 'success';
          this.form = { name: '', email: '', subject: '', message: '' };
        } else {
          this.submitStatus = 'error';
        }
        this.cdr.detectChanges();
        setTimeout(() => {
          if (this.submitStatus === 'success') {
            this.submitStatus = 'idle';
            this.cdr.detectChanges();
          }
        }, 6000);
      })
      .catch((error) => {
        clearTimeout(safetyTimeout);
        console.error('Erro no envio do formulário:', error);
        if (this.submitStatus === 'sending') {
          this.submitStatus = 'error';
          this.cdr.detectChanges();
          setTimeout(() => {
            if (this.submitStatus === 'error') {
              this.submitStatus = 'idle';
              this.cdr.detectChanges();
            }
          }, 6000);
        }
      });
  }
}

