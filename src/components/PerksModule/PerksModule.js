import React, { useContext, useRef, useCallback, useEffect } from "react"
import { StaticImage } from 'gatsby-plugin-image';
import { useInView } from 'react-intersection-observer';
import { PerksModuleStyles } from './PerksModuleStyles';
import Perk from './Perk';
import SiteContext from "../SiteContext"

const PerksModule = ({ perks }) => {
  const [, , , setData] = useContext(SiteContext);
  const ref = useRef();
  const [inViewRef, inView] = useInView();

  const setRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef],
  );

  useEffect(() => {
    if (ref.current == null || !inView) {
      setData(currData => ({...currData, darkElPos: null, darkElHeight: null}))
    } else {
      setData(currData => ({...currData, darkElPos: ref.current.getBoundingClientRect().top + window.scrollY, darkElHeight: ref.current.scrollHeight}))
    }
  }, [inView, ref, setData])

  return (
    <PerksModuleStyles>
      <StaticImage
        className="perks__image--bg"
        src="../../../images/abstract-building.jpg"
        alt="perks background"
        layout="constrained"
        placeholder="blurred"
      />
      <div ref={setRefs} className="perks__image--overlay"></div>
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
