const TextInput = ({ label, name, type = "text", register, errors }) => {
  return (
    <div className="textInput">
      <label>{label}</label>
      <input type={type} {...register(name)} placeholder={label} />
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
};

export default TextInput;
