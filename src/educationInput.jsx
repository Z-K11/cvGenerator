import './styles/educationInput.css';
export default function UserEducation(props) {
  return (
    <div className="educationInput generalInput">
      <h2>Education</h2>
      <div className="inputAlign">
        <label htmlFor="institute">Institute Name : </label>
        <input
          type="text"
          name="school"
          id="institute"
          value={props.data.school}
          onChange={props.educationInput}
        />
        <label htmlFor="certificate">Certificate Name:</label>
        <input
          type="text"
          name="certificate"
          id="certificate"
          value={props.data.certificate}
          onChange={props.educationInput}
        />
        <label htmlFor="certificateDate">Date Acquired:</label>
        <input
          type="date"
          name="acquired"
          id="certificateDate"
          value={props.data.acquired}
          onChange={props.educationInput}
        />
      </div>
      <div className="addEducation">
        <button type="button">Add</button>
      </div>
    </div>
  );
}
