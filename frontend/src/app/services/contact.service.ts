import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private apiUrl = 'http://localhost:5000/api/contact';

  constructor(private http: HttpClient) {}

  submitContact(form: ContactForm): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.apiUrl, form);
  }
}
