import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import BookingPage from "./pages/BookingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/bookingdetails",
        element: <BookingPage />,
      },
    ],
  },

  // {
  //   path: "/dashboard",
  //   element: (
  //     <DashboardProtectedRoute>
  //       <DashboardLayout />
  //     </DashboardProtectedRoute>
  //   ),
  //   children: [
  //     {
  //       index: true,
  //       element: <Content />,
  //     },
  //   ],
  // },

  // {
  //   path: "/moviepostform",
  //   element: (
  //     <ProtectedRoute>
  //       <MoviePostForm />
  //     </ProtectedRoute>
  //   ),
  // },
  // {
  //   path: "/showtimeform",
  //   element: (
  //     <ProtectedRoute>
  //       <ShowtimeForm />
  //     </ProtectedRoute>
  //   ),
  // },

  // {
  //   path: "/signup",
  //   element: <RegisterForm />,
  // },

  // {
  //   path: "/signin",
  //   element: <SignInForm />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/slider",
  //   element: <ImageSlider2 />,
  // },
  // {
  //   path: "/newdashboard",
  //   element: <NewDashboard />,
  // },
]);

export default router;
