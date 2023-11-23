import React from 'react';
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
  FaGithub as Github,
  FaHome as Website,
  FaEnvelope as Email,
  FaMedium as Medium,
  FaSnapchatSquare as Snapchat,
  FaSkype as Skype,
  FaTwitch as Twitch,
  FaWhatsappSquare as Whatsapp,
  FaYoutubeSquare as Youtube,
} from 'react-icons/fa';

export const menuItems = [
  {
    path: '/',
    text: 'home',
  },
  {
    path: '/products',
    text: 'products',
  },
  {
    path: 'https://alpha.zhiva.org',
    text: 'demo',
  },
  {
    path: 'https://docs.zhiva.org/latest',
    text: 'docs',
  },
  {
    path: '/contact',
    text: 'contact',
  },
  {
    path: '/media',
    text: 'For Media',
  },
];

export const socialItems = [
  {
    sizeKey: 'demo',
    icon: <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" stroke="none" fill="currentColor"><path d="M17 18H7V6h10v1h2V3c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v1zm3.38-8.38l.4.87c.09.2.37.2.46 0l.4-.87l.87-.4c.2-.09.2-.37 0-.46l-.87-.4l-.4-.87c-.09-.2-.37-.2-.46 0l-.4.87l-.87.4c-.2.09-.2.37 0 .46l.87.4z"/><path  d="m15.54 9l-.79 1.75l-1.75.79a.5.5 0 0 0 0 .91l1.75.79l.79 1.76a.5.5 0 0 0 .91 0l.79-1.75l1.76-.79a.5.5 0 0 0 0-.91l-1.75-.79L16.46 9a.508.508 0 0 0-.92 0zm5.23 4.5l-.4.87l-.87.4c-.2.09-.2.37 0 .46l.87.4l.4.87c.09.2.37.2.46 0l.4-.87l.87-.4c.2-.09.2-.37 0-.46l-.87-.4l-.4-.87a.257.257 0 0 0-.46 0z"/></svg>,
  },
  {
    sizeKey: 'facebook',
    icon: <Facebook />,
  },
  {
    sizeKey: 'twitter',
    icon: <Twitter />,
  },
  {
    sizeKey: 'instagram',
    icon: <Instagram />,
  },
  {
    sizeKey: 'github',
    icon: <Github />,
  },
  {
    sizeKey: 'linkedin',
    icon: <Linkedin />,
  },
  {
    sizeKey: 'www',
    icon: <Website />,
  },
  {
    sizeKey: 'email',
    icon: <Email />,
  },
  {
    sizeKey: 'medium',
    icon: <Medium />,
  },
  {
    sizeKey: 'snapchat',
    icon: <Snapchat />,
  },
  {
    sizeKey: 'skype',
    icon: <Skype />,
  },
  {
    sizeKey: 'twitch',
    icon: <Twitch />,
  },
  {
    sizeKey: 'whatsapp',
    icon: <Whatsapp />,
  },
  {
    sizeKey: 'youtube',
    icon: <Youtube />,
  },
];
