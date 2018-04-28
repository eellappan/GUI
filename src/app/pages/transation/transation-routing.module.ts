import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TransationComponent} from './transation.component';
import {AreaMappingComponent} from './area-mapping/area-mapping.component';

const routes: Routes = [{
    path:'',
    component: TransationComponent,
    children:[ {
        path:'area-mapping',
        component:AreaMappingComponent
    }
]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class TransationRoutingModule { }