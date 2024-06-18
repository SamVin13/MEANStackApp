import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) {}

  getAllTransactionData(startDate: String, endDate: String) : Observable<any>{
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify({"startDate": startDate, "endDate": endDate});
    return this.http.post("http://localhost:3000/transactions", body, {'headers':headers});
  }

  updateComment(id: String, newComment: String): Observable<any>{
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify({"id": id, "newComment": newComment});
    return this.http.post("http://localhost:3000/transactions/updateComments", body, {'headers':headers});
  }
}
