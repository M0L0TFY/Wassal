export function Register() {
  return (
    <div className="register-page">
      <h1>Register</h1>
      <form>
        <label>
          First Name:
          <input type="text" name="firstName" required />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" required />
        </label>
        <label>
          Email:
          <input type="text" name="email" required />
        </label>
        <label>
          Phone number:
          <input type="tel" name="phone" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
