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

// const firebaseConfig = {
//   apiKey: "AIzaSyCRuHrHuVk6XLhpwndYDjvJMr_dpWiQvDk",
//   authDomain: "reyes-portfolio-76c63.firebaseapp.com",
//   projectId: "reyes-portfolio-76c63",
//   storageBucket: "reyes-portfolio-76c63.firebasestorage.app",
//   messagingSenderId: "403653581793",
//   appId: "1:403653581793:web:1aa42520606a63a66650a0"
// };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getProjects = async () => {
  try {
    const q = query(
      collection(db, "Project"), // Querying the "Project" collection
      orderBy("createdAt", "desc") // Order by creation date, descending
    );
    const querySnapshot = await getDocs(q); // Execute the query

    const projects = [];
    querySnapshot.forEach((doc) => {
      // Push each document's data along with its ID
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
