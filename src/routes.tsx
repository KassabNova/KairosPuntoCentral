import AuthGuard from "components/authentication/AuthGuard";
import GuestGuard from "components/authentication/GuestGuard";
import DashboardLayout from "components/Layouts/DashboardLayout";
import LoadingScreen from "components/LoadingScreen";
import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";
import ReservationGrid from "./pages/reservations/ReservationGrid";
import AddNewReservation from "./pages/reservations/AddNewReservation";
import ApartmentGrid from "./pages/apartmentManagement/ApartmentGrid";

const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// authentication pages
const Login = Loadable(lazy(() => import("./pages/authentication/Login")));
const Register = Loadable(
  lazy(() => import("./pages/authentication/Register"))
);
const ForgetPassword = Loadable(
  lazy(() => import("./pages/authentication/ForgetPassword"))
);

// Dashboard pages
const DashboardSaaS = Loadable(lazy(() => import("./pages/dashboards/SaaS")));

// user profile
const UserProfile = Loadable(lazy(() => import("./pages/UserProfile")));

// user management
const UserList = Loadable(
  lazy(() => import("./pages/userManagement/UserList"))
);

const AddNewUser = Loadable(
  lazy(() => import("./pages/userManagement/AddNewUser"))
);

// error
const Error = Loadable(lazy(() => import("./pages/404")));

// routes
const routes = [
  {
    path: "login",
    element: (
      <GuestGuard>
        <Login />
      </GuestGuard>
    ),
  },
  {
    path: "forget-password",
    element: (
      <GuestGuard>
        <ForgetPassword />
      </GuestGuard>
    ),
  },
  {
    path: "/",
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <DashboardSaaS />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },

      {
        path: "user-list",
        element: <UserList />,
      },
      {
        path: "apartments",
        element: <ApartmentGrid />,
      },
      {
        path: "apartments/:apartmentId/reservations/",
        element: <ReservationGrid />,
      },
      {
        path: "apartments/:apartmentId/add-reservation/",
        element: <AddNewReservation />,
      },
      {
        path: "add-user",
        element: <AddNewUser />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;
