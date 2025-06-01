import { createBrowserRouter, Navigate } from "react-router";
import Inicio from ".";
import Login from "./auth/login";
import Auth from "./auth";
import Cadastro from "./auth/cadastro";

const routes = createBrowserRouter([
    {
        path: "/auth",
        Component: Auth,
        children: [
            {
                path: "/auth/login",
                Component: Login
            },
            {
                path: "/auth/cadastro",
                Component: Cadastro
            },
        ]
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