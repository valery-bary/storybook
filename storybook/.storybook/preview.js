/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'dark',
          value: '#16171d',
        },
        {
          name: 'light',
          value: '#ffffff',
        }
      ]
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;