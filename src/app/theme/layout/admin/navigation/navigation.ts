export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'item',
    url: '/analytics',
    icon: 'feather icon-home'
  },
  {
    id: 'customers',
    title: 'Customers',
    type: 'collapse',
    icon: 'feather icon-file-text',
    children: [
      {
        id: 'add customers',
        title: 'Add customers',
        type: 'item',
        url: '/add-customers',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
      {
        id: 'view customers',
        title: 'View customers',
        type: 'item',
        url: '/view-customers',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
    ]
  },
  {
    id: 'category',
    title: 'Category',
    type: 'collapse',
    icon: 'feather icon-file-text',
    children: [
      {
        id: 'add category',
        title: 'Add category',
        type: 'item',
        url: '/add-category',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
      {
        id: 'view category',
        title: 'View category',
        type: 'item',
        url: '/view-category',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
    ]
  },
  {
    id: 'product',
    title: 'Product',
    type: 'collapse',
    icon: 'feather icon-file-text',
    children: [
      {
        id: 'add product',
        title: 'Add product',
        type: 'item',
        url: '/add-product',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
      {
        id: 'view product',
        title: 'View product',
        type: 'item',
        url: '/view-product',
        classes: 'nav-item',
        icon: 'feather icon-file-text'
      },
    ]
  },
  // {
  //   id: 'ui-component',
  //   title: 'Ui Component',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'basic',
  //       title: 'Component',
  //       type: 'collapse',
  //       icon: 'feather icon-box',
  //       children: [
  //         {
  //           id: 'button',
  //           title: 'Button',
  //           type: 'item',
  //           url: '/component/button'
  //         },
  //         {
  //           id: 'badges',
  //           title: 'Badges',
  //           type: 'item',
  //           url: '/component/badges'
  //         },
  //         {
  //           id: 'breadcrumb-pagination',
  //           title: 'Breadcrumb & Pagination',
  //           type: 'item',
  //           url: '/component/breadcrumb-paging'
  //         },
  //         {
  //           id: 'collapse',
  //           title: 'Collapse',
  //           type: 'item',
  //           url: '/component/collapse'
  //         },
  //         {
  //           id: 'tabs-pills',
  //           title: 'Tabs & Pills',
  //           type: 'item',
  //           url: '/component/tabs-pills'
  //         },
  //         {
  //           id: 'typography',
  //           title: 'Typography',
  //           type: 'item',
  //           url: '/component/typography'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   id: 'Authentication',
  //   title: 'Authentication',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'signup',
  //       title: 'Sign up',
  //       type: 'item',
  //       url: '/auth/signup',
  //       icon: 'feather icon-at-sign',
  //       target: true,
  //       breadcrumbs: false
  //     },
  //     {
  //       id: 'signin',
  //       title: 'Sign in',
  //       type: 'item',
  //       url: '/auth/signin',
  //       icon: 'feather icon-log-in',
  //       target: true,
  //       breadcrumbs: false
  //     }
  //   ]
  // },
  // {
  //   id: 'chart',
  //   title: 'Chart',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'apexchart',
  //       title: 'ApexChart',
  //       type: 'item',
  //       url: '/chart',
  //       classes: 'nav-item',
  //       icon: 'feather icon-pie-chart'
  //     }
  //   ]
  // },
  // {
  //   id: 'forms & tables',
  //   title: 'Forms & Tables',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'customers',
  //       title: 'Customers',
  //       type: 'item',
  //       url: '/customers',
  //       classes: 'nav-item',
  //       icon: 'feather icon-file-text'
  //     },
  //     {
  //       id: 'tables',
  //       title: 'tables',
  //       type: 'item',
  //       url: '/tables',
  //       classes: 'nav-item',
  //       icon: 'feather icon-server'
  //     }
  //   ]
  // },
  // {
  //   id: 'other',
  //   title: 'Other',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'sample-page',
  //       title: 'Sample Page',
  //       type: 'item',
  //       url: '/sample-page',
  //       classes: 'nav-item',
  //       icon: 'feather icon-sidebar'
  //     },
  //     {
  //       id: 'menu-level',
  //       title: 'Menu Levels',
  //       type: 'collapse',
  //       icon: 'feather icon-menu',
  //       children: [
  //         {
  //           id: 'menu-level-2.1',
  //           title: 'Menu Level 2.1',
  //           type: 'item',
  //           url: 'javascript:',
  //           external: true
  //         },
  //         {
  //           id: 'menu-level-2.2',
  //           title: 'Menu Level 2.2',
  //           type: 'collapse',
  //           children: [
  //             {
  //               id: 'menu-level-2.2.1',
  //               title: 'Menu Level 2.2.1',
  //               type: 'item',
  //               url: 'javascript:',
  //               external: true
  //             },
  //             {
  //               id: 'menu-level-2.2.2',
  //               title: 'Menu Level 2.2.2',
  //               type: 'item',
  //               url: 'javascript:',
  //               external: true
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // }
];
