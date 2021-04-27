import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/document.service';

@Component({
  selector: 'app-new-document',
  templateUrl: './new-document.component.html',
  styleUrls: ['./new-document.component.scss']
})
export class NewDocumentComponent implements OnInit {

  constructor(private docServ: DocumentService) { }

  ngOnInit(): void {
  }

  createDocument(title: string) {
    this.docServ.createDocument(title).subscribe((response: any) => {
      console.log(response);

      // Navigate to /main/docs/response._id
    })
  }

}
