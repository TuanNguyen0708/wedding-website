import { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from 'firebase/firestore';
import { app } from '../firebase';

const db = getFirestore(app);

export const useAttendance = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitAttendance = async (data: { name: string; email: string; phone: string }) => {
    try {
      setLoading(true);
      setError(null);
      
      await addDoc(collection(db, 'attendance'), {
        ...data,
        timestamp: serverTimestamp()
      });
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { submitAttendance, loading, error };
};

export const useGuestbook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<Array<{ id: string; name: string; message: string; timestamp: any }>>([]);

  useEffect(() => {
    const q = query(collection(db, 'guestbook'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Array<{ id: string; name: string; message: string; timestamp: any }>;
      setMessages(newMessages);
    });

    return () => unsubscribe();
  }, []);

  const submitMessage = async (data: { name: string; message: string }) => {
    try {
      setLoading(true);
      setError(null);
      
      await addDoc(collection(db, 'guestbook'), {
        ...data,
        timestamp: serverTimestamp()
      });
      
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { submitMessage, loading, error, messages };
}; 