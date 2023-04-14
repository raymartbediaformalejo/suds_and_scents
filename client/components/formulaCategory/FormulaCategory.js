import classes from "../../styles/formulaCategory/FormulaCategory.module.css";
import FormulaCategoryList from "./FormulaCategoryList";

const FormulaCategory = ({ productData }) => {
  // console.log(categoryData);
  return (
    <div className={classes.container}>
      <h2 className={classes.subtitle}>
        Design Your Routine, Craft Your Perfect Blend
      </h2>
      <FormulaCategoryList categoryData={productData} />
    </div>
  );
};

export default FormulaCategory;
