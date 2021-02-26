import React from "react";
import { useSelector } from "react-redux";
import Category from "./Category/Category.js";

const Categories = ({ setCurrentId }) => {
  const categories = useSelector((state) => state.categories);
  return !categories.length ? (
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  ) : (
    <div>
      {categories.map((category) => {
        return <Category category={category} setCurrentId={setCurrentId} />;
      })}
    </div>
  );
};

export default Categories;
