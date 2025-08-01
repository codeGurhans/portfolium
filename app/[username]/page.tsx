"use client";
import { useGetPortfolioByUsernameQuery } from "@/services/portfolioApi";
import { usePathname } from "next/navigation";
import DefaultHome from "../_components/_templates/default/DefaultHome";
import MinimalHome from "../_components/_templates/minimal/MinimalHome";
import SteamHome from "../_components/_templates/steam/SteamHome";

type TemplateKey = 'default' | 'minimal' | 'steam'; 


const UserPortfolio = () => {
  const username = usePathname().slice(1);
  const { data, isLoading } = useGetPortfolioByUsernameQuery(username);


  if (!data) return <div></div>;

  const templates = {
    default: DefaultHome,
    minimal: MinimalHome,
    steam : SteamHome,
    // Add other templates here
  };

  const templateKey: TemplateKey =
    (data.template as TemplateKey) || "default";

  // const Template = templates[userData.templateId];
  const Template = templates[templateKey];
  if (isLoading) <p>Loading</p>;

  if (!Template) return <div>Template not found</div>;

  return <Template data={data} />;
};
export default UserPortfolio;
