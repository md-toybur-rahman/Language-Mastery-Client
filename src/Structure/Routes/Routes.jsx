
import {
  createBrowserRouter
} from "react-router-dom";
import Main from '../Layout/Main';
import HomeLayout from '../Pages/Home/HomeLayout/HomeLayout';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import DataEntry from '../Pages/DataEntry/DataEntry';
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import DashboardLayout from "../Pages/Dashboard/DashboardLayout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import AdminRoute from "./AdminRoute";
import AddedClass from "../Pages/Dashboard/AddedClass/AddedClass";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <HomeLayout></HomeLayout>
      },
      {
        path: '/instructors',
        element: <Instructors></Instructors>
      },
      {
        path: '/classes',
        element: <Classes></Classes>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/data',
        element: <DataEntry></DataEntry>
      },
    ],
    errorElement: <ErrorPage></ErrorPage>
  },

  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>
      },
      {
        path: 'manage_classes',
        element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
      },
      {
        path: 'add_class',
        element: <AddedClass></AddedClass>
      },
      {
        path: 'payment',
        element: <h1 className="text-4xl">my payment</h1>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);

export default router;