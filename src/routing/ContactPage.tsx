import {useNavigate} from "react-router-dom";

const ContactPage = () => {
    const navigate = useNavigate();
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            navigate("/");
        }}>
            <button className="btn btn-primary">submit</button>
        </form>
    );
};

export default ContactPage;