import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import { ProtectedRoute } from "./components/containers/protected-route";
import { SignUp } from "./pages/sign-up";
import { SelectCity } from "./pages/select-city";
import { Forecast } from "./pages/forecast/forecast";
import { ROUTES } from "./constants/routes";

const router = createBrowserRouter([
  {
    path: ROUTES.forecast,
    element: (
      <ProtectedRoute>
        <Forecast />
      </ProtectedRoute>
    ),
  },
  {
    path: ROUTES.signUp,
    element: <SignUp />,
  },
  {
    path: ROUTES.selectCity,
    element: (
      <ProtectedRoute>
        <SelectCity />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    loader: () => {
      return redirect("/sign-up");
    },
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
