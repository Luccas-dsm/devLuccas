import { inject, Inject, Injectable } from '@angular/core';
import { ArticleDto, ItensDto } from '../Model/article.dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
