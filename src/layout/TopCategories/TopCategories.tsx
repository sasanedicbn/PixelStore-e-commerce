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
    <div>
      <h1>Shop Top Categories</h1>
      {topCategory.map((category, index) => (
        <SingleCategory key={index} name={category.name} img={category.img} />
      ))}
    </div>
  );
};

export default TopCategories;
