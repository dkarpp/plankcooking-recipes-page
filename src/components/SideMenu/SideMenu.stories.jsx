import React from "react";
import { SideMenu } from "./SideMenu";
import { BrowserRouter as Router } from "react-router-dom";

const menuItemsMock = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
];

export default {
  title: "Components/SideMenu",
  component: SideMenu,
  parameters: {
    controls: { disabled: false },
  },
};
const Template = (args) => (
  <Router>
    <SideMenu {...args} />
  </Router>
);
export const Default = Template.bind({});
Default.args = {
  headerImage: "../imgs/Recipe_MenuHeader.png",
  menuItems: menuItemsMock,
};
