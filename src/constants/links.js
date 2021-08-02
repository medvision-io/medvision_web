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
    path: '/posts',
    text: 'blog',
  },
  {
    path: '/contact',
    text: 'contact',
  },
];

export const socialItems = [
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
