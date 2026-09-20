import { type SchemaTypeDefinition } from "sanity";
import service from "./service";
import galleryImage from "./galleryImage";
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryImage, service],
};
