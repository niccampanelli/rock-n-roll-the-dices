import { createBrowserRouter, Navigate } from "react-router";
import Inicio from ".";

const routes = createBrowserRouter([
    {
        path: "/login"
    },
    {
        path: "/cadastro"
    },
    {
        path: "/",
        Component: Inicio
    },
    {
        path: "/sessao",
        children: [
            {
                path: "/sessao/:id",
                children: [
                    {
                        path: "/sessao/:id/ficha",
                        element: <Navigate to="/sessao/:id/ficha/:idFicha" />,
                        children: [
                            {
                                path: "/sessao/:id/ficha/:idFicha"
                            }
                        ]
                    }
                ]
            },
            {
                path: "/sessao/criar"
            }
        ]
    }
]);

export default routes;