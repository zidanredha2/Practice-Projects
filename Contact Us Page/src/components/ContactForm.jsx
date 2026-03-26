import Button from "./Button";
const ContactForm = () => {
  return (
    <div className="form">
      <div className="btn-container">
        <div className="btn-top">
          <Button text="Chat With Us" />
          <Button text="Call Us" />

          <Button className="btn-mail" text="Mail Us" />
        </div>
      </div>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="btn">Send Message</button>
      </form>
    </div>
  );
};
export default ContactForm;
