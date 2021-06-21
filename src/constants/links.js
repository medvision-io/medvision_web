import React from 'react';
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
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
    sizeKey: 'linkedin',
    icon: <Linkedin />,
  },
];
