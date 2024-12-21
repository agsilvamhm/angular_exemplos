import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ParentComponent } from '../pai_filho/parent/parent.component';

@Component({
  selector: 'app-matrix-menu-three',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './matrix-menu-three.component.html',
  styleUrl: './matrix-menu-three.component.css'
})
export class MatrixMenuThreeComponent implements OnInit {
  @ViewChild('matrixCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private context!: CanvasRenderingContext2D;
  private characters: string[] = '01'.split('');
  private fontSize: number = 16;
  private columns!: number[];
  private drops!: number[];

  ngOnInit(): void {
    this.initializeCanvas();
    this.startAnimation();
  }

  private initializeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.context = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Configuração das colunas e gotas
    this.columns = Array.from({ length: canvas.width / this.fontSize }, () => 0);
    this.drops = new Array(this.columns.length).fill(0);
  }

  private startAnimation(): void {
    const draw = () => {
      const canvas = this.canvasRef.nativeElement;

      // Efeito de fade
      this.context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      this.context.fillRect(0, 0, canvas.width, canvas.height);

      // Estilização do texto
      this.context.fillStyle = '#0F0';
      this.context.font = `${this.fontSize}px monospace`;

      // Desenhar os caracteres
      for (let i = 0; i < this.drops.length; i++) {
        const text = this.characters[Math.floor(Math.random() * this.characters.length)];
        const x = i * this.fontSize;
        const y = this.drops[i] * this.fontSize;

        this.context.fillText(text, x, y);

        // Reiniciar a gota ao atingir o fim
        if (y > canvas.height && Math.random() > 0.98) {
          this.drops[i] = 0;
        }

        // Incrementar a posição da gota
        this.drops[i]++;
      }

      // Reexecutar o frame
      requestAnimationFrame(draw);
    };

    draw();
  }
}
