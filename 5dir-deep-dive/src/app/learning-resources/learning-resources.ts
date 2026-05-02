import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SafeLinkDirective } from '../safe-link.directive';

@Component({
  selector: 'app-learning-resources',
  imports: [SafeLinkDirective],
  templateUrl: './learning-resources.html',
  styleUrl: './learning-resources.css',

})
export class LearningResources {
  email = signal('');
  password = signal('');
  private authService = inject(AuthService);

  onSubmit() {
    this.authService.authenticate(this.email(), this.password());
  }
}
