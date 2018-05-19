import { Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent  implements OnDestroy {

  data: any;
  options: any;
  themeSubscription: any;
  //contacts: any[];
  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
        datasets: [{
          data: [300, 500, 100],
          backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
        }],
      };

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        scale: {
          pointLabels: {
            fontSize: 14,
            fontColor: chartjs.textColor,
          },
        },
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }
  // ngOnInit() {
  //       this.contacts = [ {
  //         stud: { picture: 'assets/images/nick.png' },
  //         profosser: { picture: 'assets/images/eva.png' },
  //       }
  //       ];
  // }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
