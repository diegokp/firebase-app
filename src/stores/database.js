import { collection, getDocs, query, where, addDoc, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore/lite";
import { defineStore } from "pinia";
import { db } from "../firebaseConfig";
import { auth } from "../firebaseConfig";
import { nanoid } from "nanoid";
import router from "../router";


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
                // console.log(doc.id, doc.data())
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
            const objetoDoc = {
                name: name,
                short: nanoid(6),
                user: auth.currentUser.uid,
            };
            const docRef = await addDoc(collection(db, "url"), objetoDoc);
            // console.log(docRef);
            this.documents.push({
                ...objetoDoc,
                id: docRef.id,
            })
        } catch (error) {
             console.log(error);
        }finally{

        }
       },
       async leerUrl (id) {
        try {
            const docRef = doc(db,'url', id);
            const docSnap = await getDoc(docRef);

            if(!docSnap.exists()){
                throw new Error('No existe doc');
            }

            if(docSnap.data().user !== auth.currentUser.uid){
                throw new Error('no es posible editar el doc')
            }

            return docSnap.data().name;

        } catch (error) {
            console.log(error.message)
        } finally{
 
        }
       },
       async updateUrl (id, name){
        try {
            const docRef = doc(db,'url', id);
            const docSnap = await getDoc(docRef)

            if(!docSnap.exists()){
                throw new Error('No existe doc');
            }

            if(docSnap.data().user !== auth.currentUser.uid){
                throw new Error('no es posible acceder a doc')
            }

            await updateDoc(docRef,{
                name: name
            })
            this.documents = this.documents.map(item => 
                item.id === id ? ({...item, name: name}) : item
            );
            router.push('/');
        } catch (error) {
            console.log(error.mesagge)
        } finally {

        }
       },
       async deleteUrl(id){
        try {
            const docRef = doc(db,'url', id);

            const docSnap = await getDoc(docRef)
            if(!docSnap.exists()){
                throw new Error('No existe doc');
            }

            if(docSnap.data().user !== auth.currentUser.uid){
                throw new Error('no es posible borrar el doc')
            }

            await deleteDoc(docRef);
            this.documents = this.documents.filter(
                (item) => item.id !== id
            );

        } catch (error) {
            console.log(error.message);
        } finally{

        }
       },
    },
}); 