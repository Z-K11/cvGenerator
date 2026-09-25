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
  const [educationList, sedEducationList] = useState([]);
  function showCv(e) {
    e.preventDefault();
    setShowResume(true);
  }
  function handlePersonalInformation(e) {
    setPersonalInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function addEducation(data) {
    sedEducationList([
      ...educationList,
      {
        school: data.school,
        certificate: data.certificate,
        acquired: data.acquired,
      },
    ]);
  }
  return (
    <div className="mainWrapper">
      <InputForm
        data={personalInfo}
        infoChange={handlePersonalInformation}
        submit={showCv}
        educationHandlers={{ add: addEducation }}
        education={educationList}
      />
      <GeneratedResume user={personalInfo} showOutput={showResume} />
    </div>
  );
}
