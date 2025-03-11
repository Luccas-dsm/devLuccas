import { inject, Inject, Injectable } from '@angular/core';
import { ArticleDto, ItensDto } from '../Model/article.dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { MediumArtigoDto } from 'src/app/shared/Models/medium.model';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class MediumService {
    httpClient = inject(HttpClient);

    FindPosts(): Observable<ArticleDto> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        var artigo = this.httpClient.get<ArticleDto>(
            'http://localhost:3001/',
            httpOptions
        );
        return artigo;
    }

    buscarPost(): Promise<MediumArtigoDto> {
        return lastValueFrom(
            this.httpClient.get<MediumArtigoDto>(
                `${environment.apiMedium}post/findPosts`
            )
        );
    }
}
