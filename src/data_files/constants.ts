import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Waldir L Santos",
  tagline: "Ficção e Terror de Alta Qualidade",
  description: "Escritor premiado no Impact Short Film Awards, realizou seu sonho cinematográfico com Barba e é conhecido por obras de terror como Flor de Sangue e Cativeiro do Medo.",
  description_short: "Escritor Brasileiro, premiado internacionalmente por obras de Drama e Ficção.",
  url: "https://waldirlsantos.com.br",
  author: "wbarros",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "pt-BR",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "pt_BR",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: Ficção e Terror de Alta Qualidade`,
  description: "Descubra as obras premiadas de Waldir L. Santos, mestre em ficção e terror. Conheça suas histórias envolventes e mergulhe em um universo de suspense e criatividade. Explore agora!",
  image: ogImageSrc,
};
