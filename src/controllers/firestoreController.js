import { initializeApp } from "firebase/app";
import { collection, getFirestore, addDoc, getDocs } from "firebase/firestore/lite";

class FirestoreInterface {
  constructor(config) {
    const firebaseConfig = config;
    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
  }

  async addDocument(data) {
    try {
      await addDoc(collection(this.db, "users"), data);
      console.log("Document successfully written!");
    } catch (e) {
      console.error("Error writing document: ", e);
    }
  }

  async getDocument() {
    try {
      const querySnapshot = await getDocs(collection(this.db, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    } catch (e) {
      console.error("Error reading document: ", e);
    }
  }
}

export default FirestoreInterface;
