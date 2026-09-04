import { createBrowserRouter } from "react-router";
import { DashboardLayout } from "../dashboard/layout/DashboardLayout";

export const appRouter = createBrowserRouter([
    {
        path: "",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <p>pagina principal</p>
            }
        ]
    }
])