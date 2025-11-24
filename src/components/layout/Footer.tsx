
import React from "react";
import { useTranslation } from "react-i18next";
import logoDefault from "../../assets/logo-simplificado.svg";
import img1Default from "../../assets/principal.png";
import { FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import FooterColumn from "../footer/FooterColumn";
import { useSidebar } from "@/contexts/SidebarContext";
import { footerStyles } from "@/styles/styles";

type SocialIcon = { icon: React.ReactElement; href: string };

interface FooterProps {
  logo?: string;
  socialIcons?: SocialIcon[];
  raspadinhaTitle?: string;
  raspadinhaOptions?: string[];
  cassinoTitle?: string;
  cassinoOptions?: string[];
  suporteTitle?: string;
  suporteOptions?: string[];
  images?: string[];
  imagesText?: string;
  copyright?: string;
  dividerColor?: string;
}

const defaultProps: FooterProps = {
  logo: logoDefault,
  socialIcons: [
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaTelegram />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
  ],
  raspadinhaTitle: "RASPADINHA",
  raspadinhaOptions: ["Opção 1"],
  cassinoTitle: "CASSINO",
  cassinoOptions: ["Cassino", "Cassino ao vivo"],
  suporteTitle: "SUPORTE",
  suporteOptions: [
    "Central de Ajuda",
    "Termos e condições",
    "Política de Privacidade",
    "Política de Bônus",
    "Política de PLD/CFTP",
    "Jogo Responsável",
  ],
  images: [img1Default, img1Default, img1Default],
  imagesText: "Texto centralizado abaixo das imagens",
  copyright:
    "2025 Trevo Club LTDA, inscrita no CNPJ: 00.000.000/0000-00. Trevo Club é autorizada pela Portaria SPA/MF No. 2.096, de 30 de Dezembro de 2024",
  dividerColor: footerStyles.colors.divider,
};

const Footer: React.FC<FooterProps> = (props) => {
  const { t } = useTranslation();
  const { isExpanded } = useSidebar();
  
  const {
    logo,
    socialIcons,
    images,
    dividerColor,
  } = { ...defaultProps, ...props };

  const raspadinhaTitle = t("footer.raspadinha.title");
  const raspadinhaItems = t("footer.raspadinha.items", { returnObjects: true }) as string[];
  const cassinoTitle = t("footer.cassino.title");
  const cassinoItems = t("footer.cassino.items", { returnObjects: true }) as string[];
  const suporteTitle = t("footer.suporte.title");
  const suporteItems = t("footer.suporte.items", { returnObjects: true }) as string[];
  const imagesText = t("footer.imagesText");
  const copyright = t("footer.copyright");

  return (
    <>
    {/* Custom divider bar at the top */}
    <div className="w-full h-[1px] my-6" style={{ background: dividerColor }} />
    <footer 
      className={` text-white p-0 transition-all duration-300 pb-20 md:pb-0 ${
        isExpanded ? 'md:ml-64' : 'md:ml-16'
      }`}
    >
      {/* Primeiro Andar */}
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-8 pt-8 max-w-[1660px] mx-auto px-4">
        {/* Coluna 1 */}
        <div className="flex flex-col gap-4">
          <img src={logo} alt="Logo" className="w-[40px] mb-3" />
          <div className="relative rounded-[12px] w-full flex items-start p-1.5 box-border gap-1.5" style={{ backgroundColor: footerStyles.colors.socialBackground }}>
            {socialIcons?.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="relative rounded-lg w-full flex items-center justify-center p-2 box-border"
              >
                {React.cloneElement(s.icon, { color: footerStyles.colors.iconColor, size: 22, className: "w-[22px] relative max-h-full" })}
              </a>
            ))}
          </div>
        </div>
        
        <FooterColumn title={raspadinhaTitle} items={raspadinhaItems} />
        <FooterColumn title={cassinoTitle} items={cassinoItems} />
        <FooterColumn title={suporteTitle} items={suporteItems} />
      </div>

      {/* Segundo Andar */}
      <div className="w-full h-[1px] my-6" style={{ background: dividerColor }} />
      <div className="flex flex-col gap-3 px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 sm:justify-center sm:items-center">
          {images?.map((img, i) => (
            <img key={i} src={img} alt={`img${i + 1}`} className="w-[180px] rounded-lg" />
          ))}
        </div>
        <div 
          className="sm:text-center opacity-80 mt-2"
          style={{ 
            color: footerStyles.textColor.imagesText, 
            fontSize: footerStyles.textSize.imagesText,
            fontFamily: footerStyles.fonts.imagesText
          }}
        >
          {imagesText}
        </div>
      </div>

      {/* Terceiro Andar */}
      <div className="w-full h-[1px] my-6" style={{ background: dividerColor }} />
      <div 
        className="sm:text-center opacity-70 pb-4 px-4"
        style={{ 
          color: footerStyles.textColor.copyright, 
          fontSize: footerStyles.textSize.copyright,
          fontFamily: footerStyles.fonts.copyright
        }}
      >
        {copyright}
      </div>
    </footer>
    </>
  );
};

export default Footer;
