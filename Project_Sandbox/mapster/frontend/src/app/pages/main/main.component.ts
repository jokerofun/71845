import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DocumentService } from 'src/app/document.service';

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
    const col: Element | null = document.querySelector(which);

    if (col) {
      col.classList.toggle('is-hidden')
    }
  }

  show(which: string): void {
    const col: Element | null = document.querySelector(which);

    if (col) {
      col.classList.toggle('is-hidden')
    }
  }

}
