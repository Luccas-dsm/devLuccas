import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss'
})
export class CardProjectComponent {

   @Input() imageSource:string
   @Input() title:string
   @Input() description:string


   @Output() cardClick: EventEmitter<any> = new EventEmitter();  // Emitir evento de clique

   onCardClick() {
       this.cardClick.emit();  // Emite o evento ao clicar
   }
}
