import GeneralInformation from './generalInformation';
import UserEducation from './educationInput';
import Experience from './experience';

export default function InputForm() {
  return (
    <>
      <form action="" method="post">
        <GeneralInformation />
        <UserEducation />
        <Experience />
      </form>
    </>
  );
}
