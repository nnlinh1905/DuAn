export const adminMenu = [
    { //Quản Lý Người dùng
        name: 'menu.admin.manage-user',
        menus: [
            {
                name: 'menu.admin.crud', link: '/system/crud'
            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux'
            },
            {
                name: 'menu.admin.manage-teacher', link: '/system/teachers-manage',
                // subMenus: [
                //     { name: 'menu.admin.manage-teacher', link: '/system/teachers-manage' },
                //     { name: 'menu.admin.about-teacher', link: '/system/about-teacher' },
                // ]
            },
            {
                name: 'menu.admin.about-teacher', link: '/system/about-teacher'
                // name: 'menu.admin.manage-teacher', link: '/system/teachers-manage',
                // subMenus: [
                    // { name: 'menu.admin.manage-teacher', link: '/system/teachers-manage' },
                //     { name: 'menu.admin.about-teacher', link: '/system/about-teacher' },
                // ]
            },
            {
                name: 'menu.admin.manage-admin', link: '/system/user-manage'
            },
            
        ]
    },
    { //Quản Lý Lớp Học
        name: 'menu.admin.class',
        menus: [
            {
                name: 'menu.admin.manegeClass', link: '/system/class'
            },
        ]
    },
    { //Quản Lý Bộ Môn
        name: 'menu.admin.PC',
        menus: [
            {
                name: 'menu.admin.PCGD', link: '/system/assignment'
            },
        ]
    },
    { //Quản Lý Điểm
        name: 'menu.admin.point',
        menus: [
            {
                name: "menu.admin.manage-point", link: 'system/user/manage-point'
            }
        ]
    },
    { //Quản Lý Hạnh Kiểm
        name: 'menu.admin.Conduct',
        menus: [
            {
                name: "menu.admin.manage-Conduct", link: 'system/user/manage-Conduct'
            }
        ]
    },
    { //Quản Lý Hạnh Kiểm
        name: 'menu.admin.news',
        menus: [
            {
                name: "menu.admin.manage-news", link: '/system/news'
            }
        ]
    },
];