import React, { useState } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Content } from "../content";
import { Section } from "../section";
import { Buttons } from "../buttons";
import { CodeBlock, dracula } from "react-code-blocks";
import { BlockList } from "net";

const Card = ({ block, index, cardstyle, isActive, parentField = ""  }) => {
  const activeClass = !isActive ? 'hidden sm:block' : ''
  const wrapClasses = block.link && block.buttonLabel ? '' : ''

  return (
    <div className={`flex flex-col relative sm:mb-6 ${activeClass}`} data-tinafield={`${parentField}.${index}`}>
      <div
        className={` ${wrapClasses} relative flex-1 text-left border-box ${cardstyle?.padding}`}
      >
        <div className={`${cardstyle?.fillStyles} absolute inset-0 -z-1`} />
        {block.label && (
          <p className={cardstyle?.labelStyles} data-tinafield={`${parentField}.${index}.label`}>{block.label}</p>
        )}
        {block.headline && (
          <h3 className={cardstyle?.headlineStyles} data-tinafield={`${parentField}.${index}.headline`}>{block.headline}</h3>
        )}
        {block.subhead && (
          <h4 className={cardstyle?.subheadStyles} data-tinafield={`${parentField}.${index}.subhead`}>{block.subhead}</h4>
        )}
        {block.text && (
          <div className={`markdown ${cardstyle?.textStyles}`} data-tinafield={`${parentField}.${index}.text`}>
            <TinaMarkdown content={block.text} />
          </div>
        )}
        {block.code && (
          <CodeBlock text={block.code} language={block.language || "javascript"} theme={dracula} showLineNumbers={false} />
        )}
        {block.link && block.buttonLabel && (
          <Buttons buttons={[{
            link: block.link,
            label: block.buttonLabel,
            type: cardstyle?.buttonType
          }]} className="absolute bottom-4"  data-tinafield={`${parentField}.${index}.link`} />
        )}

      </div>
      {block.link && !block.buttonLabel && (
        <a href={block.link} className="absolute inset-0 z-20" data-tinafield={`${parentField}.${index}.link.0`} />
      )}
    </div>
  );
};

export const SidebarCards = ({ data, parentField = "" }) => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <Section className="" background={data.background} navigationLabel={data.navigationLabel}>
      <div className="max-w-desktop-full mx-auto px-20 pt-4 pb-10 sm:px-10 sm:pb-0">
        <Content
          label = {data.label}
          headline = {data.headline}
          subhead = {data.subhead}
          body = {data.body}
          buttons = {data.buttons}
          labelStyles = {data.style?.labelStyles}
          headlineStyles = {data.style?.headlineStyles}
          subheadStyles = {data.style?.subheadStyles}
          textStyles = {data.style?.textStyles}
          alignment = {data.style?.alignment}
          order = {data.style?.contentOrder}
          width = "w-full"
          parentField={parentField}
        />
        <div className="flex gap-12 sm:block">
          {data.cards && (
            <>
              <div className="w-1/3 sm:w-full sm:mb-16">
                {data.imageSrc && (
                  <div className={`relative w-full bg-${data.style?.navColor}`} style={{paddingTop: '80%'}}>
                    <svg className="absolute inset-0 mix-blend-overlay opacity-40" viewBox="0 0 420 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M420 0H0V336H420V0ZM96 233.501V102.499L209.502 37L323 102.499V233.501L209.502 299L96 233.501Z" fill="white"/>
                    </svg>
                    <img
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 p-4"
                      alt={data.headline}
                      src={data.imageSrc}
                      data-tinafield={`${parentField}.image`}
                    />
                  </div>
                )}
                <ul className="sm:hidden shadow-lg">
                { data.cards.map(function (block, index) {
                  const backgroundClasses = index === activeCard ? `text-white bg-${data.style?.navColor}` : 'bg-white'
                  return <li key={index} className="font-2 text-md">
                    <a
                      className={`block text-sm font-1 font-bold text-black px-4 py-3 cursor-pointer hover:text-white hover:bg-${data.style?.navColor} ${backgroundClasses}`}
                      onClick={ () => setActiveCard(index) }
                    >
                      {block.headline}
                    </a>
                  </li>
                })}
                </ul>
              </div>
              <div className="sidebar-cards grid grid-cols-1 gap-16 w-full flex-1 sm:gap-0">
                { data.cards.map(function (block, index) {
                  return <Card
                    block={block}
                    cardstyle={data.cardStyle}
                    index={index}
                    key={index}
                    isActive={activeCard === index}
                    parentField={`${parentField}.cards`}
                  />
                })}
              </div>
            </>
            
          )}
        </div>
      </div>
    </Section>
  );
};
