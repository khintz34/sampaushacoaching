import { IdListData } from "./IdListData";

export const menuItemData = [
  { title: "Home", path: "/" },
  { title: "About", path: `/#${IdListData.About}` },
  { title: "Testimonials", path: `/#${IdListData.Testimonials}` },
  { title: "Pricing and Plans", path: `/#${IdListData.FitnessPlans}` },
  {
    title: "Contact",
    path: "/NewClientForm",
  },
];
