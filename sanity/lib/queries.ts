export const servicesListQuery = `
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    icon
  }
`;

export const servicePageQuery = `
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    fullDescription,
    image {
      asset->{
        _id,
        url
      },
      alt
    },
    icon
  }
`;

export const serviceSlugsQuery = `
  *[_type == "service"] {
    "slug": slug.current
  }
`;
export const galleryListQuery = `
  *[_type == "galleryImage"] | order(order asc) {
    _id,
    title,
    category,
    image {
      asset->{
        _id,
        url
      },
      alt
    }
  }
`;
