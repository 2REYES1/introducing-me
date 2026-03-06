import { db } from "../firebase/firebase.js";
import { collection, getDocs } from "firebase/firestore";

export async function getNews() {
    const querySnapshot = await getDocs(collection(db, "News"));
    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
}