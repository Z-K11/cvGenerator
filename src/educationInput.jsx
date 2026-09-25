import './styles/educationInput.css';
import { useState } from 'react';
export default function UserEducation() {
  const [education, setEducation] = useState({
    school: '',
    certificate: '',
    acquired: '',
  });
  function handleEducation(e) {
    setEducation((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <div className="educationInput generalInput">
      <h2>Education</h2>
      <div className="inputAlign">
        <label htmlFor="institute">Institute Name : </label>
        <input
          type="text"
          name="school"
          id="institute"
          value={education.school}
          onChange={handleEducation}
        />
        <label htmlFor="certificate">Certificate Name:</label>
        <input
          type="text"
          name="certificate"
          id="certificate"
          value={education.certificate}
          onChange={handleEducation}
        />
        <label htmlFor="certificateDate">Date Acquired:</label>
        <input
          type="date"
          name="acquired"
          id="certificateDate"
          value={education.acquired}
          onChange={handleEducation}
        />
      </div>
      <div className="addEducation">
        <button type="button">Add</button>
      </div>
    </div>
  );
}
