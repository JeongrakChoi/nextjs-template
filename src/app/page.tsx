import React from 'react';
import Link from 'next/link';

const RootPage = () => {
  return (
    <div className="container">
      <div className="inner">
        메인 페이지입니다.
        <br />
        <br />
        <Link href="/sub">서브페이지로 이동</Link>
      </div>
    </div>
  );
};
export default RootPage;
