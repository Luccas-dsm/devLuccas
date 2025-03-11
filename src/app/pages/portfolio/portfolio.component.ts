import { ArtigoService } from './../../core/services/artigo/artigo.service';
import { SectionTitleComponent } from 'src/app/shared/components/sectionTitle/section-title/section-title.component';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CardProjectComponent } from 'src/app/shared/components/card-project/card-project.component';
import { ArtigoModel } from 'src/app/shared/Models/artigoModel';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { BannerSecondaryComponent } from 'src/app/shared/components/banner-secondary/banner-secondary.component';
import { MediumArtigoDto } from 'src/app/shared/Models/medium.model';
@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [
        CardModule,
        CardProjectComponent,
        SectionTitleComponent,
        BannerComponent,
        NgFor,
        RouterLink,
        BannerSecondaryComponent,
    ],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
    constructor(private artigoService: ArtigoService) {}

    artigos: ArtigoModel[] = [];

    ngOnInit(): void {
        this.buscarArtigos();
    }

     buscarArtigos() {
        // this.artigoService.buscarArtigos().then((response: any) => {
        //     this.artigos = response.result;
        // });

        this.artigoService.buscarPost().then((response: MediumArtigoDto) => {
            response.items.forEach((item) => {
                var artigo: ArtigoModel = {
                    id: 0,
                    capa: item.capa,
                    titulo: item.title,
                    descricao: '',
                    conteudo: item.content,
                    categoria: 0,
                    subCategoria: 0,
                    link:item.link
                };
                console.log(artigo);
                this.artigos.push(artigo);
            });
        });
    }

    gotoMedium(link:string){
        console.log(link);
        window.location.href= link;
    }
}
