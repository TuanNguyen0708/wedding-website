import { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
import { app } from '../firebase';

const db = getFirestore(app);

type GuestbookMessage = {
  id: string;
  name: string;
  message: string;
  timestamp: Timestamp | null;
};

type Attendance = {
  id: string;
  name: string;
  email: string;
  phone: string;
  timestamp: Timestamp | null;
};

export const useAttendance = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [attendances, setAttendances] = useState<Attendance[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'attendance'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newAttendances: Attendance[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          timestamp: data.timestamp ?? null,
        };
      });
      setAttendances(newAttendances);
    });

    return () => unsubscribe();
  }, []);

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

  return { submitAttendance, loading, error, attendances };
};

export const useGuestbook = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<GuestbookMessage[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'guestbook'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages: GuestbookMessage[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          message: data.message,
          timestamp: data.timestamp ?? null,
        };
      });
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