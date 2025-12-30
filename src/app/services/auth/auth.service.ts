import { Injectable, signal } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = signal<boolean>(false);

  constructor(private clientService: SupabaseService) {
    const supabase = this.clientService.getClient();

    // Initial session Check
    supabase.auth.getSession().then((response) => {
      const session = response.data.session;
      this.isAuthenticated.set(session !== null);
    });

    // Observe changes in authentication state
    supabase.auth.onAuthStateChange((_event, session) => {
      this.isAuthenticated.set(session !== null);
    });
  }

  async signInWithGoogle() {
    const supabase = this.clientService.getClient();
    const redirectTo = environment.supabase.redirectToHome;

    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectTo,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        }
      }
    });
  }

  async signOut() {
    const supabase = this.clientService.getClient();
    await supabase.auth.signOut();
  }

async getAccessToken(): Promise<string | null> {
  const { data, error} = await this.clientService
    .getClient()
    .auth.getSession();
  if(error || !data.session){
    return null;
  }
  return data.session.access_token;
}


}
