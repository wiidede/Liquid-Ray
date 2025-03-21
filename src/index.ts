import { promises as fs } from 'fs'
import getTheme from './theme'

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeFile(
      './themes/liquid-ray-theme.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Liquid Ray',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/liquid-ray-light.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Liquid Ray Light',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/liquid-ray-dark-pink.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Liquid Ray Pink',
        primaryColor: 'Pink',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/liquid-ray-light-pink.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Liquid Ray Light Pink',
        primaryColor: 'Pink',
      }), null, 2)}\n`,
    ),
    // fs.writeFile(
    //   './themes/vitesse-black.json',
    //   `${JSON.stringify(getTheme({
    //     style: 'dark',
    //     name: 'Vitesse Black',
    //     black: true,
    //   }), null, 2)}\n`,
    // ),
    // fs.writeFile(
    //   './themes/vitesse-light-soft.json',
    //   `${JSON.stringify(getTheme({
    //     style: 'light',
    //     name: 'Vitesse Light Soft',
    //     soft: true,
    //   }), null, 2)}\n`,
    // ),
    // fs.writeFile(
    //   './themes/vitesse-dark-soft.json',
    //   `${JSON.stringify(getTheme({
    //     style: 'dark',
    //     name: 'Vitesse Dark Soft',
    //     soft: true,
    //   }), null, 2)}\n`,
    // ),
  ]))
  .catch(() => process.exit(1))
