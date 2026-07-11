import { Routes } from '@angular/router';
import { Crud } from './crud/crud';
import { Empty } from './empty/empty';

export default [
    { path: 'crud', data: { breadcrumb: 'Crud' }, component: Crud },
    { path: 'empty', data: { breadcrumb: 'Empty' }, component: Empty },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
