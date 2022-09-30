import type { TinaTemplate } from "@tinacms/cli";

export const supportBlockSchema: TinaTemplate = {
  name: "support",
  label: "Support",
  ui: {
    defaultItem: {
      headline: "Get Involved",
      body: {
        children: [
         {
           type: "p",
           children: [
              {
                text: "This is a very new protocol, and we can use your help."
              }
            ]
          }
        ]
      },
    },
  },
  fields: [
    {
      label: "Possible",
      name: "possible",
      type: "rich-text",
    },
    {
      label: "Not Possible",
      name: "notPossible",
      type: "rich-text",
    },
    {
      label: "Work In Progress",
      name: "workInProgress",
      type: "rich-text",
    },
    {
      label: "Work Not Started",
      name: "workNotStarted",
      type: "rich-text",
    },
    {
      label: "Headline",
      name: "headline",
      type: "string",
    },
    {
      label: "Body",
      name: "body",
      type: "rich-text",
    },
  ],
};
