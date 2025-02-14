import { z } from "zod";
import GenericForm from "../../../../components/Forms/GenericForm";

const ContactUsForm = () => {
  const handleSubmit = (data) => {
    console.log("data from conactUsForm", data);
  };
  const contactUsSchema = z.object({
    name: z.string().min(2, "Review must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(6, "Rating is required"),
    message: z.string().min(5, "Review must be at least 5 characters"),
  });

  return (
    <div className="contact-form">
      <h3>Write Us</h3>
      <GenericForm
        schema={contactUsSchema}
        fields={[
          { name: "name", label: "Name", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "phone", label: "Phone", type: "text" },
          { name: "textarea", label: "Message", type: "textarea" },
        ]}
        onSubmit={handleSubmit}
        submitButtonText={"Submit"}
        btnType={"submitContact"}
      />
      {/* <form>
        <div className="form-left">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
          />

          <button className="submit-btn">Submit</button>
        </div>

        <div className="form-right">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Write your message..."
          ></textarea>
        </div>
      </form> */}
    </div>
  );
};

export default ContactUsForm;
