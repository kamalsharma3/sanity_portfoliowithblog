export default {
  name: "projects",
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Links",
      name: "href",
      type: "url",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
                  be they blind, color-blind, low-sighted; 
                  alternative text is of great help for those 
                  people that can rely on it to have a good idea of 
                  what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
    {
      title: "Created At",
      name: "createdAt",
      type: "datetime",
    },
    {
      name: "metadesc",
      type: "string",
      title: "Meta Description",
    },
    {
      name: "technologies",
      type: "string",
      title: "Technologies Used",
    },
    {
      title: "project Image",
      name: "projectimage",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
        {
          // Editing this field will be hidden behind an "Edit"-button
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },
    {
      name: "author",
      type: "object",
      fields: [
        {
          title: "Author",
          name: "author",
          type: "reference",
          to: [{ type: "author" }],
        },
      ],
    },
  ],
};
