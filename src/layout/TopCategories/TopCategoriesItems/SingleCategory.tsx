const SingleCategory = ({ name, img }) => {
  return (
    <div>
      <img src={img} alt="Top categories img" />
      <h2>{name}</h2>
    </div>
  );
};
export default SingleCategory;
