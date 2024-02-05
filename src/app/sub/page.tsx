import React from 'react';
import { type Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sub Title',
  description: 'Sub Disription',
};

const SubPage = () => {
  return (
    <div className="container">
      <div className="inner">서브 페이지입니다.</div>
    </div>
  );
};
export default SubPage;
