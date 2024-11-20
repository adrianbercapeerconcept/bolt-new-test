import { collection, doc, getDoc, setDoc, updateDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

// User Profile Operations
export const getUserProfile = async (userId: string) => {
  const docRef = doc(db, 'users', userId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};

export const updateUserProfile = async (userId: string, data: any) => {
  const userRef = doc(db, 'users', userId);
  await setDoc(userRef, data, { merge: true });
};

// Network Operations
export const getConnections = async (userId: string) => {
  const connectionsRef = collection(db, 'connections');
  const q = query(connectionsRef, where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => doc.data());
};

export const addConnection = async (userId: string, connectionId: string) => {
  const connectionRef = doc(db, 'connections', `${userId}_${connectionId}`);
  await setDoc(connectionRef, {
    userId,
    connectionId,
    timestamp: new Date(),
    status: 'pending'
  });
};

// Messages Operations
export const getMessages = async (chatId: string) => {
  const messagesRef = collection(db, 'chats', chatId, 'messages');
  const querySnapshot = await getDocs(messagesRef);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const sendMessage = async (chatId: string, message: any) => {
  const messagesRef = collection(db, 'chats', chatId, 'messages');
  await setDoc(doc(messagesRef), {
    ...message,
    timestamp: new Date()
  });
};

// Trust Score Operations
export const getTrustScore = async (userId: string) => {
  const scoreRef = doc(db, 'trustScores', userId);
  const docSnap = await getDoc(scoreRef);
  return docSnap.exists() ? docSnap.data() : null;
};

export const updateTrustScore = async (userId: string, score: number) => {
  const scoreRef = doc(db, 'trustScores', userId);
  await updateDoc(scoreRef, {
    score,
    lastUpdated: new Date()
  });
};