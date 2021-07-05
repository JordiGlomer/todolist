import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  getTotalItems$: any;

  constructor(private http: HttpClient) { }


  get item(): any[] {
    return this.item;
 }
}


