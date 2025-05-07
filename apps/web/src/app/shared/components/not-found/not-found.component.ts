import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div class="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a routerLink="/">Go to Home</a>
    </div>
  `,
  styles: [`
    .not-found-container {
      text-align: center;
      margin-top: 50px;
    }
    .not-found-container h1 {
      font-size: 3rem;
      margin-bottom: 20px;
    }
    .not-found-container p {
      font-size: 1.5rem;
      margin-bottom: 20px;
    }
    .not-found-container a {
      font-size: 1.2rem;
      color: #007bff;
      text-decoration: none;
    }
    .not-found-container a:hover {
      text-decoration: underline;
    }
  `]
})
export class NotFoundComponent {}
