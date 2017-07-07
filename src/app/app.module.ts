import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ContactDetailPage } from '../pages/contact-detail/contact-detail';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { TabsPage } from '../pages/tabs/tabs';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';
import { IonicStorageModule } from '@ionic/storage';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { HomeFilterPage } from '../pages/home-filter/home-filter';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    ContactDetailPage,
    SessionDetailPage,
    HomePage,
    HomeFilterPage,
    PopoverPage,
    MapPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs' },
        { component: HomePage, name: 'Home', segment: 'home' },
        
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: ContactPage, name: 'Contact', segment: 'contact' },
   
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    ContactDetailPage,
    SessionDetailPage,
    HomePage,
    HomeFilterPage,
    PopoverPage,
    MapPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConferenceData,
    UserData,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
