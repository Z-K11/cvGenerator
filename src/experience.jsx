import { useState } from 'react';
export default function Experience() {
  const [jobData, setJobData] = useState({
    company: '',
    experience: '',
    from: '',
    to: '',
  });
  function handleInput(e) {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
    console.log(`Changed ${name}`);
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
        <button type="button">Add</button>
      </div>
    </div>
  );
}
