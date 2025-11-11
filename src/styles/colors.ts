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
    pigmentGreen: '#09A129'
  }
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