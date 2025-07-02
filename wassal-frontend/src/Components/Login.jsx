import { createContext, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const LoginContext = createContext();

export function Login() {
  const { showLogin, setShowLogin } = useContext(LoginContext);

  return (
    <Modal show={showLogin} onHide={() => setShowLogin(false)}>
      <Modal.Body>
        Login
        <br />
        username:
        <input type="text" placeholder="Enter your username" />
        <br />
        password:
        <input type="password" placeholder="Enter your password" />
        <br />
        <Button variant="primary">Login</Button>
      </Modal.Body>
    </Modal>
  );
}
