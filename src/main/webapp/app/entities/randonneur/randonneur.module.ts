import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RandoRicmSharedModule } from '../../shared';
import { RandoRicmAdminModule } from '../../admin/admin.module';
import {
    RandonneurService,
    RandonneurPopupService,
    RandonneurComponent,
    RandonneurDetailComponent,
    RandonneurDialogComponent,
    RandonneurPopupComponent,
    RandonneurDeletePopupComponent,
    RandonneurDeleteDialogComponent,
    randonneurRoute,
    randonneurPopupRoute,
    RandonneurResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...randonneurRoute,
    ...randonneurPopupRoute,
];

@NgModule({
    imports: [
        RandoRicmSharedModule,
        RandoRicmAdminModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        RandonneurComponent,
        RandonneurDetailComponent,
        RandonneurDialogComponent,
        RandonneurDeleteDialogComponent,
        RandonneurPopupComponent,
        RandonneurDeletePopupComponent,
    ],
    entryComponents: [
        RandonneurComponent,
        RandonneurDialogComponent,
        RandonneurPopupComponent,
        RandonneurDeleteDialogComponent,
        RandonneurDeletePopupComponent,
    ],
    providers: [
        RandonneurService,
        RandonneurPopupService,
        RandonneurResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RandoRicmRandonneurModule {}
