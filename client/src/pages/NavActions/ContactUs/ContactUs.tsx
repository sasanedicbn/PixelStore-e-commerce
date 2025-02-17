import FormLayout from "../../../components/Forms/FormLayout";
import ContactUsForm from "./ContactUsItems/ContactUsForm";

const ContactUs = () => {
  return (
    <FormLayout>
      <p>
        We love talking tech and we are here via email, chat, or phone. Our
        personal concierge shopping consultants are always on call to answer
        your questions and help you make informed purchases. Reach out today to
        consult with one of our friendly, slightly tech-obsessed experts.
      </p>
      <ContactUsForm />
    </FormLayout>
  );
};

export default ContactUs;
