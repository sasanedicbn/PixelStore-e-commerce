const Button = ({ type, children, onClick, disabled = false }: ButtonProps) => {
  const styles: Record<ButtonProps["type"], string> = {
    user: `header-action-btn`,
    favourites: `header-action-btn`,
    cart: `header-action-btn`,
  };

  return (
    <button className={styles[type]} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
