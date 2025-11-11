import { Link, useLocation } from 'react-router-dom';
import { X, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TbCloverFilled } from 'react-icons/tb';
import { BiSupport } from 'react-icons/bi';
import { MdLanguage } from 'react-icons/md';
import { BiSolidMedal } from 'react-icons/bi';
import { HiMenuAlt2 } from 'react-icons/hi';
import { RiMenuFoldLine } from 'react-icons/ri';
import { useSidebar } from '../../contexts/SidebarContext';
import { useState } from 'react';
import colors from '../../styles/colors';

const menuItems = [
  { path: '/', labelKey: 'navigation.home', icon: BiSolidMedal },
  { path: '/scratchcards', labelKey: 'navigation.scratchcards', icon: TbCloverFilled },
  { path: '/support', labelKey: 'navigation.support', icon: BiSupport },
  { path: '/components', labelKey: 'navigation.components', icon: Settings },
];

const languages = [
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
];

export default function Sidebar() {
  const { isExpanded, toggleSidebar } = useSidebar();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsLanguageOpen(false);
  };

  const getCurrentLanguageText = () => {
    return currentLanguage.name.toUpperCase();
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:block fixed left-0 top-0 h-screen transition-all duration-300 z-30 ${isExpanded ? 'w-64' : 'w-16'
          }`}
        style={{ backgroundColor: colors.background.primary, borderRight: `1px solid ${colors.border.slateBlue}` }}
      >
        {/* Toggle Button */}
        <div className="flex justify-end p-3">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg transition-colors"
            style={{ color: colors.text.muted }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = colors.text.primary;
              e.currentTarget.style.backgroundColor = colors.background.secondary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = colors.text.muted;
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            {isExpanded ? (
              <RiMenuFoldLine className="w-5 h-5" />
            ) : (
              <HiMenuAlt2 className="w-5 h-5" />
            )}
          </button>
        </div>

        <nav className="px-3 mt-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all group"
                    style={{
                      backgroundColor: isActive ? colors.background.secondary : 'transparent',
                      color: isActive ? colors.text.primary : colors.text.muted
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = colors.background.secondary;
                        e.currentTarget.style.color = colors.text.primary;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = colors.text.muted;
                      }
                    }}
                    title={!isExpanded ? t(item.labelKey) : undefined}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span
                      className={`whitespace-nowrap transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'
                        }`}
                    >
                      {t(item.labelKey)}
                    </span>
                  </Link>
                </li>
              );
            })}

            {/* Language Selector */}
            <li className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all group w-full"
                style={{ color: colors.text.muted }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.background.secondary;
                  e.currentTarget.style.color = colors.text.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = colors.text.muted;
                }}
                title={!isExpanded ? `${t('common.language')} - ${currentLanguage.name}` : undefined}
              >
                <MdLanguage className="w-5 h-5 flex-shrink-0" />
                <span
                  className={`whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'
                    }`}
                >
                  <span className="text-sm font-medium">{getCurrentLanguageText()}</span>
                </span>
              </button>

              {isLanguageOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsLanguageOpen(false)}
                  />
                  <div 
                    className={`absolute ${isExpanded ? 'left-full top-0 ml-2' : 'left-full top-0 ml-2'} rounded-lg shadow-xl z-20 min-w-[160px]`}
                    style={{ 
                      backgroundColor: colors.background.secondary,
                      border: `1px solid ${colors.border.muted}`
                    }}
                  >
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        className="w-full flex items-center gap-3 px-4 py-3 text-left first:rounded-t-lg last:rounded-b-lg transition-colors"
                        style={{
                          backgroundColor: i18n.language === language.code ? colors.background.primary : 'transparent',
                          color: i18n.language === language.code ? colors.text.primary : colors.text.muted
                        }}
                        onMouseEnter={(e) => {
                          if (i18n.language !== language.code) {
                            e.currentTarget.style.backgroundColor = colors.background.primary;
                            e.currentTarget.style.color = colors.text.primary;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (i18n.language !== language.code) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = colors.text.muted;
                          }
                        }}
                      >
                        <span className="text-sm font-medium">{language.name.toUpperCase()}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </li>
          </ul>
        </nav>
      </aside>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        {/* Mobile Bottom Bar (collapsed) */}
        {!isExpanded && (
          <div 
            className="fixed bottom-0 left-0 right-0 z-50"
            style={{ 
              backgroundColor: colors.background.primary,
              borderTop: `1px solid ${colors.border.muted}`
            }}
          >
            <div className="flex items-center justify-between px-4 py-2">
              <button
                onClick={toggleSidebar}
                className="p-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-2"
              >
                <HiMenuAlt2 className="w-5 h-5" />
              </button>
              <div className="flex gap-1 flex-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex-1 flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition-all ${isActive
                          ? 'bg-slate-800 text-white'
                          : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-xs text-center truncate">{t(item.labelKey)}</span>
                    </Link>
                  );
                })}

                {/* Language Selector Mobile Bottom */}
                <div className="flex-1 relative">
                  <button
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className="w-full flex flex-col items-center gap-1 px-2 py-2 rounded-lg transition-all text-gray-300 hover:bg-slate-800 hover:text-white"
                  >
                    <MdLanguage className="w-5 h-5" />
                    <span className="text-xs text-center truncate">{currentLanguage.flag}</span>
                  </button>

                  {isLanguageOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsLanguageOpen(false)}
                      />
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-slate-700 rounded-lg shadow-lg border border-slate-600 z-20 min-w-[120px]">
                        {languages.map((language) => (
                          <button
                            key={language.code}
                            onClick={() => handleLanguageChange(language.code)}
                            className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-slate-600 first:rounded-t-lg last:rounded-b-lg transition-colors ${i18n.language === language.code
                                ? 'text-green-400 bg-slate-600'
                                : 'text-gray-300'
                              }`}
                          >
                            <span>{language.flag}</span>
                            <span className="text-xs">{language.name}</span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Full Screen Sidebar */}
        {isExpanded && (
          <div className="fixed top-16 left-0 right-0 bottom-0 bg-slate-900 z-50">
            <div className="flex justify-end p-4">
              <button
                onClick={toggleSidebar}
                className="p-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="px-6 mt-4">
              <ul className="space-y-4">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;

                  return (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={toggleSidebar}
                        className={`flex items-center gap-4 px-4 py-4 rounded-lg transition-all text-lg ${isActive
                            ? 'bg-slate-800 text-white'
                            : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                          }`}
                      >
                        <Icon className="w-6 h-6" />
                        <span>{t(item.labelKey)}</span>
                      </Link>
                    </li>
                  );
                })}

                {/* Language Selector Mobile Expanded */}
                <li>
                  <div className="px-4 py-4">
                    <div className="flex items-center gap-4 mb-3 text-gray-300">
                      <MdLanguage className="w-6 h-6" />
                      <span className="text-lg">{t('common.language')}</span>
                    </div>
                    <div className="ml-10 space-y-2">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => handleLanguageChange(language.code)}
                          className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${i18n.language === language.code
                              ? 'text-green-400 bg-slate-800'
                              : 'text-gray-300 hover:bg-slate-800 hover:text-white'
                            }`}
                        >
                          <span className="text-lg">{language.flag}</span>
                          <span>{language.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
