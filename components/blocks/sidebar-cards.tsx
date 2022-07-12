import React, { useState } from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Content } from "../content";
import { Section } from "../section";
import { Buttons } from "../buttons";
import { CodeBlock, dracula } from "react-code-blocks";
import { BlockList } from "net";

const Card = ({ block, index, cardstyle, isActive, parentField = ""  }) => {
  const activeClass = !isActive ? 'hidden' : ''
  const wrapClasses = block.link && block.buttonLabel ? 'pb-20' : ''

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
      <div className="max-w-desktop-full mx-auto px-20 pt-20 pb-10 sm:px-10">
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
        <div className="flex gap-20">
          {data.cards && (
            <>
              <div className="w-60">
                {data.imageSrc && (
                  <img
                    className="mb-10"
                    alt={data.headline}
                    src={data.imageSrc}
                    data-tinafield={`${parentField}.image`}
                  />
                )}
                <ul>
                { data.cards.map(function (block, index) {
                  const backgroundClasses = index === activeCard ? 'bg-primary' : 'bg-gray-dark'
                  return <li key={index} className="font-2 uppercase text-sm">
                    <a
                      className={`block text-white p-2 cursor-pointer hover:bg-primary ${backgroundClasses}`}
                      onClick={ () => setActiveCard(index) }
                    >
                      {block.headline}
                    </a>
                  </li>
                })}
                </ul>
              </div>
              <div className="sidebar-cards grid grid-cols-1 gap-16 border w-full flex-1">
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
