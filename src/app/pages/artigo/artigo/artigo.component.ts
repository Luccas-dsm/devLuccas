import { ArtigoModel } from 'src/app/shared/Models/artigoModel';
import { ArtigoService } from './../../../core/services/artigo/artigo.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { BannerSecondaryComponent } from 'src/app/shared/components/banner-secondary/banner-secondary.component';

@Component({
    selector: 'app-artigo',
    standalone: true,
    imports: [BannerComponent, BannerSecondaryComponent],
    templateUrl: './artigo.component.html',
    styleUrl: './artigo.component.scss',
})
export class ArtigoComponent {
    artigoId: number;

    artigo: any;


    constructor(private route: ActivatedRoute, private ArtigoService: ArtigoService) { }

    ngOnInit(): void {
      // Acessa o ID da rota
      this.route.params.subscribe(params => {
        this.artigoId = +params['id'];

      });

      this.buscarArtigo();
    }

    buscarArtigo() {
        this.ArtigoService.buscarArtigo(this.artigoId).then((response: any) => {

            this.artigo = response.result;
            console.log(this.artigo);
        });
    }
}
