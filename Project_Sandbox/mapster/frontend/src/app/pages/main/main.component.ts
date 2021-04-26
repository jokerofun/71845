import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/document.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private docServ: DocumentService) { }

  ngOnInit(): void {
  }

  createNewDocument() {
    this.docServ.createDocument('Testing').subscribe((response: any) => {
      console.log(response);
    })
  }

}
