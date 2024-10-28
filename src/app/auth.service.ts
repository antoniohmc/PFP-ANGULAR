import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/login'; // Altere para o endereço do backend se necessário

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
    let params = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.post(this.apiUrl, params, { responseType: 'text' });
  }
}
