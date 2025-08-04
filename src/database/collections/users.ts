import { db } from '../../firebase-config'
import { collection, addDoc } from 'firebase/firestore'

// La variable 'db' est l'instance de votre base de données Firestore
const usersCollectionRef = collection(db, 'Users')

export const addUser = async () => {
    try {
        await addDoc(usersCollectionRef, {
            name: 'John Doe',
            email: 'john.doe@example.com',
            age: 30,
        })
        console.log('Document successfully written!')
    } catch (e) {
        console.error('Error adding document: ', e)
    }
}
