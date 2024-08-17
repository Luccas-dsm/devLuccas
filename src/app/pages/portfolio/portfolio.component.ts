import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CardModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
