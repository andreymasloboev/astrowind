import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Продукция',
      links: [
        {
          text: 'Рапсовое масло',
          href: getPermalink('/homes/oil'),
        },
        {
          text: 'Рапсовый жмых',
          href: getPermalink('/homes/gmuh'),
        },
      ],
    },
    {
      text: 'О нас',
      links: [
        {
          text: 'О нас',
          href: getPermalink('/about'),
        },
      ],
    },
    {
      text: 'Контакты',
      links: [
        {
          text: 'Контакты',
          href: getPermalink('/contact'),
        },
      ],
    },
  ],
};

export const footerData = {
  links: [
    {
    },
    {
    },
    {
    },
    {
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
  ],
  footNote: `
    Made by  Andruxa · All rights reserved.
  `,
};
