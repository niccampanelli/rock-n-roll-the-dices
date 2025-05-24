import { createBrowserRouter, NavigationStates, BrowserRouter, Navigate } from "react-router";

const routes = createBrowserRouter([
    {
        path: "/login"
    },
    {
        path: "/cadastro"
    },
    {
        path: "/"
    },
    {
        path: "/sessao",
        children: [
            {
                path: "/sessao/:id",
                children: [
                    {
                        path: "/sessao/:id/ficha",
                        element: <Navigate to="" />,
                        children: [
                            {
                                path: "/sessao/:id/ficha/:idFicha"
                            }
                        ]
                    }
                ]
            },
            {
                path: "/criar"
            }
        ]
    }
]);