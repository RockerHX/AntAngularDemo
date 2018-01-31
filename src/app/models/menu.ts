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
    }
];
