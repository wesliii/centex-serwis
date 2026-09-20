import { defineType, defineField } from "sanity";

export default defineType({
  name: "galleryImage",
  title: "Zdjęcie w galerii",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Tytuł / podpis",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Zdjęcie",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Tekst alternatywny (alt)",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      type: "string",
      title: "Kategoria",
      options: {
        list: [
          { title: "Warsztat", value: "warsztat" },
          { title: "Diagnostyka", value: "diagnostyka" },
          { title: "Naprawy", value: "naprawy" },
          { title: "Zespół", value: "zespol" },
        ],
      },
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Kolejność wyświetlania",
      description: "Mniejsza liczba = wyżej na liście",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
