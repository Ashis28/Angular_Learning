import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { NgIf } from '@angular/common';
import { Auth } from './auth/auth';
import { LearningResources } from './learning-resources/learning-resources';
import { AuthDir } from './auth/auth-dir';

@Component({
  selector: 'app-root',
  imports: [Auth,LearningResources,AuthDir],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('5dir-deep-dive');
  private authService = inject(AuthService);

  isAdmin = computed(() => this.authService.activePermission() === 'admin')
}
