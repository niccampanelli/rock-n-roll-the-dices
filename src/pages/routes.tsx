import { createBrowserRouter, Navigate, redirect, useParams } from "react-router";
import Inicio from ".";
import Login from "./auth/login";
import Auth from "./auth";
import Cadastro from "./auth/cadastro";
import Sessao from "./sessao";
import DefaultLayout from "components/layout/DefaultLayout";
import Ficha from "./sessao/ficha";
import { fichas } from "./dados";

const routes = createBrowserRouter([
    {
        path: "auth",
        Component: Auth,
        children: [
            {
                index: true,
                element: <Navigate to="/auth/login" replace />
            },
            {
                path: "login",
                Component: Login
            },
            {
                path: "cadastro",
                Component: Cadastro
            },
        ]
    },
    {
        Component: DefaultLayout,
        children: [
            {
                path: "",
                Component: Inicio
            },
            {
                path: "sessao",
                children: [
                    {
                        index: true,
                        element: <Navigate to="/" replace />
                    },
                    {
                        path: ":idSessao",
                        children: [
                            {
                                index: true,
                                Component: Sessao,
                                loader: () => {
                                    return { fichas };
                                }
                            },
                            {
                                path: "ficha",
                                children: [
                                    {
                                        index: true,
                                        loader: ({ params }) => {
                                            const { idSessao } = params;
                                            return redirect(`/sessao/${idSessao}`);
                                        }
                                    },
                                    {
                                        path: ":idFicha",
                                        Component: Ficha
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
]);

export default routes;