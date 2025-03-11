import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-card-project',
    standalone: true,
    imports: [],
    templateUrl: './card-project.component.html',
    styleUrl: './card-project.component.scss',
})
export class CardProjectComponent {
    @Input() imageSource: string;
    @Input() title: string;
    @Input() description: string;
    @Input() href: string;

    redirectToLink() {
        if (this.href) {
            window.open(this.href, '_blank'); // Abre em nova aba
        } else {
            console.warn('URL de redirecionamento não foi fornecida.');
        }
    }
}
