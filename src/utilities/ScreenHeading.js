import { About } from "../components/about/About";
import { Contact } from "../components/contact/Contact";

import { Hero } from "../components/hero/Hero";
import { MyBlog } from "../components/myBlog/MyBlog";
import { MyPortfolio } from "../components/myPortfolio/MyPortfolio";
import { NavBar } from "../components/nav/NavBar";

export const TOTAL_SCREENS = [
  {
    screen_name: "Nav",
    component: NavBar,
  },
  {
    screen_name: "Home",
    component: Hero,
  },
  {
    screen_name: "AboutMe",
    component: About,
  },
  {
    screen_name: "MyPortfolio",
    component: MyPortfolio,
  },
  {
    screen_name: "MyBlog",
    component: MyBlog,
  },
  {
    screen_name: "Contact",
    component: Contact,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;
  return TOTAL_SCREENS.findIndex(
    (screen) => screen.screen_name === screen_name
  );
};
