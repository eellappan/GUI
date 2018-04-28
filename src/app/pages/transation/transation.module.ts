import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AreaMappingComponent} from './area-mapping/area-mapping.component';
import { TransationComponent} from './transation.component';
import { TransationRoutingModule} from './transation-routing.module';

const components = [
    AreaMappingComponent,
    TransationComponent
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
