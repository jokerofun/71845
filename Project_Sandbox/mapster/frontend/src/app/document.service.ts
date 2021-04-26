import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private webReqServ: WebRequestService) { }

  createDocument(title: string) {
    // Send a web request to create a new document
    return this.webReqServ.post('docs', { title });
  }
}
