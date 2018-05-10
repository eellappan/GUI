import { Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-media-estimate',
  styleUrls: ['./media-estimate.component.scss'],
  templateUrl: './media-estimate.component.html',
})




export class MediaEstimatecomponent implements OnDestroy{
    themeSubscription: any;
    constructor(private themeService: NbThemeService) {
      this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      });
    }
    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
      }
}