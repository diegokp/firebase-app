import { defineStore} from 'pinia';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import router from '../router'

export const useUserStore = defineStore('user',{ 
    state: () => ({
        userData: null
    }),
    actions:{
        async registerUser(email, password){
            try{
                const {user} = await createUserWithEmailAndPassword (auth, email, password)
                this.userData = {email: user.email, uid: user.uid}
                router.push('/')
                console.log(user)
            } catch (error) {
                console.log(error)
                
            }

        },
        async loginUser(email, password){
            try {
                const {user} = await signInWithEmailAndPassword (auth, email, password)
                this.userData = {email: user.email, uid: user.uid}
                router.push('/')
            } catch (error) {
                console.log(error)
            }
        },
        async logoutUser(){
            try {
                await signOut(auth)
                this.userData = null
                router.push('/login')
            } catch (error) {
                console.log(error)
            }
        }
    },
}) 