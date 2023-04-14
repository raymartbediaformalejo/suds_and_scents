import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";

import FetchProducts from "../../api/FetchCategories";
import { useRouter } from "next/router";

import classes from "../../styles/formulaCategory/FormulaCategoryList.module.css";
// import image1 from "../../assets/images/products/Facial-wash.png";
// import image2 from "../../assets/images/products/Lotion.png";
// import image3 from "../../assets/images/products/Perfume.png";
// import image4 from "../../assets/images/products/Shampoo.png";
// import image5 from "../../assets/images/products/Soap.png";

// const CAT_IMAGES = [
//   { id: "custom-perfume", images: { imageSmall: image3, imageLarge: image3 } },
//   {
//     id: "custom-facial-wash",
//     images: { imageSmall: image1, imageLarge: image1 },
//   },
//   { id: "custom-lotion", images: { imageSmall: image2, imageLarge: image2 } },
//   { id: "custom-shampoo", images: { imageSmall: image4, imageLarge: image4 } },
//   { id: "custom-soap", images: { imageSmall: image5, imageLarge: image5 } },
// ];

const FormulaCategoryList = ({ categoryData }) => {
  const router = useRouter();
  function createFormulaHandler(id) {
    router.push("/category-formula/" + id);
  }
  // const productQuery = useQuery({
  //   queryKey: ["products"],
  //   queryFn: FetchProducts,
  // });

  // console.log(productQuery.data[0].category_image.category_image_large);
  // console.log(categoryData);
  console.log(categoryData);
  return (
    <div className={classes["category-lists"]}>
      <div className={classes.card}>
        {categoryData &&
          categoryData.map((cat) => {
            console.log(cat);
            // const catImage = CAT_IMAGES.find((img) => img.id === cat.id)?.images;
            return (
              <div
                onClick={() => {
                  createFormulaHandler(cat.custom_product_id);
                  return undefined;
                }}
                className={`${classes["card-item"]} ${
                  classes[`card-item-${cat.custom_product_id}`]
                }`}
                key={cat.custom_product_id}
              >
                <div className={classes["image-wrapper"]}>
                  <Image
                    src={cat.category_image?.category_image_large}
                    width={400}
                    height={400}
                    alt="product"
                    loading="lazy"
                    className={classes["category-image"]}
                  />
                </div>
                <div className={classes.info}>
                  <h3 className={classes["category-name"]}>
                    {cat.category_name}
                  </h3>
                  <p className={classes.classification}>{cat.classification}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FormulaCategoryList;
