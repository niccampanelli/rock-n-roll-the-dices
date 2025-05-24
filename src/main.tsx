import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Button, Input, InputBase, TextField } from '@mui/material';



function Component() {
    return (
        <>
        <TextField
            variant='outlined'
        />
        <Button
            variant='outlined'
        >
            Clique em mim!!!!!!!
        </Button>
        </>
    )
}



function Component2() {
    return (
        <p>olá contatos</p>
    )
}

const router = createBrowserRouter([
    {
        path: '/',
        Component: Component
    },
    {
        path: '/contatos',
        Component: Component2
    }
]);


createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)







public inteface Objeto {
    
}