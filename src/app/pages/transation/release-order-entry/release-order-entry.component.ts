import { Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-release-order-entry',
  styleUrls: ['./release-order-entry.component.scss'],
  templateUrl: './release-order-entry.component.html',
})




export class ReleaseOrderEntrycomponent implements OnDestroy{
    themeSubscription: any;
    constructor(private themeService: NbThemeService) {
      this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      });
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
      }
}