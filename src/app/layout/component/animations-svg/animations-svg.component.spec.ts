import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationsSvgComponent } from './animations-svg.component';

describe('AnimationsSvgComponent', () => {
    let component: AnimationsSvgComponent;

    let fixture: ComponentFixture<AnimationsSvgComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AnimationsSvgComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AnimationsSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
