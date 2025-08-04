import './root.module.scss'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { useAuthContext } from '../context/AuthContext'
import useLogout from '../hooks/Auth/useLogout.ts'

export default createRootRoute({
    component: () => {
        const { user, loading } = useAuthContext()
        const { handleLogout } = useLogout()

        if (loading) {
            return <div>Chargement...</div>
        }

        return (
            <>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    {user ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <>
                            <Link to="/sign-up">Sign Up</Link>
                            <Link to="/login">Login</Link>
                        </>
                    )}
                </nav>
                <hr />
                <Outlet />
            </>
        )
    },
})
