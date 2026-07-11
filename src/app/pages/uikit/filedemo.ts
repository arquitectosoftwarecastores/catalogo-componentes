import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FileUploadEvent, FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';

@Component({
    selector: 'app-file-demo',
    standalone: true,
    imports: [CommonModule, FileUploadModule, ToastModule, ButtonModule],
    templateUrl: './filedemo.html'
})
export class FileDemo {
    uploadedFiles: File[] = [];

    private _messageService: MessageService = inject(MessageService);

    upload(event: FileUploadEvent) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }
        this._messageService.add({ severity: 'success', summary: 'Exito!', detail: 'File Uploaded' });
    }

    basicUpload() {
        this._messageService.add({ severity: 'success', summary: 'Exito!', detail: 'File Uploaded with Basic Mode' });
    }
}
