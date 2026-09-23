export default function Experience() {
  return (
    <div className="experienceInput generalInput">
      <h2>Experience</h2>
      <div className="inputAlign">
        <label htmlFor="company">Company Name:</label>
        <input type="text" id="compnay" name="companyName" />
        <label htmlFor="experienceType">Type:</label>
        <select name="experienceType" id="experienceType">
          <option value="job">Job</option>
          <option value="internship">Internship</option>
          <option value="certificate">Certificate</option>
        </select>
        <label htmlFor="fromDate">From:</label>
        <input type="date" name="fromDate" id="fromDate" />
        <label htmlFor="toDate">To:</label>
        <input type="date" name="toDate" id="toDate" />
      </div>
    </div>
  );
}
