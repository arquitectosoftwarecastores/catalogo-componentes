import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BreadcrumbService implements OnDestroy {
    private readonly _breadcrumbs$ = new BehaviorSubject<MenuItem[]>([]);
    readonly breadcrumbs$ = this._breadcrumbs$.asObservable();

    private readonly destroy$ = new Subject<void>();

    constructor(
        private readonly router: Router,
        private readonly route: ActivatedRoute
    ) {
        this.router.events
            .pipe(
                filter((event): event is NavigationEnd => event instanceof NavigationEnd),
                map(() => this.buildBreadcrumbs(this.route.root)),
                takeUntil(this.destroy$)
            )
            .subscribe((breadcrumbs) => this._breadcrumbs$.next(breadcrumbs));
    }

    private buildBreadcrumbs(route: ActivatedRoute, url = '', breadcrumbs: MenuItem[] = []): MenuItem[] {
        const { children, snapshot } = route;

        const routeURL = snapshot.url.map((segment) => segment.path).join('/');

        // Construye la nueva URL solo si hay segmentos
        const nextUrl = routeURL ? `${url}/${routeURL}` : url;

        const label = snapshot.data['breadcrumb'] as string | undefined;

        if (label) {
            breadcrumbs.push({ label, routerLink: nextUrl });
        }

        // Recorre recursivamente las rutas hijas principales
        for (const child of children) {
            if (child.outlet === 'primary') {
                this.buildBreadcrumbs(child, nextUrl, breadcrumbs);
            }
        }

        return breadcrumbs;
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
