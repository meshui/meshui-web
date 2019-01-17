import Homepage from "views/Homepage/Homepage";
import Apps from "views/Apps/Apps";
import Workspace from "views/Workspace/Workspace.js";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LogInPage from "views/Auth/LogInPage.js";
import SignUpPage from "views/Auth/SignUpPage.js";
import TestPage from "views/TestPage.js";

var indexRoutes = [
  { path: "/workspace", name: "Workspace", component: Workspace },
  { path: "/apps", name: "Apps", component: Apps },
  { path: "/profile", name: "ProfilePage", component: ProfilePage },
  { path: "/signup", name: "SignUpPage", component: SignUpPage },
  { path: "/login", name: "LogInPage", component: LogInPage },
  { path: "/test", name: "TestPage", component: TestPage },
  { path: "/", name: "Homepage", component: Homepage }
];

export default indexRoutes;
