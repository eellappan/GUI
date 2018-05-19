import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

import { UserService } from '../../../@core/data/users.service';

@Component({
  selector: 'ngx-contacts',
  styleUrls: ['./contacts.component.scss'],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit, OnDestroy {

  contacts: any[];
  recent: any[];
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  themeSubscription: any;

  constructor(private userService: UserService,
              private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnInit() {

    this.userService.getUsers()
      .subscribe((users: any) => {
        this.contacts = [
          {user: users.Ellappan, type: 'mobile'},
          {user: users.kishore, type: 'home'},
          {user: users.priya, type: 'mobile'},
          {user: users.karthi, type: 'mobile'},
          {user: users.Kumar, type: 'home'},
          {user: users.Ramya, type: 'work'},
        ];

        this.recent = [
          {user: users.Ellappan, type: 'home', time: '9:12 pm'},
          {user: users.kishore, type: 'home', time: '7:45 pm'},
          {user: users.karthi, type: 'mobile', time: '5:29 pm'},
          {user: users.priya, type: 'mobile', time: '11:24 am'},
        ];
      });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
