import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ClassBondingComponent } from './components/class-bonding/class-bonding.component';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HomeComponent } from './components/home/home.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { SignalComponentComponent } from './components/signal-component/signal-component.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { APIComponent } from './components/api/api.component';
import { PostapiComponent } from './components/postapi/postapi.component';

export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: 'databinding', component: DataBindingComponent },
  { path: 'classbonding', component: ClassBondingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'controlflow', component: ControlFlowComponent },
  { path: 'signal', component: SignalComponentComponent },
  { path: 'templateform', component: TemplateFormComponent },
  { path: 'reactiveform', component: ReactiveFormComponent },
  { path: 'getapi', component: APIComponent },
  { path: 'postapi', component: PostapiComponent },
];
