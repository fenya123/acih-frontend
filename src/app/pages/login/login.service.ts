import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private readonly http: HttpClient) {}

  login(email: string, pass: string) {
    return this.http.post(environment.apiUrl + '/sessions', {
      email,
      pass,
    });
  }
}
