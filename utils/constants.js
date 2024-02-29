import { theme } from "../theme";

export const navLinks = [
  {name: 'home', url: '/'},
  {name: 'bio', url: '/bio'},
  {name: 'shows', url: '/shows'},
  {name: 'press', url: '/press'},
  {name: 'media', url: '/media'},
  {name: 'videos', url: '/videos'},
  {name: 'albums', url: '/albums'},
  {name: 'store', url: 'https://pistils.bandcamp.com/merch'},
  {name: 'links', url: '/links'},
  {name: 'blog', url: '/blog'},
  {name: 'contact', url: '/contact'},
  // {name: 'media-kit', url: '/#'},
  {name: 'instagram', url: 'https://www.instagram.com/euroraj/'},
  {name: 'facebook', url: 'https://www.facebook.com/rajivjayaweera'},
  {name: 'youtube', url: 'https://youtube.com/user/euroraj/videos'},
];

export const socialLinks = [
  {
    name: 'instagram',
    url: 'https://www.instagram.com/euroraj/',
    icon: '/icons/instagram.png'
  },
  {
    name: 'facebook',
    url: 'https://www.facebook.com/rajivjayaweera',
    icon: '/icons/facebook.png'
  },
  {
    name: 'youtube',
    url: 'https://youtube.com/user/euroraj/videos',
    icon: '/icons/youtube.png'
  },
];

export const Z_INDEX = {
  banner: -1,
  header: 1,
  modal: 2,
  mobileNav: 3,
}
export const BANNER_QUOTE = {
  home: 6,
  bio: 3,
  shows: 0,
  press: 4,
  albums: 7,
  links: 8,
  contact: 9,
  blog: 5,
  videos: 2,
  photos: 1,
}

export const FEATURED_ALBUM = 'Pistils'; // Pistils (second)

export const MOBILE_BREAKPOINT = parseInt(theme.breakpoints[0]);


