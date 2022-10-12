import * as React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Section } from "../section";

const IconX = () => {
  return (
    <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_403_2610)">
        <path d="M21.5761 4.95127C22.2235 4.15439 22.1204 2.9708 21.3412 2.30869C20.562 1.64658 19.4048 1.75205 18.7574 2.54892L11.0001 12.0704L3.24278 2.54892C2.59538 1.75205 1.43809 1.64658 0.658926 2.30869C-0.120241 2.9708 -0.223366 4.15439 0.42403 4.95127L8.61101 15.0001L0.42403 25.0489C-0.223366 25.8458 -0.120241 27.0294 0.658926 27.6915C1.43809 28.3536 2.59538 28.2481 3.24278 27.4513L11.0001 17.9298L18.7574 27.4513C19.4048 28.2481 20.562 28.3536 21.3412 27.6915C22.1204 27.0294 22.2235 25.8458 21.5761 25.0489L13.3891 15.0001L21.5761 4.95127Z" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_403_2610">
          <rect width="22" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
const IconClock = () => {
  return (
    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.1406 6.79688C13.1406 6.04355 13.7467 5.4375 14.5 5.4375C15.2533 5.4375 15.8594 6.04355 15.8594 6.79688V13.775L20.6908 16.9922C21.3139 17.4113 21.4838 18.2553 21.0193 18.8783C20.6512 19.5014 19.8072 19.6713 19.1842 19.2068L13.7467 15.5818C13.3672 15.3779 13.1406 14.9531 13.1406 14.449V6.79688ZM14.5 0C22.509 0 29 6.49102 29 14.5C29 22.509 22.509 29 14.5 29C6.49102 29 0 22.509 0 14.5C0 6.49102 6.49102 0 14.5 0ZM2.71875 14.5C2.71875 21.008 7.99199 26.2812 14.5 26.2812C21.008 26.2812 26.2812 21.008 26.2812 14.5C26.2812 7.99199 21.008 2.71875 14.5 2.71875C7.99199 2.71875 2.71875 7.99199 2.71875 14.5Z" fill="black" />
    </svg>
  )
}
const IconCheck = () => {
  return (
    <svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26.5742 0.549316C27.3066 1.28174 27.3066 2.47119 26.5742 3.20361L11.5742 18.2036C10.8418 18.936 9.65234 18.936 8.91992 18.2036L1.41992 10.7036C0.6875 9.97119 0.6875 8.78174 1.41992 8.04932C2.15234 7.3169 3.3418 7.3169 4.07422 8.04932L10.25 14.2192L23.9258 0.549316C24.6582 -0.183105 25.8477 -0.183105 26.5801 0.549316H26.5742Z" fill="black" />
    </svg>
  )
}
const IconNotStarted = () => {
  return (
    <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M26 22H0V2.54289C0 1.1413 1.14617 0 2.55375 0H23.4412C24.8488 0 25.995 1.1413 25.995 2.54289V22H26ZM2.01083 19.9977H23.9892V2.54289C23.9892 2.24255 23.7428 2.00228 23.4462 2.00228H2.55375C2.25213 2.00228 2.01083 2.24755 2.01083 2.54289V19.9977Z" fill="black" />
      <path d="M24.497 4.90576H1.50317V6.90804H24.497V4.90576Z" fill="black" />
      <path d="M22.6821 8.91504H6.6709V10.9173H22.6821V8.91504Z" fill="black" />
      <path d="M5.17789 8.91504H3.31787V10.9173H5.17789V8.91504Z" fill="black" />
      <path d="M5.17789 16.2734H3.31787V18.2757H5.17789V16.2734Z" fill="black" />
      <path d="M5.17789 12.5942H3.31787V14.5965H5.17789V12.5942Z" fill="black" />
      <path d="M21.3952 12.5942H6.6709V14.5965H21.3952V12.5942Z" fill="black" />
      <path d="M18.8213 16.2734H6.6709V18.2757H18.8213V16.2734Z" fill="black" />
    </svg>
  )
}

const Column = ({ icon, label, content }) => {
  return (
    <div>
      <div className="relative mb-5">
        <div className="absolute -left-0 top-1/2 transform -translate-y-1/2">
          {icon}
        </div>
        <h4 className="pl-10">{label}</h4>
      </div>
      <TinaMarkdown content={content} />
    </div>
  )
}

export const Support = ({ data, parentField = "" }) => {
  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <div className={`max-w-desktop-full mx-auto px-20 sm:px-5`}>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-8 p-8 rounded-lg shadow-lg bg-white font-2 text-base markdown">
          <div>
            <h3 className="font-bold text-xl mb-6">Support</h3>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-8">
              {data.possible?.children?.length > 0 &&
                <Column icon={<IconCheck />} label="Possible" content={data.possible} />
              }
              {data.notPossible?.children?.length > 0 &&
                <Column icon={<IconX />} label="Not Possible" content={data.notPossible} />
              }
              {data.workInProgress?.children?.length > 0 &&
                <Column icon={<IconClock />} label="Work In Progress" content={data.workInProgress} />
              }
              {data.workNotStarted?.children?.length > 0 &&
                <Column icon={<IconNotStarted />} label="Work Not Started" content={data.workNotStarted} />
              }
            </div>
          </div>
          {data.headline &&
            <div>
              <h3 className="font-bold text-xl mb-6">{data.headline}</h3>
              <TinaMarkdown content={data.body} />
            </div>
          }
        </div>
      </div>
    </Section>
  );
};
