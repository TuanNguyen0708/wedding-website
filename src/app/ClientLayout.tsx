'use client';

import { useState, useEffect } from 'react';
import Loading from '@/components/Loading';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the page is fully loaded
    const handleLoad = () => {
      setIsLoading(false);
    };

    // If the page is already loaded
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : children}
    </>
  );
} 