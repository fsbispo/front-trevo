// Sistema de Cores do Projeto
export const colors = {
  // Cores Base
  gunmetal: '#0A2E36',
  gunmetalDark: '#082329',
  springGreen: '#27FB6B',
  springGreenLight: '#73FC9F',
  emerald: '#14CC60',
  officeGreen: '#036D19',
  pigmentGreen: '#09A129',
  darkBlue: '#125463',
  slateBlue: '#166778',
  lightBlue: '#60CAE2',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#8C8C8C',
  grayLight: '#B3B3B3',
  grayMuted: '#9CA3AF',
  grayDark: '#6B7280',
  grayBorder: '#374151',
  
  background: {
    primary: '#0A2E36',
    secondary: '#036D19',
    darkBlue: '#125463',
    input: '#082329'
  },
  
  button: {
    primary: '#27FB6B',
    springGreen: '#73FC9F',
    emerald: '#14CC60',
    pigmentGreen: '#09A129',
    slateBlue: '#166778',
    darkBlue: '#125463',
    gray: '#8C8C8C',
  },
  
  text: {
    primary: '#FFFFFF',
    gunmetal: '#0A2E36',
    accent: '#27FB6B',
    muted: '#9CA3AF',
    highlight: '#60CAE2',
    slateBlue: '#166778',
    gray: '#B3B3B3',
  },
  
  border: {
    default: '#374151',
    accent: '#27FB6B',
    muted: '#6B7280',
    slateBlue: '#166778',
    emerald: '#14CC60',
    pigmentGreen: '#09A129',
    darkBlue: '#125463',
  }
};

export const playButtonColors = {
  gradient: {
    from: "#f0d87b",
    mid: "#ddab38",
    mid2: "#f8d579",
    to: "#c28b0a",
  },
  border: "#d6bf5c",
  text: "#231a04",
};

export const footerStyles = {
  textColor: {
    title: '#a0dfed', // --color-powderblue
    subTitle: "#1E8BA4", // --color-lightblue
    imagesText: '#1e8ba4', // Cor do texto das imagens (segundo andar)
    copyright: '#1e8ba4', // Cor do texto do copyright (terceiro andar)
  },
  textSize: {
    title: "16px",
    subTitle: "14px",
    imagesText: "10px", // Tamanho da fonte do segundo andar
    copyright: "12px", // Tamanho da fonte do terceiro andar
  },
  fonts: {
    imagesText: 'var(--font-noto-sans)', // Fonte Noto Sans para segundo andar
    copyright: 'var(--font-noto-sans)', // Fonte Noto Sans para terceiro andar
  },
  colors: {
    socialBackground: colors.gunmetal, // Background dos ícones sociais
    divider: '#0a2e36', // Cor dos divisores
    iconColor: '#ffffff', // Cor dos ícones
  },
};

export const cardStyles = {
  
  card: {
    background: '#125463', // --color-darkslategray-200
    headerBackground: '#166778', // topo
    bodyBackground: '#166778', // parte de baixo (igual topo)
    border: '#166778', // --color-darkslategray-100
    title: '#a0dfed', // --color-powderblue
    value: '#27fb6b', // springgreen
  },

  fonts: {
    title: 'var(--font-noto-sans)', // nome do jogo
    value: 'var(--font-familjen-grotesk)', // valor
  },
};

export const getColor = (colorPath: string): string => {
  const keys = colorPath.split('.');
  let result: any = colors;
  
  for (const key of keys) {
    result = result[key];
    if (result === undefined) {
      console.warn(`Cor não encontrada: ${colorPath}`);
      return colors.gunmetal;
    }
  }
  
  return result;
};

// Export default para facilitar imports
export default colors;