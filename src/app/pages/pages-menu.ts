import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Master',
    icon: 'nb-person',
    children:[
      {
        title: 'Edition Master',
        link: '/pages/master/edition-master',
      },
      {
        title: 'Publication Master',
        link: '/pages/master/publication-master',
      },
      {
        title: 'Category Master',
        link: '/pages/master/category-master',
      },
      {
        title: 'Client Master',
        link: '/pages/master/client-master',
      },
      {
        title: 'Nature Master',
        link: '/pages/master/nature-master',
      },
      {
        title: 'Tax Master',
        link: '/pages/master/tax-master',
      },
      {
        title: 'Meterial Master',
        link: '/pages/master/meterial-master',
      }
    ]
  },
  {
    title: 'Transaction',
    icon: 'nb-compose',
    children: [
      {
        title: 'Area Mapping',
        link: '/pages/transation/area-mapping',
      },
      {
        title: 'Release Order Entry',
        link: '/pages/transation/release-order-entry',
      },
      {
        title: 'Media Estimate',
        link: '/pages/transation/media-estimate',
      },
      {
        title: 'Invoice Register',
        link: '/pages/transation/invoice-register',
      },
      {
        title: 'Publication Bill Entry',
        link: '/pages/transation/publication-bill-entry',
      }
    ]
  },
 {
  title: 'Reports',
  icon: 'nb-bar-chart',
  children: [
    {
      title: 'Release Order Report',
      link: '/pages/components/tree',
    },
    {
      title: 'Invoice Report',
      link: '/pages/components/tree',
    },
    {
      title: 'Publication Bill Report',
      link: '/pages/components/tree',
    },
    {
      title: 'Area Mapping Report',
      link: '/pages/components/tree',
    }
  ]
 },
];
