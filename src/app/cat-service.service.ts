import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService {
  
  url = 'https://api.thecatapi.com/v1/images/search?limit=10'

  private apiKey = 'live_lNGfEQYByp3JnIXuZ45a76COHhnJqbK7srOxeOsiK4DaEyuK2L64PehMzzrhRVi6';

  constructor(private http: HttpClient) { }

  public getCats() {
    return this.http.get(`${this.url}&breed_ids=beng&api_key=${this.apiKey}`);
  }
}
