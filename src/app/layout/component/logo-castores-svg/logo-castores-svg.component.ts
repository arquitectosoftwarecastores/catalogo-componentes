import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-logo-castores-svg',
    imports: [],
    templateUrl: './logo-castores-svg.component.html',
    styleUrl: './logo-castores-svg.component.scss'
})
export class LogoCastoresSvgComponent {
    @Input() color = '#000000';
    @Input() height = '65';
    @Input() class = 'mb-8 shrink-0 mx-auto';
}
