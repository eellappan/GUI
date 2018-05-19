import { Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-nature-master',
  styleUrls: ['./nature-master.component.scss'],
  templateUrl: './nature-master.component.html',
})


export class NatureMastercomponent  implements OnDestroy{
  starRate = 2;
  heartRate = 4;
  themeName = 'default';
  settings: Array<any>;
  themeSubscription: any;
  constructor(private themeService: NbThemeService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.themeName = theme.name;
      this.init(theme.variables);
    });
  }
  init(colors: any) {
    this.settings = [{
        class: 'btn-hero-secondary',
        container: 'secondary-container',
        title: 'Ghost Button',
        buttonTitle: 'New',
        disable:'true',
        default: {
          border: '#dadfe6',
        },
        cosmic: {
          border: colors.primary,
          bevel: '#665ebd',
          shadow: 'rgba (33, 7, 77, 0.5)',
          glow: 'rgba (146, 141, 255, 1)',
        },
      },
      {
        class: 'btn-hero-secondary',
        container: 'secondary-container',
        title: 'Ghost Button',
        buttonTitle: '  Save ',
        disable:'true',
        default: {
          border: '#dadfe6',
        },
        cosmic: {
          border: colors.primary,
          bevel: '#665ebd',
          shadow: 'rgba (33, 7, 77, 0.5)',
          glow: 'rgba (146, 141, 255, 1)',
        },
      },
      {
        class: 'btn-hero-secondary',
        container: 'secondary-container',
        title: 'Ghost Button',
        buttonTitle: '  View ',
        disable:'true',
        default: {
          border: '#dadfe6',
        },
        cosmic: {
          border: colors.primary,
          bevel: '#665ebd',
          shadow: 'rgba (33, 7, 77, 0.5)',
          glow: 'rgba (146, 141, 255, 1)',
        },
      },
      {
        class: 'btn-hero-secondary',
        container: 'secondary-container',
        title: 'Ghost Button',
        buttonTitle: ' Modify',
        disable:'true',
        default: {
          border: '#dadfe6',
        },
        cosmic: {
          border: colors.primary,
          bevel: '#665ebd',
          shadow: 'rgba (33, 7, 77, 0.5)',
          glow: 'rgba (146, 141, 255, 1)',
        },
      },
      {
        class: 'btn-hero-secondary',
        container: 'secondary-container',
        title: 'Ghost Button',
        buttonTitle: 'Refresh',
        disable:'true',
        default: {
          border: '#dadfe6',
        },
        cosmic: {
          border: colors.primary,
          bevel: '#665ebd',
          shadow: 'rgba (33, 7, 77, 0.5)',
          glow: 'rgba (146, 141, 255, 1)',
        },
      },
      {
        class: 'btn-hero-secondary',
        container: 'secondary-container',
        title: 'Ghost Button',
        buttonTitle: 'Cancel ',
        disable:'true',
        default: {
          border: '#dadfe6',
        },
        cosmic: {
          border: colors.primary,
          bevel: '#665ebd',
          shadow: 'rgba (33, 7, 77, 0.5)',
          glow: 'rgba (146, 141, 255, 1)',
        },
      }
    ]}

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}