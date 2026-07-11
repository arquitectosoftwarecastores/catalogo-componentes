import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SakaiLogoSvgComponent } from '../../../layout/component/sakai-logo-svg/sakai-logo-svg.component';

@Component({
    selector: 'footer-widget',
    imports: [RouterModule, SakaiLogoSvgComponent],
    templateUrl: './footerwidget.html'
})
export class FooterWidget {
    constructor(public router: Router) {}
}
