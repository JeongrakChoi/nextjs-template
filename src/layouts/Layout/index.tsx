import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }: any) => {
  return (
    <div className="wrap">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
