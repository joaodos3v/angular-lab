// In Angular, the best practice is to load and configure the router
// in a separate, top-level module. The router is dedicated to routing
// and imported by the root AppModule.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
];

// The method is called forRoot() because you configure the router
// at the application's root level. The forRoot() method supplies
// the service providers and directives needed for routing, and
// performs the initial navigation based on the current browser URL.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
