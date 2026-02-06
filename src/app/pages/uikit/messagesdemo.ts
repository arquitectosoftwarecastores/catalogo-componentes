import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService, ToastMessageOptions } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';

@Component({
    selector: 'app-messages-demo',
    standalone: true,
    imports: [CommonModule, ButtonModule, InputTextModule, MessageModule, FormsModule],
    template: `
        <div class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/2">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Toast</div>
                    <div class="flex flex-wrap gap-2">
                        <p-button (click)="showSuccessViaToast()" label="Success" severity="success" raised />
                        <p-button (click)="showInfoViaToast()" label="Info" severity="info" raised />
                        <p-button (click)="showWarnViaToast()" label="Warn" severity="warn" raised />
                        <p-button (click)="showErrorViaToast()" label="Error" severity="danger" raised />
                    </div>

                    <div class="font-semibold text-xl mt-4 mb-4">Inline</div>
                    <div class="flex flex-col mb-4 gap-1">
                        <input pInputText [(ngModel)]="username" placeholder="Username" aria-label="username" class="ng-dirty ng-invalid" />
                        <p-message severity="error" variant="simple" size="small">Username is required</p-message>
                    </div>
                    <div class="flex flex-col flex-wrap gap-1">
                        <input pInputText [(ngModel)]="email" placeholder="Email" aria-label="email" class="ng-dirty ng-invalid" />
                        <p-message severity="error" variant="simple" size="small">Email is required</p-message>
                    </div>
                </div>
            </div>
            <div class="md:w-1/2">
                <div class="card">
                    <div class="font-semibold text-xl mb-4">Message</div>
                    <div class="flex flex-col gap-4 mb-4">
                        <p-message severity="success">Success Message</p-message>
                        <p-message severity="info">Info Message</p-message>
                        <p-message severity="warn">Warn Message</p-message>
                        <p-message severity="error">Error Message</p-message>
                        <p-message severity="secondary">Secondary Message</p-message>
                        <p-message severity="contrast">Contrast Message</p-message>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class MessagesDemo {
    msgs: ToastMessageOptions[] | null = [];

    username: string | undefined;

    email: string | undefined;

    private _messageService: MessageService = inject(MessageService);
    private _life = 2500;
    private message = 'Este esun mensaje';

    showInfoViaToast() {
        this._messageService.add({ severity: 'info', summary: '¡Información importante!', detail: `${this.getMessage(this.message)}`, life: this._life });
    }

    showWarnViaToast() {
        this._messageService.add({ severity: 'warn', summary: 'Oops!', detail: `...${this.getMessage(this.message)}`, life: this._life });
    }

    showErrorViaToast() {
        this._messageService.add({ severity: 'error', summary: 'Algo salió mal...', detail: `🤖...${this.getMessage(this.message)}`, life: this._life });
    }

    showSuccessViaToast() {
        this._messageService.add({ severity: 'success', summary: '¡Enhorabuena!', detail: `${this.getMessage(this.message)}`, life: this._life });
    }

    private getMessage(message: string | number): string {
        let response = ``;

        switch (message) {
            case 400:
                response = `[${message}] - Petición incorrecta. Verifica los datos enviados.`;
                break;
            case 401:
                response = `[${message}] - Acceso denegado. Por favor inicia sesión nuevamente.`;
                break;
            case 403:
                response = `[${message}] - No tienes permiso para acceder a este recurso.`;
                break;
            case 404:
                response = `[${message}] - Recurso no encontrado.`;
                break;
            case 500:
                response = `[${message}] - Error interno del servidor. Intenta nuevamente más tarde.`;
                break;
            case 502:
                response = `[${message}] - El servidor está inalcanzable. Intenta nuevamente más tarde.`;
                break;
            case 503:
                response = `[${message}] - El servicio está temporalmente fuera de servicio.`;
                break;

            case 'create':
                response = `Registro creado con éxito.`;
                break;
            case 'update':
                response = `Registro actualizado.`;
                break;
            case 'delete':
                response = `Registro eliminado.`;
                break;
            case 'finish':
                response = `Se ha finalizado con éxito.`;
                break;
            case 'GENERAL':
                response = `No es posible conectar al servidor.`;
                break;
            case 'form-incomplete':
                response = `La información no está completa y/o no cumple con los requisitos.`;
                break;
            case 'unauthorized':
                response = `Acceso denegado`;
                break;
            case 'passwords-not-match':
                response = `Las constraseñas no coinciden`;
                break;
            case 'no-content':
                response = `Sin contenido`;
                break;
            case 'already-exists':
                response = `El registro ya existe en el sistema.`;
                break;
            case 'session-expired':
                response = `Tu sesión ha expirado.`;
                break;
            case 'invalid-grant':
                response = `Credenciales inválidas.`;
                break;
            case 'invalid-token':
                response = `Token inválido o expirado.`;
                break;
            case 'no-records':
                response = `No se encontraron registros.`;
                break;

            default:
                response = `${message}`;
                break;
        }

        return response;
    }
}
