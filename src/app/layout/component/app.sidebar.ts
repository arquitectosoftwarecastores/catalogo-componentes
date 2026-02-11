import { Component, ElementRef } from '@angular/core';
import { AppMenu } from './app.menu';
import { ScrollPanel } from 'primeng/scrollpanel';
import { SimpleProfileCardComponent } from './simple-profile-card/simple-profile-card.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [AppMenu, ScrollPanel, SimpleProfileCardComponent, CommonModule],
    template: ` <div class="layout-sidebar">
        <div class="border-b border-gray-200">
            <app-simple-profile-card />
        </div>
        <p-scrollpanel styleClass="scrollpanel">
            <app-menu></app-menu>
        </p-scrollpanel>
        <div class="float-end m-1">
            <p class="text-xs text-[var(--text-muted)]">&copy; {{ today | date: 'yyyy' }} <a href="https://www.castores.com.mx" target="_blank" class="text-muted">Grupo Castores</a> | <span class="text-primary">v0.0.0.0</span></p>
        </div>
    </div>`
})
export class AppSidebar {
    constructor(public el: ElementRef) {}
    public today: Date = new Date();
}
