import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private webReqServ: WebRequestService) { }

  createDocument(title: string): Observable<object> {
    // Send a web request to create a new document
    return this.webReqServ.post('docs', { title });
  }

  getDocs(): Observable<object> {
    return this.webReqServ.get('docs');
  }

  getShapes(docId: string): Observable<object> {
    return this.webReqServ.get(`docs/${docId}/shapes`);
  }

}
