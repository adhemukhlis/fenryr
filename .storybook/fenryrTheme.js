import { create } from '@storybook/theming';

export default create({
  // brandTitle: 'Fenryr Storybook',
  brandTitle: `<span style="display:flex;gap:20px;align-items:center;"><img src="../src/assets/fenrir.png" width="60px" height="60px"/><h1 style="font-weight:800;">Fenryr</h1></span>`,
  // brandImage: '../src/assets/fenrir.png',
  brandTarget: '_self',
});