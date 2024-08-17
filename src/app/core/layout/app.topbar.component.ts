import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
    standalone: true,
    imports: [RouterLink, NgClass],
})
export class AppTopBarComponent {
    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;
    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;
    @ViewChild('topbarmenu') menu!: ElementRef;

    private isDarkTheme: boolean = false;
    public light_mode: string = 'light_mode';
    constructor(
        public layoutService: LayoutService,
        private renderer: Renderer2  // Declarando como 'private' para usar no método toggleTheme
    ) {}

    toggleTheme(): void {

        this.isDarkTheme = !this.isDarkTheme;
        if (this.isDarkTheme) {
            document.body.setAttribute(
                'data-theme', 'dark')
                this.light_mode = 'dark_mode';
        } else {
            //this.renderer.removeAttribute(document.body, 'data-theme' , 'light');
            document.body.setAttribute(
                'data-theme', 'light')
                this.light_mode = 'light_mode';

        }
    }
}
