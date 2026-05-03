import { db } from './firebase-config.js';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const dashboardCollection = collection(db, "emergency_events"); // ชื่อ Collection
const q = query(dashboardCollection, orderBy("timestamp", "desc"));

// ฟังก์ชันดึงข้อมูลแบบ Real-time
export const listenToUpdates = (callback) => {
  return onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(data);
  }, (error) => {
    console.error("Firebase Error:", error);
  });
};