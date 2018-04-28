import { Component } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {


  contacts: any[];

  ngOnInit() {

   
        this.contacts = [ {
          stud: { picture: 'assets/images/nick.png' },
          profosser: { picture: 'assets/images/eva.png' },
        }
        ];

        
  }


}
