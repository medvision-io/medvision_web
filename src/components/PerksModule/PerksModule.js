import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PerksModuleStyles } from './PerksModuleStyles';
import Perk from './Perk';

const PerksModule = ({ perks }) => {
  return (
    <PerksModuleStyles>
      <StaticImage
        className="perks__image--bg"
        src="../../../images/abstract-building.jpg"
        alt="perks background"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container">
        {perks.map(perk => (
          <Perk title={perk.title} content={perk.description} key={perk.title}>
            {perk.image && (
              <img
                src={perk.image}
                alt={`Perk - ${perk.title}`}
                placeholder="blurred"
                className="perks__image--image"
              />
            )}
          </Perk>
        ))}
      </div>
    </PerksModuleStyles>
  );
};

export default PerksModule;
