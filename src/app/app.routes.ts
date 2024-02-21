import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsFormComponent } from './components/products-form/products-form.component';

export const routes: Routes = [
    {path: '', component: ProductsListComponent},
    {path: 'add', component: ProductsFormComponent},
    {path: 'edit/:id', component: ProductsFormComponent}
];
