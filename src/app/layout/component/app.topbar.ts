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
    templateUrl: './app.topbar.html'
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
