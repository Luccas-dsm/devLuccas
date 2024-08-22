import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-secondary',
  standalone: true,
  imports: [],
  templateUrl: './banner-secondary.component.html',
  styleUrl: './banner-secondary.component.scss'
})

export class BannerSecondaryComponent {

    @Input() title: string;
    @Input() sub_title: string;

}
