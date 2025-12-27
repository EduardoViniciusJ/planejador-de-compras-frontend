import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  private authService = inject(AuthService);

  // login with google
  async loginWithGoogle(): Promise<void> {
      
    await this.authService.signInWithGoogle();

  }
}


