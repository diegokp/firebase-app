import { collection, getDocs, query, where, addDoc } from "firebase/firestore/lite";
import { defineStore } from "pinia";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";


export const useDatabaseStore = defineStore('database',{
    state: () => ({
        documents: [],
        loadingDoc: false
    }),
    actions: {
       async getUrls(){
        this.loadingDoc = true
        try {
            const q = query(
                collection(db, 'url'),
                where("user", "==", auth.currentUser.uid)
                );
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach((doc) => {
                console.log(doc.id, doc.data())
                this.documents.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
        } catch (error) {
            console.log(error)
            
        } finally{
            this.loadingDoc = false
        }
       },
       async addUrl(name) {
        try {

            const docRef = await addDoc(collection(db, "url"), {
                // name: "Tokyo",
                // country: "Japan"
              });
        } catch (error) {
             console.log(error)
        }finally{

        }
       }
    },
});