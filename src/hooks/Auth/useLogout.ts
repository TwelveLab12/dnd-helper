import { getAuth, signOut } from 'firebase/auth'
import { app } from '../../firebase-config.ts'

const useLogout = (): { handleLogout: () => Promise<void> } => {
    // Exemple dans un hook ou un composant
    const auth = getAuth(app)

    const handleLogout = async () => {
        try {
            await signOut(auth)
            console.log('Utilisateur déconnecté avec succès !')
            // La fonction onAuthStateChanged se déclenchera et l'état de l'utilisateur passera à null
        } catch (error) {
            console.error('Erreur lors de la déconnexion :', error)
        }
    }

    return { handleLogout }
}

export default useLogout
