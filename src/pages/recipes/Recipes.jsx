import React from "react";
import "../../recipe.css";
import { RecipeComponent } from "../../components/RecipeComponent/RecipeComponent";

const recipesData = [
  {
    title: "Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/Alder_Plank_Roasted_Porcini_Crusted_Salmon_with_Pesto_Rice.pdf",
  },
  {
    title: "Ancho Chili Rubbed Chicken with Corn Relish",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Ancho_Chili_Rubbed_Chicken_with_Corn_Relish.pdf",
  },
  {
    title: "Cedar BBQ Plank Roasted Spicy Pecan Halibut",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Cedar_BBQ_Plank_Roasted_Spicy_Pecan_Halibut.pdf",
  },
  {
    title: "Cedar Plank Roasted Mushrooms",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Cedar_Plank_Roasted_Mushrooms.pdf",
  },
  {
    title: "Garlic Chicken Dijon",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Garlic_Chicken_Dijon.pdf",
  },
  {
    title: "Maple Roasted Pork Chops and Pearl Onions",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Maple_Roasted_Pork_Chops_and_Pearl_Onions.pdf",
    img: "../../imgs/MaplePorkChops_RecipeImage.png",
  },
  {
    title: "Maple Turkey w/Apple-Pecan Stuffing",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Maple_Turkey_with_Apple_Pecan_Stuffing.pdf",
  },
  {
    title: "Plank Roasted Baby Back Ribs",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Plank_Roasted_Baby_Back_Ribs.pdf",
    img: "../../imgs/BBQRibs_RecipeImage.png",
  },
  {
    title: "Plank Roasted Dungeness Crab Stuffed Mushrooms",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Plank_Roasted_Dungeness_Crab_Stuffed_Mushrooms.pdf",
  },
  {
    title: "Plank Roasted Garlic-Rosemary Pork Chops",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Plank_Roasted_Garlic_Rosemary_Pork_Chops.pdf",
  },
  {
    title: "Plank Roasted Honey Mustard Chicken",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Plank_Roasted_Honey_Mustard_Chicken.pdf",
    img: "../../imgs/MustardChicken_RecipeImage.png",
  },
  {
    title: "Plank Roasted Pesto Stuffed Chicken Breast",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Plank_Roasted_Pesto_Stuffed_Chicken_Breast.pdf",
  },
  {
    title: "Plank Roasted Pumpkin Soup",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Plank_Roasted_Pumpkin_Soup.pdf",
    img: "../../imgs/PumpkinSoup_RecipeImage.png",
  },
  {
    title: "Plank Roasted Sausage Stuffed Zucchini",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Plank_Roasted_Sausage_Stuffed_Zucchini.pdf",
  },
  {
    title: "Porcini Chicken with Lemon-Thyme Zucchini",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Porcini_Chicken_with_Lemon_Thyme_Zucchini.pdf",
  },
  {
    title: "Pork Tenderloin with Herb Stuffing and Onions",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Pork_Tenderloin_with_Herb_Stuffing_and_Onions.pdf",
  },
  {
    title: "Salmon Oregano with Lemon Caper Dressing",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Salmon_Oregano_with_Lemon_Caper_Dressing.pdf",
  },
  {
    title: "Salmon with Basil-Garlic Rub",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Salmon_with_Basil_Garlic_Rub.pdf",
  },
  {
    title: "Sea Bass with Ginger",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Sea_Bass_with_Ginger.pdf",
  },
  {
    title: "Teriyaki Chicken Wings - Appetizer",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/Teriyaki_Chicken_Wings_Appetizer.pdf",
  },
  {
    title: "The Original Cedar Plank Roasted Salmon",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/The_Original_Cedar_Plank_Roasted_Salmon.pdf",
    img: "../../imgs/CedarPlankSalmon_RecipeImage.png",
  },
  {
    title: "White King Salmon with Roasted Fennel",
    description:
      "Click the Recipe PDF button to download the Alder Plank Roasted Porcini Crusted Salmon with Pesto Rice recipe.",
    pdf: "Content/recipes/pdf/White_King_Salmon_with_Roasted_Fennel.pdf",
  },
];

export const Recipes = () => {
  return (
    <div>
      <div
        id="recipesContentBackground"
        className="m-0 mt-2 p-0 d-flex-column-center"
      >
        <div className="d-flex-column mb-2 p-2 pt-4 px-lg-4 w-100 w-md-100">
          {recipesData.map((recipe, index) => (
            <RecipeComponent key={index} Recipe={recipe} />
          ))}
        </div>
      </div>
      <div
        id="recipesContentEnd"
        className="m-0 p-0 d-flex-column-center"
      ></div>
    </div>
  );
};
