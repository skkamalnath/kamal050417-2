import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { userComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';

const appRoutes: Routes = [
{
	path:'',
	component:userComponent
},
{
	path:'about',
	component:AboutComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);