import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Mastercomponent} from './master.component';
import {EditionMastercomponent} from './edition-master/edition-master.component';
import {MeterialMastercomponent} from './meterial-master/meterial-master.component';
import {ClientMastercomponent} from './client-master/client-master.component';
import {CategoryMastercomponent} from './category-master/category-master.component';
import {NatureMastercomponent} from './nature-master/nature-master.component';
import {PublicationMastercomponent} from './publication-master/publication-master.component';
import {TaxMastercomponent} from './tax-master/tax-master.component';

const routes: Routes = [{
    path:'',
    component: Mastercomponent,
    children:[{
        path:'edition-master',
        component:EditionMastercomponent
    },{
        path:'meterial-master',
        component:MeterialMastercomponent
    },{
        path:'client-master',
        component:ClientMastercomponent
    },
    {
        path:'category-master',
        component:CategoryMastercomponent
    },
    {
        path:'nature-master',
        component:NatureMastercomponent
    },
    {
        path:'publication-master',
        component:PublicationMastercomponent
    },
    {
        path:'tax-master',
        component:TaxMastercomponent
    },
   
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
export class MasterRoutingModule { }

export const routedComponents = [
     Mastercomponent,
     EditionMastercomponent,
     MeterialMastercomponent,
     ClientMastercomponent,
     CategoryMastercomponent,
     NatureMastercomponent,
     PublicationMastercomponent,
     TaxMastercomponent
  ];