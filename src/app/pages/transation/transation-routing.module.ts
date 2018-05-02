import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {Transationcomponent} from './transation.component';
import {AreaMappingcomponent} from './area-mapping/area-mapping.component';

const routes: Routes = [{
    path:'',
    component: Transationcomponent,
    children:[{
        path:'area-mapping',
        component:AreaMappingcomponent
    }]
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
  ];