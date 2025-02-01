import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./Pages/Home";
import OldFetch from "./Pages/OldFetch";
import ReactQuery from "./Pages/ReactQuery";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactQueryDetails from "./Pages/ReactQueryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/old-fetch",
        element: <OldFetch></OldFetch>,
      },
      {
        path: "/react-query",
        element: <ReactQuery />,
      },
      {
        path: "/react-query/:id",
        element: <ReactQueryDetails />,
      },
    ],
  },
]);
function App() {
  const queryClient= new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
export default App;
