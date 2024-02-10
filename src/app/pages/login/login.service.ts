import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public constructor(private readonly http: HttpClient) {}

  login(email: string, pass: string): Observable<string> {
    return this.http.post<string>(`${environment.apiUrl}/sessions`, { email, pass });
  }
}
