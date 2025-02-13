const ContactUsForm = () => {
  return (
    <div>
      <h3>Write Us</h3>
      <form>
        <div>
          <label>Name</label>
          <input type="text" name="name" id="name" />
          <label>Email</label>
          <input type="email" name="email" id="email" />
          <label>Phone Number</label>
          <input type="phone" name="phone" id="phone" />
          <button>Sumbit</button>
        </div>
        <div>
          <label>Message</label>
          <textarea />
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
