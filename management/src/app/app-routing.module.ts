import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OrganizationComponent } from './organization/organization.component';
import { RequestsComponent } from './requests/requests.component';
import { DocumentsComponent } from './documents/documents.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'organization', component: OrganizationComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'documents', component: DocumentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
