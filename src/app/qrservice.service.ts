import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CredentialsInterface } from './interfaces/credentials.interface';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {

  constructor(private http: HttpClient) { }

  getQrCode(data:CredentialsInterface): Observable<any> {
    return this.http.get<any>('http://localhost:8000/qr_code', {
      headers: {
        accept: 'application/json',
        username: data.username
      }
    });
  }
}
