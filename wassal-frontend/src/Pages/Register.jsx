import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export function Register() {
  return (
    <>
      <div className="mt-5 mb-4 text-center">
        <h2>Register</h2>
      </div>
      <div className="container mt-5">
        <form>
          <div className="mb-3">
            <label htmlFor="register-fname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="register-fname"
              placeholder="First Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="register-lname" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="register-lname"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="register-phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="register-phone"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="register-email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="register-email"
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
              id="register-password"
              placeholder="Password"
            />
          </div>
          <div>
            <p>
              By creating an account, you agree to our &nbsp;
              <a href="#" className="links">
                Terms and Conditions
              </a>
            </p>
          </div>
          <Button className=" btn w-100 mb-2">Register</Button>
        </form>
        <div>
          <p>
            Already have an account?{" "}
            <Link to="/" className="links">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
