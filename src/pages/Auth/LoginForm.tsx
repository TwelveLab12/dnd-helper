import useLogin from '../../hooks/Auth/useLogin.ts'
import { useActionState } from 'react'
import { useNavigate } from '@tanstack/react-router'

interface LoginFormState {
    email: string
    password: string
    error?: string
}

const LoginForm = () => {
    const { login } = useLogin()
    const navigate = useNavigate()
    const loginAction = async (
        _previousState: LoginFormState,
        formData: FormData
    ) => {
        const data: LoginFormState = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        }

        try {
            await login(data.email, data.password)
            await navigate({ to: '/' })
            return data
        } catch (error: any) {
            return { ...data, error: error.message }
        }
    }

    const [formState, formAction, isPending] = useActionState(loginAction, {
        email: '',
        password: '',
    })

    return (
        <form action={formAction}>
            <h2>Connexion</h2>
            <input
                type="email"
                name="email"
                placeholder="Email"
                defaultValue={formState.email}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                defaultValue={formState.password}
                required
            />
            <button type="submit" disabled={isPending}>
                {isPending ? 'Connexion en cours...' : 'Se connecter'}
            </button>
            {formState.error && (
                <p style={{ color: 'red' }}>{formState.error}</p>
            )}
        </form>
    )
}

export default LoginForm
