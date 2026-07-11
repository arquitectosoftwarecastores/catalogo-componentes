import { Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../layout/component/app.floatingconfigurator';
import { LogoCastoresSvgComponent } from '../../layout/component/logo-castores-svg/logo-castores-svg.component';
import { FloatLabelModule } from 'primeng/floatlabel';
import { MessageModule } from 'primeng/message';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, AppFloatingConfigurator, LogoCastoresSvgComponent, FloatLabelModule, MessageModule, ReactiveFormsModule],
    templateUrl: './login.html'
})
export class Login implements OnDestroy {
    private _formBuilder: FormBuilder = inject(FormBuilder);
    public isLoading = false;
    public isDataValid = true;
    public activeShowPassword = false;

    public formLogin: FormGroup = this._formBuilder.group({
        username: [null, [Validators.required]],
        password: [null, [Validators.required]]
    });

    public login(): void {
        this.isLoading = true;

        if (this.formLogin.valid) {
            setTimeout(() => {
                window.location.href = '/';
            }, 1000);
        } else {
            this.isLoading = false;
        }
    }

    ngOnDestroy(): void {
        this.isLoading = false;
    }
}
