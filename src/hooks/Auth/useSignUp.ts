import { app } from '../../firebase-config.ts'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

const useSignUp = () => {
    const auth = getAuth(app)

    const signUp = async (email: string, password: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )
            console.info('Utilisateur créé :', userCredential.user)
            alert('Inscription réussie !')
        } catch (error) {
            console.error("Erreur lors de l'inscription :", error)
            throw error
        }
    }

    return { signUp }
}

export default useSignUp
