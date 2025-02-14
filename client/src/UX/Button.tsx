const Button = ({
  type,
  children,
  onClick,
  disabled = false,
  value,
}: ButtonProps) => {
  const styles: Record<ButtonProps["type"], string> = {
    user: `header-action-btn`,
    favourites: `header-action-btn`,
    cart: `header-action-btn`,
    sliderBtnLeft: "slider-btn slider-btn-left",
    sliderBtnRight: "slider-btn slider-btn-right",
    sellersActions: "sellers-btns",
    plus: "plus-btn",
    minus: "minus-btn",
    addToCart: "addtocart",
    secondCart: "cart",
    info: "btn-info",
    submitContact: "submit-btn-contact",
  };

  return (
    <button
      className={styles[type]}
      onClick={onClick}
      disabled={disabled}
      value={value}
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
