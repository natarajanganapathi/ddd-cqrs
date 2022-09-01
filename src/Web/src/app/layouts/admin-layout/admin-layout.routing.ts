import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { CreateOrderComponent } from '../../create-order/create-order.component';
import { OrdersComponent } from '../../orders/orders.component';
import { AccountComponent } from '../../account/account.component';
import { CatalogComponent } from 'app/catalog/catalog.component';

export const AdminLayoutRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'dashboard',
        component: DashboardComponent
    }]}, //{
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'create-order', component: CreateOrderComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'account', component: AccountComponent },
    { path: 'catalog', component: CatalogComponent },
];