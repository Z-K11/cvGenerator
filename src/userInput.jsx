import GeneralInformation from './generalInformation';
import UserEducation from './educationInput';
import Experience from './experience';
import './styles/userInput.css';

export default function InputForm(props) {
  return (
    <>
      <form action="" method="post" id="userInputForm">
        <GeneralInformation data={props.data} infoChange={props.infoChange} />
        <UserEducation />
        <Experience />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
