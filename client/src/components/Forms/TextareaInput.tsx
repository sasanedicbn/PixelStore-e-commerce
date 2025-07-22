const TextareaInput = ({ label, name, register, errors }) => {
  return (
    <div className="textInput">
      <label>{label}</label>
      <textarea {...register(name)} placeholder={label} />
      {errors[name] && <p>{error
};

export default TextareaInput;
