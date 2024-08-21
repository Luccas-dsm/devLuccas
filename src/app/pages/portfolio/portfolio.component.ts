import { ArtigoService } from './../../core/services/artigo/artigo.service';
import { SectionTitleComponent } from 'src/app/shared/components/sectionTitle/section-title/section-title.component';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CardProjectComponent } from 'src/app/shared/components/card-project/card-project.component';
import { BannerComponent } from '../../shared/components/banner/banner/banner.component';
import { ArtigoModel } from 'src/app/shared/Models/artigoModel';
import { NgFor } from '@angular/common';
@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [
        CardModule,
        CardProjectComponent,
        SectionTitleComponent,
        BannerComponent,
        NgFor,
    ],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
    constructor(private ArtigoService: ArtigoService) {}

    artigos: ArtigoModel[];

    ngOnInit(): void {
        this.buscarArtigos();
    }

    buscarArtigos() {
        this.ArtigoService.buscarArtigos().then((response: any) => {
            this.artigos = response.result;
        });
    }
}
