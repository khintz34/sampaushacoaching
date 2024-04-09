import { IdListData } from "./IdListData";

export const menuItemData = [
  { title: "Home", path: "/" },
  { title: "Client Quotes", path: `/#${IdListData.Testimonials}` },
  { title: "Pricing and Plans", path: `/#${IdListData.FitnessPlans}` },
  { title: "About", path: `/#${IdListData.About}` },
  { title: "Contact", path: `/#${IdListData.Footer}` },
  {
    title: "New Client Form",
    path: "/NewClientForm",
  },
];
