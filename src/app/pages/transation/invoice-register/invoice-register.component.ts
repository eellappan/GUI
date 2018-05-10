import { Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-invoice-register',
  styleUrls: ['./invoice-register.component.scss'],
  templateUrl: './invoice-register.component.html',
})

export class InvoiceRegistercomponent implements OnDestroy{
    themeSubscription: any;
    constructor(private themeService: NbThemeService) {
      this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      });
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
      }
}