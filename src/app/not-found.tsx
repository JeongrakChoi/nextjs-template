import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container">
      <div className="inner">
        404 - Page Not Found !!!
        <br />
        <Link href="/">GO Home</Link>
      </div>
    </div>
  );
}
