import React from 'react';
import { MediaLogosStyles } from './MediaLogosStyles';

const LogoItem = ({ name, url, variant = 'light' }) => {
  return (
    <div className={'logos-item' + (variant === 'dark' ? ' logos-item__dark' : ' ')}>
      <div className={"logos-item-overlay"}>
        <span>{name}</span>
        <a
          href={url}
          target="_blank"
          rel="nofollow noreferrer noopener"
          aria-label={`download logo ${name}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1200 1200"><path fill="currentColor" d="M0 1037.516h1200V1200H0v-162.484zM820.785 0h-441.57v496.632H103.233L600 959.265l496.768-462.633H820.785V0z"/></svg>
        </a>
      </div>
      <img src={url} alt={`Logo ${name}`} loading="lazy"/>
    </div>
  );
};

const MediaLogos = ({ children }) => {
  return (
    <MediaLogosStyles>
      {children}
      <div className={'logos'}>
        <h3>Default logo</h3>
        <LogoItem name={"Basic"} url={"/media/zhiva.png"} />
        <LogoItem name={"Square"} url={"/media/zhiva_sq.png"} />
        <LogoItem name={"Width text (rec)"} url={"/media/zhiva_rec_text.png"} />
        <LogoItem name={"With text (sq)"} url={"/media/zhiva_sq_text.png"} />
      </div>
      <div className={'logos'}>
        <h3>Bright logo</h3>
        <LogoItem name={"Basic"} url={"/media/zhiva_light.png"} />
        <LogoItem name={"Square"} url={"/media/zhiva_light_sq.png"} />
        <LogoItem name={"Width text (rec)"} url={"/media/zhiva_light_rec_text.png"} />
        <LogoItem name={"With text (sq)"} url={"/media/zhiva_light_sq_text.png"} />
      </div>
      <div className={'logos'}>
        <h3>Bright logo on black background</h3>
        <LogoItem variant={"dark"} name={"Basic"} url={"/media/zhiva_light_black_bg.svg"} />
        <LogoItem variant={"dark"}  name={"Square"} url={"/media/zhiva_light_sq_black_bg.png"} />
        <LogoItem variant={"dark"}  name={"Width text (rec)"} url={"/media/zhiva_light_rec_text_black_bg.png"} />
        <LogoItem variant={"dark"}  name={"With text (sq)"} url={"/media/zhiva_light_sq_text_black_bg.png"} />
      </div>
    </MediaLogosStyles>
  );
};

export default MediaLogos;
