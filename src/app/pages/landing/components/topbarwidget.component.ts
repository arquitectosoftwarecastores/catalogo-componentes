import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { SakaiLogoSvgComponent } from '../../../layout/component/sakai-logo-svg/sakai-logo-svg.component';

@Component({
    selector: 'topbar-widget',
    imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule, SakaiLogoSvgComponent],
    templateUrl: './topbarwidget.html'
})
export class TopbarWidget {
    constructor(public router: Router) {}
}
