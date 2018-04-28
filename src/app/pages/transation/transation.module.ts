import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AreaMappingcomponent} from './area-mapping/area-mapping.component';
import { Transationcomponent} from './transation.component';
import { TransationRoutingModule} from './transation-routing.module';

const components = [
  AreaMappingcomponent,
    Transationcomponent
];

@NgModule({
  imports: [
    ThemeModule,
    TransationRoutingModule
  ],
  exports: [
    ...components,
  ],
  declarations: [
    ...components,
  ],
  providers: [],
})
export class TransationModule { }
