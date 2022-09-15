import type { TinaTemplate } from "tinacms"
import { backgroundSchema } from "./shared/background";
import { navigationLabelSchema } from "./shared/navigation-label";
import { colorOptions } from "./shared/options";

const defaultCard = {
  headline: "Headline",
  cardStyle: {
    labelStyles: "text-white font-1 text-sm mb-0",
    headlineStyles: "text-white font-1 text-3xl mb-20",
    subheadStyles: "text-white font-1 text-2xl mb-20",
    textStyles: "text-white font-1 text-base mb-0",
  },
};

export const sidebarCardsBlockSchema: TinaTemplate = {
  name: "sidebarCards",
  label: "Sidebar Cards",
  ui: {
    defaultItem: {
      headline: "This is the main headline",
      style: {
        navColor: "bg-primary",
        labelStyles: "text-white font-1 text-sm mb-0",
        headlineStyles: "text-white font-1 text-3xl mb-20",
        subheadStyles: "text-white font-1 text-2xl mb-20",
        textStyles: "text-white font-1 text-base mb-0",
      },
      cards: [defaultCard, defaultCard, defaultCard],
    },
    
  },
  fields: [
    {
      type: "object",
      label: "Card Style",
      name: "cardStyle",
      ui: {
        component: "group",
      },
      fields: [
        {
          type: "string",
          label: "Background",
          name: "fillStyles",
          ui: {
            component: "fillControl"
          }
        },
        {
          label: "Padding",
          name: "padding",
          type: "string",
          ui: {
            component: "paddingControl",
          }
        },
        {
          type: "string",
          label: "Border",
          name: "borderStyles",
          ui: {
            component: "borderControl"
          }
        },
        {
          label: "Typography",
          name: "typographyTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          type: "string",
          label: "Label",
          name: "labelStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Headline",
          name: "headlineStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Subhead",
          name: "subheadStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Text",
          name: "textStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          label: "Button",
          name: "buttonTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          label: "Button Type",
          name: "buttonType",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: [
            { label: "Primary", value: "primary" },
            { label: "Secondary", value: "secondary" },
            { label: "Minor", value: "minor" },
          ],
        },
      ],
    },
    {
      type: "object",
      label: "Style",
      name: "style",
      ui: {
        component: "group",
      },
      fields: [
        {
          type: "string",
          label: "Nav Color",
          name: "navColor",
          ui: {
            component: "colorControl",
          },
          options: colorOptions,
        },
        {
          label: "Typography",
          name: "typographyTitle",
          type: "string",
          ui: {
            component: "ruledTitle",
          },
        },
        {
          type: "string",
          label: "Label",
          name: "labelStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Headline",
          name: "headlineStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Subhead",
          name: "subheadStyles",
          ui: {
            component: "typeControl"
          }
        },
        {
          type: "string",
          label: "Text",
          name: "textStyles",
          ui: {
            component: "typeControl"
          }
        },
      ]
    },
    backgroundSchema,
    {
      label: "",
      name: "rule",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    {
      label: "Image",
      name: "imageSrc",
      type: "image",
      ui: {
        clearable: true,
      }
    },
    {
      label: "Label",
      name: "label",
      type: "string",
    },
    {
      label: "Headline",
      name: "headline",
      type: "string",
    },
    {
      label: "Subhead",
      name: "subhead",
      type: "string",
    },
    {
      label: "Body",
      name: "body",
      type: "rich-text",
    },
    {
      label: "Cards",
      name: "cards",
      type: "object",
      list: true,
      ui: {
        component: 'itemListField',
      },
      fields: [
        {
          label: "Type",
          name: "cardType",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: [
            { label: "Basic", value: "basic" },
            { label: "Pullquote", value: "pullquote" },
            { label: "CTA", value: "cta" },
          ],
        },
        {
          type: "string",
          label: "Title",
          name: "headline",
        },
        {
          label: "Subhead",
          name: "subhead",
          type: "string",
        },
        {
          label: "Text",
          name: "text",
          type: "rich-text",
        },
        {
          label: "Code Language",
          name: "language",
          type: "string",
          ui: {
            component: "selectField",
          },
          options: [
            { label: "Javascript", value: "javascript" },
            { label: "Go", value: "go" },
            { label: "Rust", value: "rust" },
            { label: "HTML", value: "html" },
          ],
        },
        {
          label: "Code",
          name: "code",
          type: "string",
          ui: {
            component: "textarea",
          }
        },
      ]
    },
    {
      label: "",
      name: "rule2",
      type: "string",
      ui: {
        component: "ruledTitle",
      },
    },
    navigationLabelSchema,
  ],
};
