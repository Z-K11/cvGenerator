import InputForm from './userInput';
import GeneratedResume from './output';
import { useState } from 'react';
export default function Runner() {
  const [showResume, setShowResume] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    number: '',
  });

  function showCv(e) {
    e.preventDefault();
    setShowResume(true);
  }
  function handlePersonalInformation(e) {
    setPersonalInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div className="mainWrapper">
      <InputForm
        data={personalInfo}
        infoChange={handlePersonalInformation}
        submit={showCv}
      />
      <GeneratedResume user={personalInfo} showOutput={showResume} />
    </div>
  );
}
