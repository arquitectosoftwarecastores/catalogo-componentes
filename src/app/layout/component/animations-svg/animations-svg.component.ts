import { Component, Input, OnInit } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
    selector: 'app-animations-svg',
    imports: [LottieComponent],
    templateUrl: './animations-svg.component.html',
    styleUrl: './animations-svg.component.scss'
})
export class AnimationsSvgComponent implements OnInit {
    @Input() animationName = '';
    @Input() height = '';
    @Input() width = '';
    @Input() containerClass = '';

    public options: AnimationOptions = {} as AnimationOptions;

    ngOnInit() {
        this.options = {
            path: `assets/animated/${this.animationName}/data.json`
        };
    }
}
