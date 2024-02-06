import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  constructor(private readonly http: HttpClient) {}

  login(email: string, pass: string) {}
}
