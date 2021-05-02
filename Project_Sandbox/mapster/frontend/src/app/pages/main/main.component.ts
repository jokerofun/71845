import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DocumentService } from 'src/app/document.service';
import { CircleComponent } from 'src/app/shapes/circle/circle.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  docs: any;
  shapes: any;

  constructor(private docServ: DocumentService, private route: ActivatedRoute) { }

  ngOnInit(): void {

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
    const col: HTMLElement | null = document.querySelector(which);

    if (col) {
      col.classList.toggle('is-hidden');
    }
  }

  generateCircle(): void {
    const col: HTMLElement | null = document.querySelector('#middleColumn');

    /*
    <svg cdkDragBoundary="#middleColumn" cdkDrag>
                <ellipse cx="200" cy="80" rx="100" ry="50" style="fill:white;stroke:purple;stroke-width:2" />
            </svg>
    */
    if (col) {
      // col.appendChild(document.createElement('app-circle'));
      // col.innerHTML = '<app-circle></app-circle>';
      col.classList.add("app-circle")
    }

  }
}
