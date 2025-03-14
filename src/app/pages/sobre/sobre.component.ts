import { Component, OnInit } from '@angular/core';
import { BannerSecondaryComponent } from 'src/app/shared/components/banner-secondary/banner-secondary.component';
import { BannerComponent } from 'src/app/shared/components/banner/banner.component';
import { AccordionModule } from 'primeng/accordion';

@Component({
    imports: [BannerComponent, BannerSecondaryComponent,AccordionModule],
    selector: 'app-sobre',
    standalone: true,
    templateUrl: './sobre.component.html',
    styleUrls: ['./sobre.component.scss'],
})
export class SobreComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
