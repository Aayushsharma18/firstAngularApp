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
import { ResourcesApisComponent } from './components/resources-apis/resources-apis.component';
import { AngularServiceComponent } from './components/api/angular-service/angular-service.component';
import { CommonComponentsComponent } from './components/common-components/common-components.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [

  // Redirect to login if no path is specified  -- Default Route
  { path: '', redirectTo: 'home', pathMatch: 'full', },

  // { path: 'login', component: LoginComponent },

  {
    //parent level route for all components
    path: '', component: LayoutComponent,
    // canActivate: [authGuard], // Apply authGuard to the parent route
    children: [ // child level routes

      // { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent /* ,canActivate: [authGuard] */ },
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
      { path: 'resourceapis', component: ResourcesApisComponent },
      { path: 'angularservices', component: AngularServiceComponent },
      { path: 'commoncomponents', component: CommonComponentsComponent },
    ]
  },
];
