import { collection, getDocs, query } from "firebase/firestore/lite";
import { defineStore } from "pinia";
import { db } from "../firebaseConfig"


export const useDatabaseStore = defineStore('database',{
    state: () => ({
        documents: []
    }),
    actions: {
       async getUrls(){
        try {
            const q = query(
                collection(db, 'url')
                );
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach((doc) => {
                console.log(doc.id, doc.data())
            })
        } catch (error) {
            console.log(error)
            
        } finally{

        }
       }
    }
}) 