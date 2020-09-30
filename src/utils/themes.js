import { bitterSweet, black, gray, oxfordBlue, grey, white } from "./colors"


export const defaultTheme = {
  primaryColor: bitterSweet,
  backgroundColor: `${white}`,
  navLink: 'rgba(0,0,0,0.6)',
  navLinkHover: 'rgba(0,0,0,1.0)',
  menuText: `${black}`,
  socialLink: `${black}`,
  primaryFont: `${black}`,
  secondaryFont: `${gray}`,
  borderColor: 'rgba(0,0,0,0.1)',
  fadedFooterText: `${grey}`,
  blogExcerpt: '#00000099',
  blogLink: '#00000099',
  blogLinkHover: '#000000',
  blogSubHead: `${gray}`,
  tagColor: `${black}`,
  blogItemBorder: 'rgba(0,0,0,0.09)',
  inlineBlogLink : 'rgba(0,0,0,1.0)',
  inlineBlogLinkHover: 'rgba(0,0,0,1.0)'
}

export const darkTheme = {
  primaryColor: bitterSweet,
  backgroundColor: oxfordBlue,
  navLink: 'rgba(255,255,255,0.6)',
  navLinkHover: 'rgba(255,255,255,1.0)',
  menuText: `${white}`,
  socialLink: `${white}`,
  primaryFont: `${white}`,
  secondaryFont: `#FFFFFF90`,
  borderColor: 'rgba(255,255,255,0.1)',
  fadedFooterText: 'rgba(255,255,255,0.7)',
  blogExcerpt: '#ffffff',
  blogLink: 'rgba(255,255,255,0.8)',
  blogLinkHover: 'rgba(255,255,255,1.0)',
  blogSubHead: `rgba(255,255,255,0.8)`,
  tagColor: `${white}`,
  blogItemBorder: 'rgba(255,255,255,0.6)',
  inlineBlogLink : 'rgba(255,255,255,1.0)',
  inlineBlogLinkHover: 'rgba(255,255,255,1.0)'
}