import { Fade } from "react-awesome-reveal";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div>
      <Fade>
        {" "}
        <LoginForm />
      </Fade>
    </div>
  );
};

export default Login;
