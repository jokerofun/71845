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
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  docs: any;
  shapes: any;

  @ViewChild('appendHere', {static : false, read : ViewContainerRef}) target!: ViewContainerRef;
  private componentRef!: ComponentRef<any>;

  constructor(private docServ: DocumentService, private route: ActivatedRoute, private resolver: ComponentFactoryResolver) { }

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
    const childComponent: ComponentFactory<CircleComponent> = this.resolver.resolveComponentFactory(CircleComponent);
    this.componentRef = this.target.createComponent(childComponent);
  }
}