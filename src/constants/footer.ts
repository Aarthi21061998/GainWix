type ListItem = {
  id: number;
  label: string;
  path?: string; // Only path or href will be used
  href?: string; // Only path or href will be used
};

type FooterLink = {
  id: number;
  label: string;
  lists: ListItem[]; // Array of ListItem
};


export const FOOTER_LINKS: FooterLink[] = [
  {
    id: 1,
    label: 'Product',
    lists: [
      {
        id: 1,
        label: 'Strategy AI',
        path: "/strategy",
      },
      {
        id: 2,
        label: 'Segmentation AI',
      path: "/segment",
      },
      // {
      //   id: 3,
      //   label: 'Scalability AI',
      //   href: '',
      // },
    ],
  },
  {
    id: 2,
    label: 'Industries',
    lists: [
      {
        id: 1,
        label: 'E-Commerce',
        path: "/ecommerce",

      },
      {
        id: 2,
        label: 'Retail',
              path: "/retail",
      },
      {
        id: 3,
        label: 'Education',
        path: "/education",

      },
      {
        id: 4,
        label: 'Real Estate',
        path: "/real_estate",

      },
      {
        id: 5,
        label: 'Travel',
        path: "/travel",

      },
    ],
  },
  {
    id: 3,
    label: 'Quick Links',
    lists: [
      {
        id: 1,
        label: 'Pricing',
        path:"/pricing"
      },
      {
        id: 2,
        label: 'About Us',
        href: '',
      },
      {
        id: 3,
        label: 'Terms & Conditions',
        href: '',
      },
      {
        id: 3,
        label: 'Privacy Policy',
        href: '',
      },
    ],
  },
];
