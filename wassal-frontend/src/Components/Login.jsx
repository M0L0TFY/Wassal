import { createContext, useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const LoginContext = createContext();

export function Login() {
  const { showLogin, setShowLogin } = useContext(LoginContext);

  return (
    <Modal show={showLogin} onHide={() => setShowLogin(false)}>
      <Modal.Body>
        <div className="mb-4 text-center">
          <h2>Login</h2>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="login-email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="login-email"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="login-password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="login-password"
              placeholder="Password"
            />
          </div>
          <div>
            <p>
              <a href="#" className="links">
                Forgot password?
              </a>
            </p>
          </div>
          <Button className=" btn w-100 mb-2">Login</Button>
        </form>
        <div>
          <p>
            Don't have an account?{" "}
            <Link to="/Register" className="links">
              Create an account
            </Link>
          </p>
        </div>
      </Modal.Body>
    </Modal>
  );
}
