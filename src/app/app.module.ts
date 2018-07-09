/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CoreModule } from './@core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EnvironmentUrlService } from './Shared/Services/environment-url.service';
import {RouterModule} from '@angular/router';
//import {NotFoundComponent} from './page-not-found/page-not-found.component';
//import { DashboardModule } from './pages/dashboard/dashboard.module';
import {RepositoryService} from './Shared/Services/repository.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    // RouterModule.forRoot([
    //   { path: 'home', component: DashboardModule },
    //   { path: '404', component : NotFoundComponent},
    //   { path: '', redirectTo: '/home', pathMatch: 'full' },
    //   { path: '**', redirectTo: '/404', pathMatch: 'full'}
    // ]),
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    EnvironmentUrlService,
    RepositoryService
  ],
})
export class AppModule {
}
