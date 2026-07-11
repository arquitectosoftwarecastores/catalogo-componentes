import { Component, ElementRef } from '@angular/core';
import { AppMenu } from './app.menu';
import { ScrollPanel } from 'primeng/scrollpanel';
import { SimpleProfileCardComponent } from './simple-profile-card/simple-profile-card.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [AppMenu, ScrollPanel, SimpleProfileCardComponent, CommonModule],
    templateUrl: './app.sidebar.html'
})
export class AppSidebar {
    constructor(public el: ElementRef) {}
    public today: Date = new Date();
}
