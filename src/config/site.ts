export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Syshorta",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "#hero",
    },
    {
      title: "Sobre mim",
      href: "#aboutme",
    },
    {
      title: "Serviços",
      href: "#skill",
    },
    {
      title: "Contato",
      href: "#feedback",
    },
  ],
  links: {
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com",
    docs: "https://ui.shadcn.com",
  },
}