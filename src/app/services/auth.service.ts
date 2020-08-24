import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenResult} from '../interfaces/tokenresult';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private httpClient: HttpClient) {
  }

  public register(email: string, password: string): Observable<TokenResult> {
    return this.httpClient.post<TokenResult>(environment.backend_url + 'register', {
      email,
      password,
    });
  }

  public login(email: string, password: string): Observable<TokenResult> {
    return this.httpClient.post<TokenResult>(environment.backend_url + 'login', {
      email,
      password,
    });
  }
}
