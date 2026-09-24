import InputForm from './userInput';
import { useState } from 'react';
export default function Runner() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    number: '',
  });

  function handlePersonalInformation(e) {
    setPersonalInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <div className="mainWrapper">
      <InputForm data={personalInfo} infoChange={handlePersonalInformation} />
    </div>
  );
}
