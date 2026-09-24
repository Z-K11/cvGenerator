import InputForm from './userInput';
import { useState } from 'react';
export default function Runner() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    number: '',
  });
  const [education, setEducation] = useState({
    school: '',
    certificate: '',
    acquired: '',
  });

  function handlePersonalInformation(e) {
    setPersonalInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleEducation(e) {
    setEducation((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <div className="mainWrapper">
      <InputForm
        data={personalInfo}
        infoChange={handlePersonalInformation}
        educationData={education}
        educationInput={handleEducation}
      />
    </div>
  );
}
