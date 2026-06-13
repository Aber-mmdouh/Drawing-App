import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DarwingApp } from "../drawing-app/darwing-app";

@Component({
  selector: 'app-root',
  imports: [ DarwingApp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('drawingApp');
}
