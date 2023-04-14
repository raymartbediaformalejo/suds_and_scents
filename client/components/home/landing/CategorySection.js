import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Button from "@mui/material/Button";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import categoryImage1 from "../../../public/assets/carousel/Facial-wash.png";
import categoryImage2 from "../../../public/assets/carousel/Lotion.png";
import categoryImage3 from "../../../public/assets/carousel/Perfume.png";
import categoryImage4 from "../../../public/assets/carousel/Shampoo.png";
import categoryImage5 from "../../../public/assets/carousel/Soap.png";

import classes from "../../../styles/layout/CategorySection.module.css";

const CategorySection = () => {
  const renderArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <Button
        type="button"
        className={classes["prev-button"]}
        onClick={onClickHandler}
        title={label}
      >
        <ArrowBackIosRoundedIcon />
      </Button>
    );

  const renderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <Button
        type="button"
        className={classes["back-button"]}
        onClick={onClickHandler}
        title={label}
      >
        <ArrowForwardIosRoundedIcon />
      </Button>
    );
  return (
    <section className={classes["category-section"]}>
      <div className={classes["category-section__left"]}>
        <h3 className={classes["category-section__title"]}>
          Custom Care for Your Every Scent and Suds
        </h3>
        <p className={classes["category-section__description"]}>
          Unlock the full potential of personalized livelihood products with our
          intuitive software. Simplify the customization process and create
          unique products faster and easier than ever before!
        </p>
        <Button
          variant="contained"
          href="/category-formula"
          className={classes["explore-button"]}
          sx={{
            padding: "0.8em 2em",
            borderRadius: "50px",
            textTransform: "uppercase",
            fontSize: "clamp(14px, 2vw, 15px)",
            fontFamily: "var(--font-poppins)",
            fontWeight: "normal",
            backgroundColor: "#de89a1",
            color: "#fff",
            outline: "none",
            border: "none",
            letterSpacing: "1px",
          }}
        >
          Explore
        </Button>
      </div>
      <div className={classes["category-section__right"]}>
        <Carousel
          className={classes["carousel-wrapper"]}
          autoPlay
          infiniteLoop
          interval={6000}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          renderArrowPrev={renderArrowPrev}
          renderArrowNext={renderArrowNext}
        >
          <div className={classes["image-wrapper"]}>
            <Image src={categoryImage1} alt="category image" loading="lazy" />
            <h4 className={classes["category-title"]}>Facial Wash</h4>
            <p className={classes["category-classification"]}>Hygiene</p>
          </div>
          <div className={classes["image-wrapper"]}>
            <Image src={categoryImage2} alt="category image" loading="lazy" />
            <h4 className={classes["category-title"]}>Facial Wash</h4>
            <p className={classes["category-classification"]}>Hygiene</p>
          </div>
          <div className={classes["image-wrapper"]}>
            <Image src={categoryImage3} alt="category image" loading="lazy" />
            <h4 className={classes["category-title"]}>Facial Wash</h4>
            <p className={classes["category-classification"]}>Hygiene</p>
          </div>
          <div className={classes["image-wrapper"]}>
            <Image src={categoryImage4} alt="category image" loading="lazy" />
            <h4 className={classes["category-title"]}>Facial Wash</h4>
            <p className={classes["category-classification"]}>Hygiene</p>
          </div>
          <div className={classes["image-wrapper"]}>
            <Image src={categoryImage5} alt="category image" loading="lazy" />
            <h4 className={classes["category-title"]}>Facial Wash</h4>
            <p className={classes["category-classification"]}>Hygiene</p>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CategorySection;
