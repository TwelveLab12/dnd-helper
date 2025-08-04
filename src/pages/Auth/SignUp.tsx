import useSignUp from '../../hooks/Auth/useSignUp.ts'
import { useActionState } from 'react'
import { useNavigate } from '@tanstack/react-router'

interface SignupFormState {
    email: string
    password: string
    error?: string
}

function SignUp() {
    const { signUp } = useSignUp()
    const navigate = useNavigate()
    const signUpAction = async (
        _previousState: SignupFormState,
        formData: FormData
    ) => {
        const data: SignupFormState = {
            email: formData.get('email') as string,
            password: formData.get('password') as string,
        }
        try {
            await signUp(data.email, data.password)
            await navigate({ to: '/' })
            return data
        } catch (error: any) {
            return { ...data, error: (error as Error).message }
        }
    }

    const [formState, formAction, isPending] = useActionState(signUpAction, {
        email: '',
        password: '',
    })

    return (
        <>
            <form action={formAction}>
                <h2>Inscription</h2>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    defaultValue={formState.email}
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Mot de passe"
                    defaultValue={formState.password}
                    required
                />
                <button type="submit" disabled={isPending}>
                    {isPending ? 'Inscription en cours...' : "S'inscrire"}
                </button>
                {formState?.error && (
                    <p style={{ color: 'red' }}>{formState?.error}</p>
                )}
            </form>
        </>
    )
}

export default SignUp
