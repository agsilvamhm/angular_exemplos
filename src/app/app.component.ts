import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatrixMenuThreeComponent } from './exemplo/matrix-menu-three/matrix-menu-three.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatrixMenuThreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_exemplos';
}
