import { ViewContainerRef } from '@angular/core';
import { ComponentRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ComponentFactory } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DocumentService } from 'src/app/document.service';
import { CircleComponent } from 'src/app/shapes/circle/circle.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  docs: any;
  shapes: any;

  shapes2: HTMLElement[] = [];

  @ViewChild('appendHere', { static: false, read: ViewContainerRef })
  target!: ViewContainerRef;
  private componentRef!: ComponentRef<any>;

  constructor(
    private docServ: DocumentService,
    private route: ActivatedRoute,
    private resolver: ComponentFactoryResolver
  ) {}

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
    // what i've done is I created a new array Shapes2 of type HTMLElement, since that's what you are creating with the next line.
    // then in the html file i have looped over Shapes2 using ngFor
    //
    // Ideally what I think would be best is make the whole canvas/grid/middleColumn thingy a separate component and then in that component..
    // again have an array e.g. containing objects of type Shape(which can then have x, y, name, etc.), loop through them and create figures(HTMLElement) accordingly.
    // P.S. I might be mistaken of course, but that's how I would do it in React e.g.
    // reference I used for this: https://stackoverflow.com/questions/59302528/angular-how-to-dynamically-add-a-list-of-components
    this.shapes2.push(document.createElement('app-circle'));
    console.log(this.shapes2);

    const childComponent: ComponentFactory<CircleComponent> = this.resolver.resolveComponentFactory(
      CircleComponent
    );
    this.componentRef = this.target.createComponent(childComponent);
  }
}
