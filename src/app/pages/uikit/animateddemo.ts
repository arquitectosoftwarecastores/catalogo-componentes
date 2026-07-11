import { Component } from '@angular/core';
import { AnimationsSvgComponent } from '../../layout/component/animations-svg/animations-svg.component';

@Component({
    selector: 'app-animated-demo',
    standalone: true,
    imports: [AnimationsSvgComponent],
    templateUrl: './animateddemo.html'
})
export class AnimatedDemo {}
