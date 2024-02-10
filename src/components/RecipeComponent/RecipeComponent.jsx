import React from "react";

export const RecipeComponent = ({
  Recipe: { title, description, pdf, img },
}) => (
  <>
    <div className="w-100">
      <p className="w-100 recipe-title font-light-brown dotted-line-top dotted-line-bottom p-0 m-0">
        {title}
      </p>

      {img && (
        <img src={img} className="mb-3" alt="Recipe Image" align="right" />
      )}

      <p className="p-0 m-0 mb-2">{description}</p>
      <a href={pdf} download="">
        <img
          className="mb-3"
          src="../imgs/RecipeDownload_Button.png"
          alt="Download Recipe PDF"
        />
      </a>
    </div>
  </>
);
