import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Transationcomponent} from './transation.component';
import {AreaMappingcomponent} from './area-mapping/area-mapping.component';
import {InvoiceRegistercomponent} from './invoice-register/invoice-register.component';
import {MediaEstimatecomponent} from './media-estimate/media-estimate.component';
import {PublicationBillEntrycomponent} from './publication-bill-entry/publication-bill-entry.component';
import {ReleaseOrderEntrycomponent} from './release-order-entry/release-order-entry.component';

const routes: Routes = [{
    path:'',
    component: Transationcomponent,
    children:[{
        path:'area-mapping',
        component:AreaMappingcomponent
    },
    {
        path:'invoice-register',
        component:InvoiceRegistercomponent
    },
    {
        path:'media-estimate',
        component:MediaEstimatecomponent
    },
    {
        path:'publication-bill-entry',
        component:PublicationBillEntrycomponent
    },
    {
        path:'release-order-entry',
        component:ReleaseOrderEntrycomponent
    }
]
}]

@NgModule({
    imports: 
    [
        RouterModule.forChild(routes)
    ],
    exports: 
    [
        RouterModule
    ],
  })
export class TransationRoutingModule { }

export const routedComponents = [
    Transationcomponent,
    AreaMappingcomponent,
    InvoiceRegistercomponent,
    MediaEstimatecomponent,
    PublicationBillEntrycomponent,
    ReleaseOrderEntrycomponent
  ];