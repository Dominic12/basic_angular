import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SingleResponse} from '../interfaces/single-response';
import {environment} from '../../environments/environment';
import {ListResponse} from '../interfaces/list-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public getUserById(id: number): Observable<SingleResponse>{
    return this.httpClient.get<SingleResponse>(environment.backend_url + 'users/' + id);
  }

  public getUsers(): Observable<ListResponse>{
    return this.httpClient.get<ListResponse>(environment.backend_url + 'users');
  }

  public getUsersWithPagination(pageNumber: number): Observable<ListResponse>{
    return this.httpClient.get<ListResponse>(environment.backend_url + 'users?page=' + pageNumber);
  }
}


