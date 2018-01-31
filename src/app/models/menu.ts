export class MenuModel {
    title: String;
    subMenus: Array<SubMenuModel>;
}

export class SubMenuModel {
    title: String;
    url: String;
}


export const MENUS: MenuModel[] = [
    {
      title: 'Basic',
      subMenus: [
        { title: 'Layout 布局', url: '/basic-layout'},
        { title: 'Container 布局容器', url: '/basic-container'}
      ]
    }
];
