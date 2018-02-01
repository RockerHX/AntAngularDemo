export class MenuModel {
    title: String;
    icon: String;
    items: Array<ItemsModel>;
}

export class ItemsModel {
    title: String;
    url: String;
}

export const MENUS: MenuModel[] = [
    {
      title: 'General',
      icon: 'appstore',
      items: [
        { title: 'Button 按钮', url: '/general-button'},
        { title: 'Icon 图标', url: '/general-icon'}
      ]
    },
    {
      title: 'Layout',
      icon: 'layout',
      items: [
        { title: 'Grid 栅格', url: '/general-grid'},
        { title: 'Layout 布局', url: '/general-layout'}
      ]
    },
    {
      title: 'Navigation',
      icon: 'file',
      items: [
        { title: 'Affix 固钉', url: '/general-affix'},
        { title: 'Breadcrumb 面包屑', url: '/general-breadcrumb'},
        { title: 'Dropdown 下拉菜单', url: '/general-dropdown'}
      ]
    }
];
