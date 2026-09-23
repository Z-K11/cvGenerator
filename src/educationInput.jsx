import './styles/educationInput.css';
export default function UserEducation() {
  return (
    <div className="educationInput generalInput">
      <h2>Education</h2>
      <div className="inputAlign">
        <label htmlFor="institute">Institute Name : </label>
        <input type="text" name="institute" id="institute" />
        <label htmlFor="certificate">Certificate Name:</label>
        <input type="text" name="certificate" id="certificate" />
        <label htmlFor="certificateDate">Date Acquired:</label>
        <input type="date" name="certificateDate" id="certificateDate" />
      </div>
      <div className="addEducation">
        <button type="button">Add</button>
      </div>
    </div>
  );
}
