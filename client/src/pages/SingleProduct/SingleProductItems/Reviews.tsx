import { useGetUserQuery } from "../../../store/slices/apiSlice";
import ReviewStars from "./ReviewStars";
import { useForm } from "react-hook-form";
import TextInput from "../../../components/Forms/TextInput";
import TextareaInput from "../../../components/Forms/TextareaInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { reviewSchema } from "../../../schemas/schemas";

const Reviews = ({ product }) => {
  const { data: user, isLoading } = useGetUserQuery();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      name: user?.name || "",
      rating: 5,
      review: "",
    },
  });

  const updateRating = (newRating) => {
    setValue("rating", newRating);
  };
  watch("rating");

  const onSubmit = (data) => {
    console.log(data, "submited");
  };

  return (
    <div className="reviews-container">
      <p>
        You're reviewing: <span>{product.product.title}</span>
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="rating">
          <span>Your Rating:</span>
          <ReviewStars totalStars={5} updateRating={updateRating} />
        </div>
        <div className="form-group">
          <TextInput
            label="Name"
            name="name"
            type="text"
            register={register}
            errors={errors}
          />
        </div>
        <div className="form-group">
          <TextareaInput
            label={"Your Review"}
            name="review"
            register={register}
            errors={errors}
          />
        </div>

        <button type="submit">SUBMIT REVIEW</button>
      </form>
    </div>
  );
};

export default Reviews;
