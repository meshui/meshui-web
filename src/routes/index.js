
import FrontLayout from 'hoc/Layouts/Front'
import AdminLayout from 'hoc/Layouts/Admin'
import AuthLayout from 'hoc/Layouts/Auth'
import AppLayout from 'hoc/Layouts/App'


import Homepage from 'views/Front/Homepage/Homepage'
import Apps from 'views/Front/Apps/Apps'

import LogInView from 'views/Auth/LogInView'
import SignUpView from 'views/Auth/SignUpView'

import Test from 'components/Test'
import Error404 from '../components/Errors/Error404'


var indexRoutes = [
  { path: "/test1", layout: FrontLayout, component: Test },
  { path: "/test2", layout: AdminLayout, component: Test },
  { path: "/test3", layout: AuthLayout, component: Test },
  { path: "/test4", layout: AppLayout, component: Test },


  { path: "/login", layout: AuthLayout, component: LogInView },
  { path: "/signup", layout: AuthLayout, component: SignUpView },

  { path: "/documentation", layout: FrontLayout, component: Homepage },
  { path: "/apps", layout: FrontLayout, component: Apps },
  { path: "/", layout: FrontLayout, component: Homepage },
  
  { path: "/error", layout: AppLayout, component: Error404 },
];

export default indexRoutes;
