import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-sakai-logo-svg',
    standalone: true,
    templateUrl: './sakai-logo-svg.component.html'
})
export class SakaiLogoSvgComponent {
    @Input() height = '48';
    @Input() class = 'h-12 mr-2';
}
