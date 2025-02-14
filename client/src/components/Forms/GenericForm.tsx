import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TextInput from "./TextInput";
import TextareaInput from "./TextareaInput";

const GenericForm = ({ schema, fields, onSubmit, submitButtonText }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const renderInput = (field) => {
    switch (field.type) {
      case "textarea":
        return (
          <TextareaInput
            key={field.name}
            label={field.label}
            name={field.name}
            register={register}
            errors={errors}
          />
        );
      default:
        return (
          <TextInput
            key={field.name}
            label={field.label}
            name={field.name}
            type={field.type}
            register={register}
            errors={errors}
          />
        );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field) => renderInput(field))}
        <button type="submit">{submitButtonText}</button>
      </form>
    </div>
  );
};
export default GenericForm;
