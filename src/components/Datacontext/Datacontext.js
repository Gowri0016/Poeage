import { createContext } from "react";
import Application from "../../assest/application.png";
import Cloud from "../../assest/cloud.png";
import Hosting from "../../assest/hosting.png";
import Seo from "../../assest/seo.png";
import sequire from "../../assest/sequirity.png";
import Social from "../../assest/social media.png";
import Exprience from "../../assest/Expricence.png";
import Product from "../../assest/products.png";
import Approch from "../../assest/Approch.png";
import pricing from "../../assest/pricing.png";
import Delivery from "../../assest/timing.png";
import Support from "../../assest/support.png";
import Logo from "../../assest/logo.png";

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
      image: Application,
      topic: "Application Design",
      content: `Application design plays a vital role in creating a seamless user 
      experience by simplifying navigation and ensuring intuitive workflows. 
      It enhances the visual appeal of the interface through consistent, responsive, and modern
      designs, aligning with branding and accessibility standards. Additionally, a well-designed 
      application boosts functionality, enabling smooth performance and efficient user interactions.`,
    },
    {
      image: Hosting,
      topic: "Web Hosting",
      content: `Web Hosting is a service that allows individuals and businesses to make their websites accessible on the internet. 
      Web hosting providers allocate space on a server and offer resources such as bandwidth, storage, and security 
      to host your website files.`,
    },
    {
      image: Social,
      topic: "Social Media",
      content: `Social Media refers to online platforms and applications that allow users to create, share,
      and interact with content. It includes platforms like Facebook, 
      Instagram, Twitter, LinkedIn, and TikTok, where individuals, businesses, and organizations can engage with a global audience.`,
    },
    {
      image: Seo,
      topic: "SEO Optimization",
      content: `SEO Optimization (Search Engine Optimization) is the process of improving a website's visibility on search engines like Google. 
      The goal is to increase organic (non-paid) traffic by making the website more 
      appealing to search engine algorithms.`,
    },
    {
      image: Cloud,
      topic: "Cloud Server",
      content: `A cloud server is a virtual server hosted on a cloud computing platform rather than on a physical server. 
      It provides scalable, flexible, and on-demand computing resources such as processing power, storage, and bandwidth.
      Cloud servers are typically part of a larger network of servers that work together to deliver high availability and performance.`,
    },
    {
      image: sequire,
      topic: "Data Security",
      content: `Data Security refers to the protection of digital data from unauthorized access, corruption,
      theft, or loss. It involves implementing strategies, tools, and policies to safeguard 
      sensitive information across its lifecycle.`,
    },
    {
      choose: [
        {
          image: Exprience,
          topic: "Experience",
          content: `With years of industry expertise, we deliver innovative IT solutions that empower businesses to grow. Our team has hands-on experience across various domains, ensuring the best outcomes.`,
        },
        {
          image: Product,
          topic: "Product",
          content: `We offer cutting-edge products designed to streamline operations and enhance performance. From software solutions to cloud services, our products are tailored to meet unique business needs.`,
        },
        {
          image: Approch,
          topic: "Approach",
          content: `Our approach is customer-centric, focusing on understanding your challenges and providing personalized solutions. We prioritize collaboration and transparency to ensure success.`,
        },
        {
          image: pricing,
          topic: "Pricing",
          content: `We offer competitive pricing models that cater to businesses of all sizes. Our flexible pricing structure ensures cost-effectiveness without compromising quality.`,
        },
        {
          image: Delivery,
          topic: "Delivery",
          content: `Timely delivery is a key aspect of our services. We ensure your projects are completed on time with high-quality results, keeping your business ahead of the curve.`,
        },
        {
          image: Support,
          topic: "Support",
          content: `Our dedicated support team is available 24/7, ensuring smooth operation and quick resolution of any issues. We stand by our customers at every stage of the journey.`,
        },
      ],
    },
    {
      image: "/images/ai-consulting.png",
      topic: "AI Strategy Consulting",
      content: "Unlock the full potential of AI for your business with expert guidance tailored to your unique goals and industry needs.",
    },
    {
      image: "/images/chatbot-dev.png",
      topic: "AI Chatbot Development",
      content: "Build intelligent chatbots that enhance customer support, reduce response time, and work around the clock.",
    },
    {
      image: "/images/ml-models.png",
      topic: "Custom ML Models",
      content: "Design and deploy machine learning models that power predictive analytics, recommendations, and automation.",
    },
    {
      image: "/images/vision-ai.png",
      topic: "Computer Vision Solutions",
      content: "Integrate image recognition and visual AI into your workflows for security, retail, or manufacturing automation.",
    },
    {
      image: "/images/nlp-ai.png",
      topic: "Natural Language Processing",
      content: "Analyze and understand text at scale using NLP for sentiment analysis, document parsing, and more.",
    },
    {
      image: "/images/ai-integration.png",
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
