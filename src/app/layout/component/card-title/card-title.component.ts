import { Component, OnInit } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbService } from '../../service/breadcrumb.service';
import { MenuItem } from 'primeng/api';
import { Dashboard } from '../../../pages/dashboard/dashboard';

@Component({
    selector: 'app-card-title',
    imports: [BreadcrumbModule],
    templateUrl: './card-title.component.html',
    styleUrl: './card-title.component.scss'
})
export class CardTitleComponent implements OnInit {
    home: MenuItem;
    items: MenuItem[] = [];
    label: string | undefined = '';
    constructor(private breadcrumbService: BreadcrumbService) {
        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }

    ngOnInit(): void {
        this.breadcrumbService.breadcrumbs$.subscribe((items) => {
            this.items = items.length ? items : [{ label: 'Dashboard' }];
            this.label = this.items[this.items.length - 1]?.label ?? '';
        });
    }
}
