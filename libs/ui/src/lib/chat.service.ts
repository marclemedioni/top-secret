import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Chat } from '@prisma/client'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private API_URL = 'http://localhost:3333/api'

  constructor(private readonly http: HttpClient) {}

  public getProducts(): Observable<Chat[]> {
    {
      return this.http.get<Chat[]>(`${this.API_URL}/chats`)
    }
  }
}
