import { createContext } from "react";
import Logo from '../../assests/Poeage_Logo_10.png'
export const DContext = createContext();

function Datacontext(props) {
  const navbar = {
    logo: Logo,
    home: "home",
    services: "services",
    portfolio: "portfolio",
    testimonials: "testimonials",
    team: "team",
    menu: "menu",
    news: "news",
    getquotes: "getquotes",
  };

  const service = [
    {
      topic: "AI Strategy Consulting",
      content: "Unlock the full potential of AI for your business with expert guidance tailored to your unique goals and industry needs.",
    },
    {
      topic: "AI Chatbot Development",
      content: "Build intelligent chatbots that enhance customer support, reduce response time, and work around the clock.",
    },
    {
      topic: "Custom ML Models",
      content: "Design and deploy machine learning models that power predictive analytics, recommendations, and automation.",
    },
    {
      topic: "Computer Vision Solutions",
      content: "Integrate image recognition and visual AI into your workflows for security, retail, or manufacturing automation.",
    },
    {
      topic: "Natural Language Processing",
      content: "Analyze and understand text at scale using NLP for sentiment analysis, document parsing, and more.",
    },
    {
      topic: "AI Systems Integration",
      content: "Seamlessly embed AI into your existing infrastructure, ensuring performance, scalability, and compliance.",
    },
  ];

  const portfolio = [
    {
      pricingplane: [],
    },
  ];

  const client = [
    {
      image: "jvhdbs",
      number: "jsvuhbshj",
      content: "nbdsvhjbs",
      para: "bvhbvjdbvnn",
    },
    {
      image: "jvhdbs",
      number: "jsvuhbshj",
      content: "nbdsvhjbs",
      para: "bvhbvjdbvnn",
    },
    {
      image: "jvhdbs",
      number: "jsvuhbshj",
      content: "nbdsvhjbs",
      para: "bvhbvjdbvnn",
    },
  ];

  const Team = [
    {
      image: "image",
      name: "name",
      postion: "postion",
      socialmedia: {
        twitter: "twitter",
        facebook: "facebook",
        linkecin: "linkedin",
        instagram: "instagram",
      },
    },
    {
      image: "image",
      name: "name",
      postion: "postion",
      socialmedia: {
        twitter: "twitter",
        facebook: "facebook",
        linkecin: "linkedin",
        instagram: "instagram",
      },
    },
    {
      image: "image",
      name: "name",
      postion: "postion",
      socialmedia: {
        twitter: "twitter",
        facebook: "facebook",
        linkecin: "linkedin",
        instagram: "instagram",
      },
    },
    {
      image: "image",
      name: "name",
      postion: "postion",
      socialmedia: {
        twitter: "twitter",
        facebook: "facebook",
        linkecin: "linkedin",
        instagram: "instagram",
      },
    },
  ];

  const data = { navbar, service, portfolio, client, Team };

  return <DContext.Provider value={data}>{props.children}</DContext.Provider>;
}

export default Datacontext;
