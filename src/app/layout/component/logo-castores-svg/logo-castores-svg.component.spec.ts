import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCastoresSvgComponent } from './logo-castores-svg.component';

describe('LogoCastoresSvgComponent', () => {
    let component: LogoCastoresSvgComponent;

    let fixture: ComponentFixture<LogoCastoresSvgComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LogoCastoresSvgComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(LogoCastoresSvgComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
