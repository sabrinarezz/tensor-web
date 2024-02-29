import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  links = [
    {
      name: 'home',
      link: '/'
    },
    {
      name: 'about',
      link: '/about'
    },
    {
      name: 'contact',
      link: '/contact'
    },
    {
      name: 'services',
      link: '/services'
    }
  ];

  services = [
    {
      name: 'Qlik'
    },
    {
      name: 'IBM'
    },
    {
      name: 'SAP'
    },
    {
      name: 'Sage'
    },
    {
      name: 'Zoho'
    },
    {
      name: 'Odoo'
    },
    {
      name: 'Microsoft'
    },
    {
      name: 'Snowflake'
    },
    {
      name: 'Salesforce'
    },
    {
      name: 'Blue Yonder'
    },
  ];
}
