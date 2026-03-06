import { db } from "../firebase/firebase.js";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export async function getNews() {
    const querySnapshot = await getDocs(collection(db, "News"));
    return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
}


function formatMonthYear(timestamp) {
    if (!timestamp) return "Present";

    const date = timestamp.toDate();

    return date.toLocaleString("en-US", {
        month: "short",
        year: "numeric"
    });
}

export async function getExperience(){
    const q = query(
        collection(db, "Experience"),
        orderBy("startDate", "desc") 
    );

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
        const data = doc.data();

        return {
            id: doc.id,
            company: data.company,
            role: data.role,
            startDate: formatMonthYear(data.startDate),
            endDate: data.endDate ? formatMonthYear(data.endDate) : "Present",
            description: data.description || [],
            technologies: data.technologies || []
        };
    });
}