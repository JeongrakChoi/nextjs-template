'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();

  return (
    <header className="header">
      <div className="inner">
        <h1 className="logo">
          <Link href="/">MVP</Link>
        </h1>

        <nav className="gnb">
          <li>
            <Link href="/menu1">Menu 1</Link>
          </li>
          <li>
            <Link href="/menu2">Menu 2</Link>
          </li>
          <li>
            <Link href="/menu3">Menu 3</Link>
          </li>
          <li>
            <Link href="/menu4">Menu 4</Link>
          </li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
