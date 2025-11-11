// Sistema de Espaçamentos e Dimensões do Projeto
export const spacing = {
  // Espaçamentos (padding, margin, gap)
  space: {
    0: '0',
    px: '1px',
    0.5: '0.125rem',  // 2px
    1: '0.25rem',     // 4px
    1.5: '0.375rem',  // 6px
    2: '0.5rem',      // 8px
    2.5: '0.625rem',  // 10px
    3: '0.75rem',     // 12px
    3.5: '0.875rem',  // 14px
    4: '1rem',        // 16px
    5: '1.25rem',     // 20px
    6: '1.5rem',      // 24px
    7: '1.75rem',     // 28px
    8: '2rem',        // 32px
    9: '2.25rem',     // 36px
    10: '2.5rem',     // 40px
    11: '2.75rem',    // 44px
    12: '3rem',       // 48px
    14: '3.5rem',     // 56px
    16: '4rem',       // 64px
    20: '5rem',       // 80px
    24: '6rem',       // 96px
    28: '7rem',       // 112px
    32: '8rem',       // 128px
  },

  // Larguras de Borda
  borderWidth: {
    0: '0',
    DEFAULT: '1px',
    2: '2px',
    3: '3px',
    4: '4px',
    6: '6px',
    8: '8px',
  },

  // Raios de Borda (border-radius)
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    DEFAULT: '0.25rem', // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px',   // Círculo completo
  },

  // Sombras
  boxShadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: '0 0 #0000',
  },

  // Larguras fixas
  width: {
    auto: 'auto',
    full: '100%',
    screen: '100vw',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
    sidebar: '16rem',     // 256px - sidebar expandida
    sidebarCollapsed: '4rem', // 64px - sidebar recolhida
    header: '4rem',       // 64px - altura do header
  },

  // Alturas fixas
  height: {
    auto: 'auto',
    full: '100%',
    screen: '100vh',
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
    header: '4rem',       // 64px - altura do header
    button: '2.5rem',     // 40px - altura padrão botão
    buttonLarge: '3rem',  // 48px - altura botão grande
    input: '2.5rem',      // 40px - altura input
  },

  // Z-index layers
  zIndex: {
    hide: '-1',
    auto: 'auto',
    base: '0',
    docked: '10',
    dropdown: '1000',
    sticky: '1100',
    banner: '1200',
    overlay: '1300',
    modal: '1400',
    popover: '1500',
    skipLink: '1600',
    toast: '1700',
    tooltip: '1800',
  },

  // Presets para componentes específicos
  presets: {
    // Cards
    card: {
      padding: '1.5rem',           // space.6
      borderRadius: '0.5rem',      // borderRadius.lg
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', // boxShadow.DEFAULT
      border: '1px solid',         // borderWidth.DEFAULT
    },
    cardCompact: {
      padding: '1rem',             // space.4
      borderRadius: '0.375rem',    // borderRadius.md
      boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)', // boxShadow.sm
      border: '1px solid',         // borderWidth.DEFAULT
    },

    // Botões
    button: {
      padding: '0.5rem 1rem',      // space.2 space.4
      borderRadius: '0.5rem',      // borderRadius.lg
      border: '2px solid transparent', // borderWidth.2
      height: '2.5rem',            // height.button
    },
    buttonLarge: {
      padding: '0.75rem 1.5rem',   // space.3 space.6
      borderRadius: '0.5rem',      // borderRadius.lg
      border: '2px solid transparent', // borderWidth.2
      height: '3rem',              // height.buttonLarge
    },

    // Inputs
    input: {
      padding: '0.5rem 0.75rem',   // space.2 space.3
      borderRadius: '0.375rem',    // borderRadius.md
      border: '1px solid',         // borderWidth.DEFAULT
      height: '2.5rem',            // height.input
    },

    // Layout
    container: {
      padding: '0 1rem',           // space.4
      margin: '0 auto',
      maxWidth: '1200px',
    },
    section: {
      padding: '3rem 0',           // space.12
      margin: '2rem 0',            // space.8
    },

    // Sidebar
    sidebar: {
      width: '16rem',              // width.sidebar
      padding: '0.75rem',          // space.3
      borderRadius: '0.5rem',      // borderRadius.lg
    },
    sidebarCollapsed: {
      width: '4rem',               // width.sidebarCollapsed
      padding: '0.75rem',          // space.3
    },

    // Header
    header: {
      height: '4rem',              // height.header
      padding: '0 1.5rem',         // space.6
      boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', // boxShadow.DEFAULT
    },
  },
};

// Função helper para acessar valores de espaçamento
export const getSpacing = (spacingPath: string): string => {
  const keys = spacingPath.split('.');
  let result: any = spacing;
  
  for (const key of keys) {
    result = result[key];
    if (result === undefined) {
      console.warn(`Valor de espaçamento não encontrado: ${spacingPath}`);
      return spacing.space[4]; // fallback para 1rem
    }
  }
  
  return result;
};

// Função helper para aplicar presets de espaçamento
export const applySpacingPreset = (preset: keyof typeof spacing.presets): React.CSSProperties => {
  const presetValues = spacing.presets[preset];
  const cssProperties: React.CSSProperties = {};
  
  Object.entries(presetValues).forEach(([key, value]) => {
    switch (key) {
      case 'padding':
        cssProperties.padding = value;
        break;
      case 'margin':
        cssProperties.margin = value;
        break;
      case 'borderRadius':
        cssProperties.borderRadius = value;
        break;
      case 'boxShadow':
        cssProperties.boxShadow = value;
        break;
      case 'border':
        cssProperties.border = value;
        break;
      case 'width':
        cssProperties.width = value;
        break;
      case 'height':
        cssProperties.height = value;
        break;
      case 'maxWidth':
        cssProperties.maxWidth = value;
        break;
      default:
        (cssProperties as any)[key] = value;
    }
  });
  
  return cssProperties;
};

// Export default para facilitar imports
export default spacing;