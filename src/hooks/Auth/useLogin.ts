import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../../firebase-config.ts'

const useLogin = () => {
    const auth = getAuth(app) // Obtenir l'instance d'authentification

    const login = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)

            console.log('Utilisateur connecté !')
            alert('Connexion réussie !')
            return null

            // Gérer la redirection ou l'état de l'application ici
        } catch (error) {
            console.error('Erreur lors de la connexion :', error)
            if (error instanceof Error) {
                throw error
                //return error.message;
            }
        }
    }

    return { login }
}

export default useLogin
