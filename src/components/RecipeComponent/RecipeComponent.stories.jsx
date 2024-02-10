import React from "react";
import { RecipeComponent } from "./RecipeComponent";

export default {
  title: "Components/RecipeComponent",
  component: RecipeComponent,
};

const Template = (args) => <RecipeComponent {...args} />;
export const Default = Template.bind({});
Default.args = {
  //title, description, pdf, img
  Recipe: {
    title: "Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Alder_Plank_Roasted_Porcini_Crusted_Salmon_with_Pesto_Rice.pdf",
    img: "",
  },
};
