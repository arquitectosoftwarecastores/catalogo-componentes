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
    template: `
        <app-floating-configurator />
        <div class="dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden bg-without-body">
            <div class="flex flex-col items-center justify-center">
                <div class="login-container lg:w-[40rem] md:w-[40rem] sm:w-[40rem]">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-14 px-8 sm:px-14 rounded-[53px]">
                        <div class="text-center mb-8">
                            <app-logo-castores-svg color="var(--primary-color)" />
                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">NOMBRE DEL SISTEMA</div>
                        </div>
                        <div class="mb-4">
                            <form [formGroup]="formLogin">
                                <div class="mb-10">
                                    <p-floatlabel class="p-floatlabel p-floatlabel-over">
                                        <input pInputText id="username" formControlName="username" type="text" class="w-full {{ !isDataValid && formLogin.controls['username'].errors?.['required'] ? 'ng-invalid ng-dirty' : '' }}" autofocus />
                                        <label for="username" class="text-surface-900 dark:text-surface-0 ">Usuario</label>
                                    </p-floatlabel>
                                    @if (!isDataValid && formLogin.controls['username'].errors?.['required']) {
                                        <p-message severity="error" variant="simple" size="small" styleClass="mt-1">Valor requerido</p-message>
                                    }
                                </div>
                                <div class="mb-10">
                                    <p-floatlabel class="p-floatlabel p-floatlabel-over">
                                        <p-password
                                            id="password"
                                            formControlName="password"
                                            class="{{ !isDataValid && formLogin.controls['password'].errors?.['required'] ? 'ng-invalid ng-dirty' : '' }}"
                                            [toggleMask]="true"
                                            [fluid]="true"
                                            [feedback]="false"
                                        ></p-password>
                                        <label for="password" class="text-surface-900 dark:text-surface-0 ">Contraseña</label>
                                    </p-floatlabel>
                                    @if (!isDataValid && formLogin.controls['password'].errors?.['required']) {
                                        <p-message severity="error" variant="simple" size="small" styleClass="mt-1">Valor requerido</p-message>
                                    }
                                </div>
                                <p-button type="button" label="Iniciar sesion" styleClass="w-full" [loading]="isLoading" (onClick)="login()"></p-button>
                            </form>
                        </div>
                        <div class="float-end">
                            <span class="text-primary">v0.0.0.0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
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
