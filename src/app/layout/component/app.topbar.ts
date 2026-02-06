import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { AppConfigurator } from './app.configurator';
import { LayoutService } from '../service/layout.service';
import { Menu } from 'primeng/menu';
import { LogoCastoresSvgComponent } from './logo-castores-svg/logo-castores-svg.component';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [Menu, RouterModule, CommonModule, StyleClassModule, AppConfigurator, LogoCastoresSvgComponent],
    template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a [routerLink]="'/'" class="sidebar-brand d-flex justify-content-center">
                <app-logo-castores-svg color="white" height="3rem" class="mt-[.1rem]" />
            </a>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                    <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                </button>
                <div class="relative">
                    <button class="layout-topbar-action " pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                        <i class="pi pi-palette"></i>
                    </button>
                    <app-configurator />
                </div>

                <div class="options-page">
                    <button type="button" class="layout-topbar-action" (click)="menu.toggle($event)">
                        <i class="pi pi-user"></i>
                    </button>
                    <p-menu [model]="items" #menu popup="true" styleClass="top-menu-dropdown">
                        <ng-template #item let-item>
                            <ng-container *ngIf="item.route; else elseBlock">
                                <a [routerLink]="item.route" class="p-menu-item-link">
                                    <span [class]="item.icon"></span>
                                    <span class="ml-2">{{ item.label }}</span>
                                </a>
                            </ng-container>
                            <ng-template #elseBlock>
                                <a [href]="item.url" class="p-menu-item-link">
                                    <span [class]="item.icon"></span>
                                    <span class="ml-2">{{ item.label }}</span>
                                </a>
                            </ng-template>
                        </ng-template>
                    </p-menu>
                </div>
            </div>
        </div>
    </div>`
})
export class AppTopbar implements OnInit {
    public items: MenuItem[] | undefined;

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Opciones',
                items: [
                    {
                        label: 'Acerca de',
                        icon: 'pi pi-microchip',
                        route: `/info/about-us`
                    },
                    {
                        label: 'Salir',
                        icon: 'pi pi-sign-out',
                        route: '/auth/login'
                    }
                ]
            }
        ];
    }

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
}
