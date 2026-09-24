import { useState } from 'react';
import './styles/generalInformation.css';
export default function GeneralInformation(props) {
  const [hide, setHide] = useState(false);
  function handleClick(e) {
    const target = e.target.id;
    if (target === 'editPersonalInfo') setHide(false);
    else if (target === 'submitPersonalInfo') setHide(true);
  }
  return (
    <>
      <div className="generalInput">
        <h2>
          {hide ? 'Personal Information Submitted!' : 'Personal Information'}
        </h2>
        <div className="personalMenuWrapper" onClick={handleClick}>
          <div
            className="inputAlign"
            style={{ display: hide ? 'none' : 'grid' }}
          >
            <label htmlFor="fullName">Name:</label>
            <input
              type="text"
              id="fullName"
              name="name"
              value={props.data.name}
              onChange={props.infoChange}
            />
            <label htmlFor="cellNumber">Phone Number:</label>
            <input
              type="tel"
              id="cellNumber"
              name="number"
              value={props.data.number}
              onChange={props.infoChange}
            />
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={props.data.email}
              onChange={props.infoChange}
            />
          </div>
          <div className="personalButtons">
            <button
              type="button"
              id="editPersonalInfo"
              className="generalButtons"
            >
              Edit
            </button>
            <button
              type="button"
              id="submitPersonalInfo"
              className="generalButtons"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
