import { SectionTitleComponent } from 'src/app/shared/components/sectionTitle/section-title/section-title.component';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';import { CardProjectComponent } from 'src/app/shared/components/card-project/card-project.component';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CardModule, CardProjectComponent, SectionTitleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
