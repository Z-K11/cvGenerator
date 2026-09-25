import { useState } from 'react';
import './styles/experience.css';
export default function Experience(props) {
  const [jobData, setJobData] = useState({
    company: '',
    experience: 'job',
    from: '',
    to: '',
  });
  function handleInput(e) {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
  }
  function addExperience(e) {
    const target = e.target.id;
    if (target === 'addExperience') {
      props.actions.add(jobData);
      setJobData({
        company: '',
        experience: 'job',
        from: '',
        to: '',
      });
    }
  }
  function removeExperience(e) {
    const target = e.target.id;
    props.actions.remove(target);
  }
  return (
    <div className="experienceInput generalInput">
      <h2>Experience</h2>
      <div className="inputAlign">
        <label htmlFor="company">Company Name:</label>
        <input
          type="text"
          id="company"
          name="company"
          onChange={handleInput}
          value={jobData.company}
        />
        <label htmlFor="experienceType">Type:</label>
        <select
          name="experience"
          id="experience"
          onChange={handleInput}
          value={jobData.experience}
        >
          <option value="job">Job</option>
          <option value="internship">Internship</option>
          <option value="certificate">Certificate</option>
        </select>
        <label htmlFor="fromDate">From:</label>
        <input
          type="date"
          name="from"
          id="fromDate"
          onChange={handleInput}
          vale={jobData.from}
        />
        <label htmlFor="toDate">To:</label>
        <input
          type="date"
          name="to"
          id="toDate"
          onChange={handleInput}
          value={jobData.to}
        />
      </div>
      <div className="addExperience">
        <button type="button" onClick={addExperience} id="addExperience">
          Add
        </button>
      </div>
      <div className="showCurrentExperience" onClick={removeExperience}>
        <ul>
          {props.list.map((item) => {
            return (
              <li
                key={item.company + item.experience}
                className="experienceList"
              >
                <div className="listGrid">
                  <p>{item.company}</p>
                  <p>{item.experience}</p>
                  <p>{item.from}</p>
                  <p>{item.to}</p>
                  <button type="button" id={item.company + item.experience}>
                    remove
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
