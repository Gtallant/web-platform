export default {
    colors: {
        primary: '#6200EE',
        primary_variant: '#3700B3',
        secondary: '#03DAC6',
        secondary_variant: '#018786',
        background: '#FAFAFA',
        surface: '#FFFFFF',
        shadow: 'rgba(0, 0, 0, .11)',
        error: '#B00020',
        on_primary: '#ffffff',
        on_secondary: '#000000',
        on_background: '#000000',
        on_surface: '#000000',
        on_error: '#ffffff',
    },
    breakpoints: [
      {
        min: 0,
        max: 599,
        numCol: 4,
        marginSize: 16,
        gutterSize: 16,
        maxContentWidth: 599,
        appBar: {
          height: 40,
          content: 30,
        },
      },
      {
        min: 600,
        max: 719,
        numCol: 8,
        marginSize: 16,
        gutterSize: 16,
        maxContentWidth: 719,
        appBar: {
          height: 60,
          content: 50,
        },
      },
      {
        min: 720,
        max: 839,
        numCol: 8,
        marginSize: 24,
        gutterSize: 24,
        maxContentWidth: 839,
        appBar: {
          height: 60,
          content: 45,
        },
      },
      {
        min: 840,
        max: 1440,
        numCol: 8,
        marginSize: 24,
        gutterSize: 24,
        maxContentWidth: 1440,
        appBar: {
          height: 60,
          content: 40,
        },
      },
    ],
    cardProperties: {
      corner: 4,
      padding: gutterSize => Math.max(gutterSize * .75, 8),
    },
    inputProperties: {
      padding: {
        top: 18,
        bottom: 12,
        sides: 12,
      },
      fontSize: 16,
    },
    animationDefaults: {
      duration: .2,
    }
};