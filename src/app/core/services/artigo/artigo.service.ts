import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment';
import { ArtigoModel } from 'src/app/shared/Models/artigoModel';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {

  constructor(private http: HttpClient) { }

  buscarArtigos(): Promise<ArtigoModel> {

      return lastValueFrom(this.http.get<ArtigoModel>(`${environment.apiArtigo}Artigo/listarArtigos`));
  }
}
