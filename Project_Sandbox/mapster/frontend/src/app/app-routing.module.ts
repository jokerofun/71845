import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { NewDocumentComponent } from './pages/new-document/new-document.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/docs' },
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'new-document', component: NewDocumentComponent },
  { path: 'docs', component: MainComponent },
  { path: 'docs/:docId', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
