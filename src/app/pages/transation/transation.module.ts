import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { TransationRoutingModule, routedComponents} from './transation-routing.module';


@NgModule({
  imports: [
    ThemeModule,
    TransationRoutingModule
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class TransationModule { }
