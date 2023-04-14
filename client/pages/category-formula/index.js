import FormulaCategory from "../../components/formulaCategory/FormulaCategory";
import { ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";

import FethcCategories from "../../api/FetchCategories";

// const DUMMY_CATEGORY = [
//   {
//     id: "custom-perfume",
//     category: "Custom Perfume",
//     classification: "Cosmetics",
//     categoryImage: {
//       categoryImageSmall: "/assets/images/products/perfume-small.png",
//       categoryImageLarge: "/assets/images/products/Perfume.png",
//     },
//   },
//   {
//     id: "custom-facial-wash",
//     category: "Custom Facial Wash",
//     classification: "Hygiene",
//     categoryImage: {
//       categoryImageSmall: "/assets/images/products/Facial-wash.png",
//       categoryImageLarge: "/assets/images/products/Facial-wash.png",
//     },
//   },
//   {
//     id: "custom-lotion",
//     category: "Custom lotion",
//     classification: "Cosmetics",
//     categoryImage: {
//       categoryImageSmall: "/assets/images/products/Lotion.png",
//       categoryImageLarge: "/assets/images/products/Lotion.png",
//     },
//   },
//   {
//     id: "custom-shampoo",
//     category: "Custom Shampoo",
//     classification: "Hygiene",
//     categoryImage: {
//       categoryImageSmall: "/assets/images/products/Shampoo.png",
//       categoryImageLarge: "/assets/images/products/Shampoo.png",
//     },
//   },
//   {
//     id: "custom-soap",
//     category: "Custom Soap",
//     classification: "Hygiene",
//     categoryImage: {
//       categoryImageSmall: "/assets/images/products/Soap.png",
//       categoryImageLarge: "/assets/images/products/Soap.png",
//     },
//   },
// ];

// type CreateFormulaCategoryPageProps = {
//   categoryData: ICategory[];
//   children?: ReactNode;
// };

const CreateFormulaCategoryPage = () => {
  const categoryQuery = useQuery({
    queryKey: ["category"],
    queryFn: FethcCategories,
  });

  console.log(categoryQuery.data);
  return <FormulaCategory productData={categoryQuery.data} />;
};

export default CreateFormulaCategoryPage;

// export async function getStaticProps() {
//   return {
//     props: {
//       categoryData: DUMMY_CATEGORY,
//     },
//   };
// }
