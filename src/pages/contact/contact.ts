import { Component } from '@angular/core';

import {
  ActionSheet,
  ActionSheetController,
  Config,
  NavController
} from 'ionic-angular';


import { ConferenceData } from '../../providers/conference-data';

import { SessionDetailPage } from '../session-detail/session-detail';
import { ContactDetailPage } from '../contact-detail/contact-detail';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  actionSheet: ActionSheet;
  contacts: any[] = [];

  constructor(
    public actionSheetCtrl: ActionSheetController,
    public navCtrl: NavController,
    public confData: ConferenceData,
    public config: Config,
    
  ) {}

  ionViewDidLoad() {
    this.confData.getContacts().subscribe((contacts: any[]) => {
      this.contacts = contacts;
    });
  }

  goToSessionDetail(session: any) {
    this.navCtrl.push(SessionDetailPage, { sessionId: session.id });
  }

  goToContactDetail(contact: any) {
    this.navCtrl.push(ContactDetailPage, { contactId: contact.id });
  }

  goToContactTwitter(contact: any) {
   
  }

  openContactShare(contact: any) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Share ' + contact.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' 
            );
            if (
              (window as any)['cordova'] &&
              (window as any)['cordova'].plugins.clipboard
            ) {
              (window as any)['cordova'].plugins.clipboard.copy(
                'https://twitter.com/' 
              );
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    actionSheet.present();
  }

  openContact(contact: any) {
    let mode = this.config.get('mode');

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Contact ' + contact.name,
      buttons: [
        {
          text: `Email ( ${contact.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + contact.email);
          }
        },
        {
          text: `Call ( ${contact.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + contact.phone);
          }
        }
      ]
    });

    actionSheet.present();
  }
}
