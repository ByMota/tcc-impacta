// src/components/Layout.jsx
import { Header } from './header';
import { Footer } from './footer';
import { Outlet } from 'react-router-dom';


export function Layout() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="flex-1 p-4 self-center ">
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
