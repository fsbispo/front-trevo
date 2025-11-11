// Sistema de Tipografia do Projeto
export const fonts = {
  // Famílias de Fonte
  families: {
    primary: '"Familjen Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    secondary: '"Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", "Consolas", monospace',
    display: '"Familjen Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  // Tamanhos de Fonte (rem)
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
  },

  // Pesos de Fonte
  weights: {
    thin: '100',
    extraLight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },

  // Line Heights
  lineHeights: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },

  // Letter Spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },

  // Presets tipográficos para componentes específicos
  presets: {
    // Headers
    h1: {
      fontFamily: '"Familjen Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontSize: '3rem', // 48px
      fontWeight: '700',
      lineHeight: '1.25',
      letterSpacing: '-0.025em',
    },
    h2: {
      fontFamily: '"Familjen Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontSize: '2.25rem', // 36px
      fontWeight: '600',
      lineHeight: '1.25',
      letterSpacing: '-0.025em',
    },
    h3: {
      fontFamily: '"Familjen Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      fontSize: '1.875rem', // 30px
      fontWeight: '600',
      lineHeight: '1.375',
    },
    h4: {
      fontFamily: '"Familjen Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '1.5rem', // 24px
      fontWeight: '600',
      lineHeight: '1.375',
    },

    // Corpo do texto
    body: {
      fontFamily: '"Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '1rem', // 16px
      fontWeight: '400',
      lineHeight: '1.5',
    },
    bodyLarge: {
      fontFamily: '"Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '1.125rem', // 18px
      fontWeight: '400',
      lineHeight: '1.625',
    },
    bodySmall: {
      fontFamily: '"Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '0.875rem', // 14px
      fontWeight: '400',
      lineHeight: '1.5',
    },

    // Botões
    button: {
      fontFamily: '"Familjen Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '0.875rem', // 14px
      fontWeight: '500',
      lineHeight: '1.25',
      letterSpacing: '0.025em',
    },
    buttonLarge: {
      fontFamily: '"Familjen Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '1rem', // 16px
      fontWeight: '500',
      lineHeight: '1.25',
      letterSpacing: '0.025em',
    },

    // Labels e formulários
    label: {
      fontFamily: '"Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '0.875rem', // 14px
      fontWeight: '500',
      lineHeight: '1.25',
    },
    input: {
      fontFamily: '"Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '1rem', // 16px
      fontWeight: '400',
      lineHeight: '1.5',
    },

    // Navegação
    nav: {
      fontFamily: '"Familjen Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '0.875rem', // 14px
      fontWeight: '500',
      lineHeight: '1.25',
    },
    navActive: {
      fontFamily: '"Familjen Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '0.875rem', // 14px
      fontWeight: '600',
      lineHeight: '1.25',
    },

    // Código
    code: {
      fontFamily: '"JetBrains Mono", "Fira Code", "Consolas", monospace',
      fontSize: '0.875rem', // 14px
      fontWeight: '400',
      lineHeight: '1.5',
    },
    codeInline: {
      fontFamily: '"JetBrains Mono", "Fira Code", "Consolas", monospace',
      fontSize: '0.875rem', // 14px
      fontWeight: '400',
      lineHeight: '1.25',
    },

    // Captions e textos pequenos
    caption: {
      fontFamily: '"Noto Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '0.75rem', // 12px
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0.025em',
    },
    overline: {
      fontFamily: '"Familjen Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: '0.75rem', // 12px
      fontWeight: '600',
      lineHeight: '1.25',
      letterSpacing: '0.1em',
      textTransform: 'uppercase' as const,
    },
  },
};

// Função helper para aplicar presets de tipografia
export const applyFontPreset = (preset: keyof typeof fonts.presets): React.CSSProperties => {
  return fonts.presets[preset] as React.CSSProperties;
};

// Função helper para acessar propriedades de fonte
export const getFont = (fontPath: string): string => {
  const keys = fontPath.split('.');
  let result: any = fonts;
  
  for (const key of keys) {
    result = result[key];
    if (result === undefined) {
      console.warn(`Propriedade de fonte não encontrada: ${fontPath}`);
      return fonts.families.primary;
    }
  }
  
  return result;
};

// Export default para facilitar imports
export default fonts;