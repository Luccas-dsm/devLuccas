import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { SectionTitleComponent } from 'src/app/shared/components/sectionTitle/section-title/section-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, SectionTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
