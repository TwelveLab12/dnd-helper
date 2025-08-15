import rootRoute from './__root.tsx'
import { createRoute } from '@tanstack/react-router'
import Home from '../pages/Home.tsx'
import About from '../pages/About.tsx'
import SignUp from '../pages/Auth/SignUp.tsx'
import Login from '../pages/Auth/LoginForm.tsx'

const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <Home />,
})

const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: () => <About />,
})
const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: () => <Login />,
})
const signInRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/sign-up',
    component: () => <SignUp />,
})

export default [indexRoute, aboutRoute, loginRoute, signInRoute]
