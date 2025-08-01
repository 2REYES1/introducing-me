import { initializeApp } from 'firebase/app'; // To start up Firebase
import { getFirestore, collection, addDoc, getDocs, query, doc, updateDoc, deleteDoc, serverTimestamp, orderBy, where } from 'firebase/firestore'; // For database (Firestore)


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getProjects = async () => {
  try {
    const q = query(
      collection(db, "Project"), 
      orderBy("createdAt", "desc") 
    );
    const querySnapshot = await getDocs(q); 

    const projects = [];
    querySnapshot.forEach((doc) => {
      projects.push({ id: doc.id, ...doc.data() });
    });
    return projects;
  } catch (e) {
    console.error("Error getting project documents: ", e);
    throw e;
  }
};

export {
  getProjects
};
