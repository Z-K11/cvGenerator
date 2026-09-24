import GeneralInformation from './generalInformation';
import UserEducation from './educationInput';
import Experience from './experience';
import './styles/userInput.css';

export default function InputForm(props) {
  return (
    <>
      <form onSubmit={props.submit} id="userInputForm">
        <GeneralInformation data={props.data} infoChange={props.infoChange} />
        <UserEducation
          data={props.educationData}
          educationInput={props.educationInput}
        />
        <Experience />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
