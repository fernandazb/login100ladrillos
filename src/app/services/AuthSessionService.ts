import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; // Necesario para manejar errores
import { catchError, tap } from 'rxjs/operators'; // catchError para interceptar el error
import { LoginUp} from '../interfaces/LoginUp';
import { LoginResponse } from '../interfaces/LoginResponse';
import { PhoneNumber } from '../interfaces/PhoneNumber';
import { PhoneNumberResponse } from '../interfaces/PhoneNumberResponse';
import { ProfileName } from '../interfaces/ProfileName';
import { ClientInformation } from '../interfaces/ClientInformation';
import { ApiError } from '../interfaces/ApiError';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = 'https://frontend-recruiting.100ladrillos.com/api';
  private authToken: string | null = null; 

  constructor(private http: HttpClient) {}


  setAuthToken(token: string): void {
    this.authToken = token;
  }

  private getAuthHeaders(): HttpHeaders {
    if (!this.authToken) {
      console.error('Authentication token is missing.');
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    
    if (this.authToken) {
       headers = headers.set('Authorization', `Bearer ${this.authToken}`);
    }

    return headers;
  }
  
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('API Error details:', error);
    
    const apiError: ApiError = {
      errorCode: error.error?.status || 'UNEXPECTED_ERROR', 
      message: error.error?.code || `Error del servidor (${error.status}).`,
      statusCode: error.status || 500
    };

    return throwError(() => apiError); 
  }

  signUp(payload: LoginUp): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/signUp`, payload).pipe(
      tap(response => this.setAuthToken(response.token)), 
      catchError(this.handleError)
    );
  }

  setPhoneNumber(payload: PhoneNumber): Observable<any> {

    console.log(this.authToken)
    return this.http.post(`${this.apiUrl}/phoneNumber`, payload, {
      headers: this.getAuthHeaders(),
    }).pipe(
      catchError(this.handleError)
    );
  }

  verifyPhoneNumber(payload: PhoneNumberResponse): Observable<any> {
    return this.http.post(`${this.apiUrl}/phoneNumber/verify`, payload, {
      headers: this.getAuthHeaders(),
    }).pipe(
      catchError(this.handleError)
    );
  }

  setProfileName(payload: ProfileName): Observable<any> {
    return this.http.post(`${this.apiUrl}/profile/name`, payload, {
      headers: this.getAuthHeaders(),
    }).pipe(
      catchError(this.handleError)
    );
  }

  getProfile(): Observable<ClientInformation> {
    return this.http.get<ClientInformation>(`${this.apiUrl}/profile`, {
      headers: this.getAuthHeaders(),
    }).pipe(
      catchError(this.handleError)
    );
  }
}