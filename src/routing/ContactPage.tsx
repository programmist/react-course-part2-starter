import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const nav = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        nav("/");
      }}
    >
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ContactPage;
