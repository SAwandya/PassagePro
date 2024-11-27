import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import BookingPage from "./pages/BookingPage";
import MainPassengerData from "./pages/MainPassengerData";
import ExtrasPage from "./pages/ExtrasPage";
import PaymentPage from "./pages/PaymentPage";
import SeatBookingPage from "./pages/SeatBookingPage";
import SocialButtons from "./components/auth/SocialButtons";

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
      {
        path: "/mainpassengerdata",
        element: <MainPassengerData />,
      },
      {
        path: "/options",
        element: <ExtrasPage />,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
      },
      {
        path: "/seatbooking",
        element: <SeatBookingPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <SocialButtons />,
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
