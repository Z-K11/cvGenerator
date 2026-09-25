import './styles/educationInput.css';
import { useState } from 'react';
export default function UserEducation(props) {
  const [education, setEducation] = useState({
    school: '',
    certificate: '',
    acquired: '',
  });
  function handleEducation(e) {
    setEducation((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleActions(e) {
    const targetId = e.target.id;
    if (targetId === 'addEducation') {
      props.actions.add(education);
    }
  }
  return (
    <>
      <div className="educationInput generalInput" onClick={handleActions}>
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
          <button type="button" id="addEducation">
            Add
          </button>
        </div>
        <div className="showCurrentEducation">
          <ul>
            {props.list.map((listObject) => {
              return (
                <li key={listObject.certificate}>
                  <div className="listFlex">
                    <p>{listObject.school}</p>
                    <p>{listObject.certificate}</p>
                    <p>{listObject.acquired}</p>
                    <button type="button" id={listObject.certificate}>
                      remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
