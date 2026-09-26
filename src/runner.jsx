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
  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);
  function showCv(e) {
    e.preventDefault();
    setShowResume(true);
  }
  function handlePersonalInformation(e) {
    setPersonalInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function addEducation(data) {
    setEducationList([
      ...educationList,
      {
        school: data.school,
        certificate: data.certificate,
        acquired: data.acquired,
      },
    ]);
  }
  function removeEducation(cert) {
    setEducationList(educationList.filter((item) => item.certificate !== cert));
  }
  function addExperience(data) {
    setExperienceList([
      ...experienceList,
      {
        company: data.company,
        experience: data.experience,
        from: data.from,
        to: data.to,
      },
    ]);
  }
  function removeExperience(check) {
    setExperienceList(
      experienceList.filter((item) => item.company + item.experience !== check)
    );
  }
  return (
    <div className="mainWrapper">
      <InputForm
        data={personalInfo}
        infoChange={handlePersonalInformation}
        submit={showCv}
        educationHandlers={{ add: addEducation, remove: removeEducation }}
        education={educationList}
        experience={experienceList}
        experienceHandlers={{ add: addExperience, remove: removeExperience }}
      />
      <GeneratedResume
        user={personalInfo}
        showOutput={showResume}
        userEducation={educationList}
      />
    </div>
  );
}
