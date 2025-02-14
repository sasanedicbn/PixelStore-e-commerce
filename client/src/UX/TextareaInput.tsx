const TextareaInput = ({ label, name, register, errors }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea {...register(name)} placeholder={label} />
      {errors[name] && <p>{errors[name].message}</p>}
    </div>
  );
};

export default TextareaInput;
