// src/hooks/useAuth.ts
import { useState, useEffect } from 'react'
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth'
import { app } from '../../firebase-config.ts' // Votre configuration Firebase

export function useAuth() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const auth = getAuth(app)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })

        // Cette fonction de nettoyage est importante pour éviter les fuites de mémoire
        return () => unsubscribe()
    }, [])

    return { user, loading }
}
