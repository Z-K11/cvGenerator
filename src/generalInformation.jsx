import './styles/generalInformation.css';
export default function GeneralInformation() {
  return (
    <>
      <div className="generalInput">
        <h2>Personal Information</h2>
        <div className="inputAlign">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" />
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" />
          <label for="cellNumber">Phone Number:</label>
          <input type="tel" id="cellNumber" name="cellNumber" />
          <label for="email">Email Address:</label>
          <input type="email" id="email" name="email" />
        </div>
      </div>
    </>
  );
}
