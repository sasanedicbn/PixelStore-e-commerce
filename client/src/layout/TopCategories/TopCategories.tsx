import SingleCategory from "./TopCategoriesItems/SingleCategory";

const TopCategories = () => {
  const topCategory = [
    {
      name: "TVs",
      img: "../public/assets/top-categories/TVsnew.jpg",
    },
    {
      name: "Computers",
      img: "../public/assets/top-categories/Computersnew3.webp",
    },
    {
      name: "Gaming",
      img: "../public/assets/top-categories/Gamingnew2.webp",
    },
    {
      name: "Audio",
      img: "../public/assets/top-categories/Audionew.webp",
    },
    {
      name: "Appliances",
      img: "../public/assets/top-categories/Photograpynew2.webp",
    },
  ];

  return (
    <div className="top-categories-container">
      <h2 className="top-categories-title">Shop Top Categories</h2>
      <div className="categories-grid">
        {topCategory.map((category, index) => (
          <SingleCategory key={index} name={category.name} img={category.img} />
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
