// src/app/not-found.tsx
import React from 'react';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you’re looking for doesn’t exist.</p>
      <Link href="/" className="btn-primary">
        Back to Home
      </Link>
    </div>
  );
}
