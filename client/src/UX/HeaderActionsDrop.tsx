const HeaderActionsDrop = (isHovered) => {
  return (
    <div className={`headerActionsDrop ${isHovered ? "hovered" : ""}`}></div>
  );
};

export default HeaderActionsDrop;
