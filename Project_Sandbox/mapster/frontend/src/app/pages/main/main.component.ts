import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DocumentService } from 'src/app/document.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;

  docs: any;
  shapes: any;

  constructor(private docServ: DocumentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.canvas.nativeElement.width = this.canvas.nativeElement.parentElement!.clientWidth;
    this.canvas.nativeElement.height = this.canvas.nativeElement.parentElement!.clientHeight;
    this.ctx = this.canvas.nativeElement.getContext('2d')!;

    this.route.params.subscribe((params: Params) => {
      console.log(params);
      this.docServ.getShapes(params.docId).subscribe((shapes: any) => {
        this.shapes = shapes;
      });
    });

    this.docServ.getDocs().subscribe((docs: any) => {
      this.docs = docs;
    });
  }

  hide(which: string): void {
    const col: Element | null = document.querySelector(which);

    if (col) {
      col.classList.toggle('is-hidden');
    }
  }

  drawCircle(): void {
    this.ctx.fillStyle = 'white';
    this.ctx.arc(100, 100, 50, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.moveTo(200 + 50, 200);
    this.ctx.arc(200, 200, 50, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();
  }
}
