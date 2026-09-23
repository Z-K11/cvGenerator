import GeneralInformation from './generalInformation';
import UserEducation from './educationInput';
import Experience from './experience';
import './styles/userInput.css';

export default function InputForm() {
  return (
    <>
      <form action="" method="post">
        <GeneralInformation />
        <UserEducation />
        <Experience />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
