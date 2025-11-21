import { useState } from 'react';
import { useSidebar } from '../../contexts/SidebarContext';
import colors from '../../styles/colors';
import logoImage from '../../assets/logo.svg';
import { LoginDialog } from '../dialog/Login';
import { RegisterDialog } from '../dialog/Register';

export default function Header() {
  const { isExpanded } = useSidebar();
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const switchToRegister = () => {
    setOpenLogin(false);
    setTimeout(() => setOpenRegister(true), 100);
  };

  const switchToLogin = () => {
    setOpenRegister(false);
    setTimeout(() => setOpenLogin(true), 100);
  };

  return (
    <header 
      className={`fixed top-0 right-0 h-16 shadow-lg z-40 transition-all duration-300 ${
        isExpanded ? 'md:left-64' : 'md:left-16'
      } left-0`}
      style={{ backgroundColor: colors.background.primary, borderBottom: `1px solid ${colors.border.slateBlue}` }}
    >
      <div className="h-full flex items-center justify-between px-6 max-w-[1660px] mx-auto">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center overflow-hidden">
            <img 
              src={logoImage} 
              alt="Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <LoginDialog 
            forceOpen={openLogin}
            onSwitchToRegister={switchToRegister}
          />

          <RegisterDialog 
            forceOpen={openRegister}
            onSwitchToLogin={switchToLogin}
          />
        </div>
      </div>
    </header>
  );
}
