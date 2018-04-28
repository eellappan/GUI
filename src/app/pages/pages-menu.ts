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
        title: 'Edtion Master',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Publication Master',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Category Master',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Client Master',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Nature Master',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Tax Master',
        link: '/pages/ui-features/buttons',
      },
      {
        title: 'Meterial Master',
        link: '/pages/ui-features/buttons',
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
        link: '/pages/forms/inputs',
      },
      {
        title: 'Media Estimate',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Invoice Register',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Publication Bill Entry',
        link: '/pages/forms/inputs',
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
