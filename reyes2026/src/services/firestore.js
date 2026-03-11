import { db } from "../firebase/firebase.js";
import { collection, getDocs, query, orderBy, doc, getDoc } from "firebase/firestore";

let experienceCache = null;
let newsCache = null;
let projectsCache = null;

function formatMonthDayYear(timestamp) {
  if (!timestamp) return "";

  const date = timestamp.toDate();

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
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


export async function getNews() {

    if (newsCache){
        console.log("newsCache is used!");
        return newsCache;
    }

    const q = query(
        collection(db, "News"),
        orderBy("date", "desc") 
    );
    console.log("Fetching News from Firestore...");
    const querySnapshot = await getDocs(q);

    const news = querySnapshot.docs.map((doc) => {
        const data = doc.data();

        return {
            id: doc.id,
            content: data.content,
            date: formatMonthDayYear(data.date),
            newsTitle: data.newsTitle
        };
    });

    newsCache = news;
    return news;
}


export async function getExperience(){

    if (experienceCache){
        console.log("experienceCache is used!");
        return experienceCache;
    }
    const q = query(
        collection(db, "Experience"),
        orderBy("startDate", "desc") 
    );
    console.log("Fetching Experience from Firestore...");
    const querySnapshot = await getDocs(q);

    const experience = querySnapshot.docs.map((doc) => {
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

    experienceCache = experience;
    return experience;

}

export async function getProjects(){

    if (projectsCache){
        console.log("projectsCache used!");
        return projectsCache;
    }
    console.log("Fetching Projects from Firestore...");
    const q = query(
        collection(db, "Projects"),
        orderBy("date", "desc")
    )

    const querySnapshot = await getDocs(q);


    const projects = querySnapshot.docs.map((doc) => {
        const data = doc.data();

        return {
            id: doc.id,
            projectName: data.projectName,
            date: formatMonthYear(data.date),
            description: data.description || [],
            technologies: data.technologies || [],
            githubLink: data.githubLink,
            videoLink: data.videoLink || null,
        };
    });

    projectsCache = projects;
    return projects;
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

export async function getSpecialtyTags(){
    const docRef = doc(db, "BasicInfo", "SpecialtyTags");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()){
        return docSnap.data();

    } else {
        console.log("SpecialtyTags doc does not exist.");
        return null
    }
}

export async function getSkillsTags(){
    const docRef = doc(db, "BasicInfo", "SkillsTags");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()){
        return docSnap.data();

    } else {
        console.log("SkillsTags doc does not exist.");
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