import { Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-publication-bill-entry',
  styleUrls: ['./publication-bill-entry.component.scss'],
  templateUrl: './publication-bill-entry.component.html',
})




export class PublicationBillEntrycomponent implements OnDestroy{
    themeSubscription: any;
    constructor(private themeService: NbThemeService) {
      this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      });
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
      }
}