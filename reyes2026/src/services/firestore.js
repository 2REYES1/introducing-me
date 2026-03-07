import { db } from "../firebase/firebase.js";
import { collection, getDocs, query, orderBy, doc, getDoc } from "firebase/firestore";

function formatMonthDayYear(timestamp) {
  if (!timestamp) return "";

  const date = timestamp.toDate();

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function getNews() {
    const q = query(
        collection(db, "News"),
        orderBy("date", "desc") 
    );

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
        const data = doc.data();

        return {
            id: doc.id,
            content: data.content,
            date: formatMonthDayYear(data.date),
            newsTitle: data.newsTitle
        };
    });
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

export async function getProjects(){
    const q = query(
        collection(db, "Projects"),
        orderBy("date", "desc")
    )

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
        const data = doc.data();

        return {
            id: doc.id,
            projectName: data.projectName,
            date: formatMonthYear(data.date),
            description: data.description || [],
            technologies: data.technologies || [],
            demo: data.demo
        };
    });

}

export async function getAboutMeInfo(){
    const docRef = doc(db, "BasicInfo", "AboutMe");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()){
        return docSnap.data();

    } else {
        console.log("AboutMe doc does not exist.");
        return null
    }
}

export async function getImportantLinks(){
    const docRef = doc(db, "BasicInfo", "Links");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()){
        return docSnap.data();

    } else {
        console.log("ImportantLinks doc does not exist.");
        return null
    }
}

export async function getLastUpdatedDate(){
    const docRef = doc(db, "BasicInfo", "LastUpdate");
    const docSnap = await getDoc(docRef);
        if (docSnap.exists()){
            const data = docSnap.data();
        return {
            date: formatMonthDayYear(data.date)
        }

    } else {
        console.log("LastUpdated doc does not exist.");
        return null
    }
}