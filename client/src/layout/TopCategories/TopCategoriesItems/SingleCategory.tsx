const SingleCategory = ({ name, img }) => {
  return (
    <div className="single-category">
      <img src={img} alt="Top categories img" />
      <h3>{name}</h3>
    </div>
  );
};
export default SingleCategory;
