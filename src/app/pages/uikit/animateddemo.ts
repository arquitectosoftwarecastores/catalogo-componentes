import { Component } from '@angular/core';
import { AnimationsSvgComponent } from '../../layout/component/animations-svg/animations-svg.component';

@Component({
    selector: 'app-animated-demo',
    standalone: true,
    imports: [AnimationsSvgComponent],
    template: `
        <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/3">
                <div class="card" style="background-color: var(--p-surface-900)">
                    <app-animations-svg animationName="castor" height="30vh" />
                </div>

                <div class="card">
                    <app-animations-svg animationName="buzon" height="30vh" />
                </div>

                <div class="card">
                    <app-animations-svg animationName="caja" height="30vh" />
                </div>
            </div>
            <div class="md:w-1/3">
                <div class="card">
                    <app-animations-svg animationName="paquete" height="30vh" />
                </div>

                <div class="card">
                    <app-animations-svg animationName="camion" height="30vh" />
                </div>

                <div class="card">
                    <app-animations-svg animationName="compra" height="30vh" />
                </div>
            </div>
            <div class="md:w-1/3">
                <div class="card" style="background-color: var(--p-surface-900)">
                    <app-animations-svg animationName="loading" height="30vh" />
                </div>

                <div class="card">
                    <app-animations-svg animationName="play" height="30vh" />
                </div>

                <div class="card">
                    <app-animations-svg animationName="viaje" height="30vh" />
                </div>
            </div>
        </div>
    `
})
export class AnimatedDemo {}
