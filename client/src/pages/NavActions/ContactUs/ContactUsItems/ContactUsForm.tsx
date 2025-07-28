import { z } from "zod";
import GenericForm from "../../../../components/Forms/GenericForm";
import { ContactUs } from "../../../../API/RegisterUser";

const ContactUsForm = () => {
  const handleSubmit = (data) => {
    function sendDataToContacUs() {
      ContactUs(data);
    }
    sendDataToContacUs();
  };
  const contactUsSchema = z.object({
    name: z.string().min(2, "Review must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(6, "Rating is required"),
    message: z.string().min(5, "Review must be at least 5 characters"),
  });

  return (
    // stavi layoutForm
    <div className="contact-form">
      <h3>Write Us</h3>
      <GenericForm
        schema={contactUsSchema}
        fields={[
          { name: "name", label: "Name", type: "text" },
          { name: "email", label: "Email", type: "email" },
          { name: "phone", label: "Phone", type: "text" },
          { name: "message", label: "Message", type: "textarea" },
        ]}
        onSubmit={handleSubmit}
        submitButtonText={"Submit"}
        btnType={"submitContact"}
      />
    </div>
  );
};

export default ContactUsForm;
