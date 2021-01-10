import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AddressBookData } from '@angular/cli/bin/AddressBook/src/app/models/addressBookData';


@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  private getUrl: string = "http://localhost:8080/addressbookrestcontroller/";

  constructor(private httpClient: HttpClient) { }

  getAllAddressBook(): Observable<any> {
    return this.httpClient.get<any>(`${this.getUrl}/get`);
  }
  
  getAddressBookById(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.getUrl}/get/${id}`);
  }

  deleteAddressBookRecord(id: number): Observable<any> {
    return this.httpClient.delete(`${this.getUrl}/delete/${id}`);
  }

  addAddressookRecord(book: AddressBookData): Observable<AddressBookData> {
    return this.httpClient.post<AddressBookData>(`${this.getUrl}/create`, book);
  }

  updateAddressBookRecord(book: AddressBookData,id: number) {
    return this.httpClient.put<AddressBookData>(`${this.getUrl}/update/${id}`, book);
  }
}