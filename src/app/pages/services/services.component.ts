import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  services = [
    {
      logo: 'https://ik.imagekit.io/sshreiyaaa/by-logo.jpg?updatedAt=1709055264633',
      name: 'Blue Yonder',
      cat1: 'JDA'
    },
    {
      logo: 'https://ik.imagekit.io/sshreiyaaa/sf-logo.png?updatedAt=1709055264625',
      name: 'Salesforce',
      cat1: 'SFDC CRM'
    },
    {
      logo: 'https://ik.imagekit.io/sshreiyaaa/ibm-logo.png?updatedAt=1709055264444',
      name: 'IBM',
      cat1: 'AS400',
      cat2: 'Mainframe'
    },
    {
      logo: 'https://ik.imagekit.io/sshreiyaaa/ms-logo.png?updatedAt=1709055264620',
      name: 'Microsoft',
      cat1: 'D365',
      cat2: 'Powersuite'
    },
    {
      logo: 'https://ik.imagekit.io/sshreiyaaa/qlik-logo.png?updatedAt=1709055264564',
      name: 'Qlik',
      cat1: 'Qlik View',
      cat2: 'Qlik Sense'
    },
    {
      logo: 'https://ik.imagekit.io/sshreiyaaa/zoho-logo.jpg?updatedAt=1709055264552',
      name: 'Zoho',
      cat1: 'Zoho One',
      cat2: 'Zoho CRM',
    },
    {
      logo: 'https://ik.imagekit.io/sshreiyaaa/snowf-logo.jpg?updatedAt=1709055264600',
      name: 'Snowflake',
      cat1: 'Data Modelling',
      cat2: 'Data Analysis',
      cat3: 'Integration with Reporting'
    },
    {
      logo: 'https://ik.imagekit.io/sshreiyaaa/odoo-logo.png?updatedAt=1709055264747',
      name: 'Odoo',
      cat1: 'Accounting',
      cat2: 'CRM',
      cat3: 'Point of Sale',
      cat4: 'Website'
    },
    {
      logo: 'https://ik.imagekit.io/sshreiyaaa/sage-logo.jfif?updatedAt=1709055264523',
      name: 'Sage',
      cat1: 'Sage Intacct',
      cat2: 'Sage 50 Accounting',
      cat3: 'Sage X3',
      cat4: 'Sage HR',
      cat5: 'Sage 300 Construction & Real Estate',
      cat6: 'Payments & Banking'
    },
    {
      logo: 'https://ik.imagekit.io/sshreiyaaa/sap-logo.jpg?updatedAt=1709055264610',
      name: 'SAP',
      cat1: 'Sales & Distribution',
      cat2: 'Finance & Controlling',
      cat3: 'Material Management',
      cat4: 'Advanced Business Application Programming',
      cat5: 'Production Planning',
      cat6: 'Customer Support',
      cat7: 'Inventory & Quality Management',
      cat8: 'Human Capital Management',
      cat9: 'Business Warehouse & Analytics'
    }
  ];

}
