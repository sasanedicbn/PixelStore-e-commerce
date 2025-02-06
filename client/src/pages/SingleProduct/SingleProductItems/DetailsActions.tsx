import Button from "../../../UX/Button";

const DetailsActions = () => {
  return (
    <div className="detailsActions">
      <div className="quantity">
        <Button type="minus"> - </Button>
        <input type="text" name="quantity" id="quantity" value={1} />
        <Button type="plus"> + </Button>
      </div>
    </div>
  );
};
export default DetailsActions;
