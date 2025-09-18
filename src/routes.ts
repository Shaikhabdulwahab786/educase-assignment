import type { RouteObject } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    ErrorBoundary: ErrorPage, 
    children: [
      {
        index: true,
        lazy: () =>
          import("./pages/Home").then(m => ({ Component: m.default })),
      },
      {
        path: "login",
        lazy: () =>
          import("./pages/Login").then(m => ({ Component: m.default })),
      },
      {
        path: "signup",
        lazy: () =>
          import("./pages/SignUp").then(m => ({ Component: m.default })),
      },
      {
        path: "users/:userId",
        async lazy() {
          const [{ default: User }, { userLoader }, { default: ErrorBoundary }] =
            await Promise.all([
              import("./components/Userdetails"),
              import("./pages/Loader"),
              import("./pages/ErrorPage"),
            ]);

          return {
            Component: User,
            loader: userLoader,
            ErrorBoundary,
          };
        },
      },
      {
        path: "*",
        lazy: () =>
          import("./pages/ErrorPage").then(m => ({ Component: m.default })),
      },
    ],
  },
];
