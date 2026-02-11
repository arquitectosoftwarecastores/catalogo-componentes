import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { SplitButtonModule } from 'primeng/splitbutton';

@Component({
    selector: 'app-button-demo',
    standalone: true,
    imports: [ButtonModule, ButtonGroupModule, SplitButtonModule],
    template: `<div class="flex flex-col md:flex-row gap-8">
        <div class="md:w-1/2">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">Default</div>
                <div class="flex flex-wrap gap-2">
                    <p-button label="Submit" raised></p-button>
                    <p-button label="Disabled" [disabled]="true" raised></p-button>
                    <p-button label="Link" class="p-button-link" raised />
                </div>
            </div>
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">Text</div>
                <div class="flex flex-wrap gap-2">
                    <p-button label="Primary" text />
                    <p-button label="Secondary" severity="secondary" text />
                    <p-button label="Success" severity="success" text />
                    <p-button label="Info" severity="info" text />
                    <p-button label="Warn" severity="warn" text />
                    <p-button label="Help" severity="help" text />
                    <p-button label="Danger" severity="danger" text />
                </div>
            </div>
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">Outlined</div>
                <div class="flex flex-wrap gap-2">
                    <p-button label="Primary" outlined />
                    <p-button label="Secondary" severity="secondary" outlined />
                    <p-button label="Success" severity="success" outlined />
                    <p-button label="Info" severity="info" outlined />
                    <p-button label="warn" severity="warn" outlined />
                    <p-button label="Help" severity="help" outlined />
                    <p-button label="Danger" severity="danger" outlined />
                    <p-button label="Contrast" severity="contrast" outlined />
                </div>
            </div>
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">SplitButton</div>
                <div class="flex flex-wrap gap-2">
                    <p-splitbutton label="Save" [model]="items"></p-splitbutton>
                    <p-splitbutton label="Save" [model]="items" severity="secondary"></p-splitbutton>
                    <p-splitbutton label="Save" [model]="items" severity="contrast"></p-splitbutton>
                </div>
            </div>
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">Group</div>
                <div class="flex flex-wrap gap-2">
                    <p-buttongroup raised>
                        <p-button label="Save" icon="pi pi-check" />
                        <p-button label="Delete" icon="pi pi-trash" />
                        <p-button label="Cancel" icon="pi pi-times" />
                    </p-buttongroup>
                </div>
            </div>
        </div>
        <div class="md:w-1/2">
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">Raised</div>
                <div class="flex flex-wrap gap-2">
                    <p-button label="Primary" raised />
                    <p-button label="Secondary" severity="secondary" raised />
                    <p-button label="Success" severity="success" raised />
                    <p-button label="Info" severity="info" raised />
                    <p-button label="Warn" severity="warn" raised />
                    <p-button label="Help" severity="help" raised />
                    <p-button label="Danger" severity="danger" raised />
                    <p-button label="Contrast" severity="contrast" raised />
                </div>
            </div>
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">Rounded Icons</div>
                <div class="flex flex-wrap gap-2">
                    <p-button icon="pi pi-check" rounded />
                    <p-button icon="pi pi-bookmark" severity="secondary" rounded />
                    <p-button icon="pi pi-search" severity="success" rounded />
                    <p-button icon="pi pi-user" severity="info" rounded />
                    <p-button icon="pi pi-bell" severity="warn" rounded />
                    <p-button icon="pi pi-heart" severity="help" rounded />
                    <p-button icon="pi pi-times" severity="danger" rounded />
                </div>
            </div>
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">Rounded Outlined</div>
                <div class="flex flex-wrap gap-2">
                    <p-button icon="pi pi-check" rounded outlined />
                    <p-button icon="pi pi-bookmark" severity="secondary" rounded outlined />
                    <p-button icon="pi pi-search" severity="success" rounded outlined />
                    <p-button icon="pi pi-user" severity="info" rounded outlined />
                    <p-button icon="pi pi-bell" severity="warn" rounded outlined />
                    <p-button icon="pi pi-heart" severity="help" rounded outlined />
                    <p-button icon="pi pi-times" severity="danger" rounded outlined />
                </div>
            </div>
            <div class="card flex flex-col gap-4">
                <div class="font-semibold text-xl">Loading</div>
                <div class="flex flex-wrap gap-2">
                    <p-button type="button" label="Search" icon="pi pi-search" [loading]="loading[0]" (click)="load(0)" />
                    <p-button type="button" styleClass="h-full" icon="pi pi-search" [loading]="loading[2]" (click)="load(2)" />
                </div>
            </div>
        </div>
    </div> `
})
export class ButtonDemo implements OnInit {
    items: MenuItem[] = [];

    loading = [false, false, false, false];

    ngOnInit() {
        this.items = [{ label: 'Update', icon: 'pi pi-refresh' }, { label: 'Delete', icon: 'pi pi-times' }, { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' }, { separator: true }, { label: 'Setup', icon: 'pi pi-cog' }];
    }

    load(index: number) {
        this.loading[index] = true;
        setTimeout(() => (this.loading[index] = false), 1000);
    }
}
