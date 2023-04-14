import CreateFormula from "../../components/createFormula/CreateFormula";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

import FethcCategories from "../../api/FetchCategories";
import FetchIngredients from "../../api/FetchIngredients";
import { Fragment } from "react";

const CreateFormulaPage = () => {
  const router = useRouter();
  const param = router.query;
  const categoriesData = useQuery({
    queryKey: ["category"],
    queryFn: FethcCategories,
  });
  const ingredientsData = useQuery({
    queryKey: ["ingredient"],
    queryFn: FetchIngredients,
  });
  const categoryData =
    categoriesData.status === "success" &&
    categoriesData.data.find((cat) => {
      // console.log(cat);
      return param.categoryId === cat.custom_product_id;
    });
  const ingredientData =
    ingredientsData.status === "success" && ingredientsData.data;

  return (
    <Fragment>
      {categoryData ? (
        <CreateFormula
          categoryData={categoryData}
          ingredientData={ingredientData}
        />
      ) : (
        <div>Loading...</div>
      )}
    </Fragment>
  );
};

export default CreateFormulaPage;
