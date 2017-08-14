import {AllUsersComponent} from './AllUsersComponent';
import {BadRouteComponent} from './BadRouteComponent';
import {RouterModule} from '@angular/router';
import {UserInfoComponent} from './UserInfoComponent';

import {CanDeactivateGuardService} from './CanDeactivateGuardService';
import {FriendsComponent} from './FriendsComponent';
import {FamilyComponent} from './FamilyComponent';

const approutes = [
    { path:'', component:AllUsersComponent },
    { path:'allusers', component:AllUsersComponent },
    { path:'user/:username', component:UserInfoComponent, canDeactivate:[CanDeactivateGuardService],
      children:[
          { path: ''},
          { path: 'friends', component:FriendsComponent},
          { path: 'family', component:FamilyComponent}
      ]
    },
    { path:'**', component:BadRouteComponent }
];

export default RouterModule.forRoot(approutes);