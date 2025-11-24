import { ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { useSidebar } from '../../contexts/SidebarContext';
import { colors } from '../../styles/styles';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isExpanded } = useSidebar();

  return (
    <div className="min-h-screen" style={{
      backgroundColor: colors.gunmetalDark
    }}>
      <Header />
      <Sidebar />
      
      {/* Desktop Layout */}
      <main 
        className={`hidden md:block pt-16 transition-all duration-300 ${
          isExpanded ? 'ml-64' : 'ml-16'
        }`}
      >
        <div className="p-6 max-w-[1660px] mx-auto">
          {children}
        </div>
      </main>

      {/* Mobile Layout */}
      <main className="md:hidden pt-16 pb-20">
        <div className="p-4 max-w-[1660px] mx-auto">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
