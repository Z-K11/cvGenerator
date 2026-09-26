import './styles/output.css';
export default function GeneratedResume(props) {
  return (
    <div
      className="resume"
      style={{ display: props.showOutput ? 'block' : 'none' }}
    >
      <div className="personalUserData">
        <h3>{props.user.name}</h3>
        <p>{props.user.number}</p>
        <p>{props.user.email}</p>
      </div>
      <div className="userEducation">
        <h2>Education :</h2>
        <div className="educationWrapper">
          <p>Institute :</p>
          <p>Certificate :</p>
          <p>Date Acquired :</p>
        </div>
        <ol>
          {props.userEducation.map((content) => {
            return (
              <li key={content.certificate}>
                <div className="educationWrapper">
                  <p>{content.school}</p>
                  <p>{content.certificate}</p>
                  <p>{content.acquired}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="userExperience">
        <h2>Experience :</h2>
        <div className="experienceWrapper">
          <p>Company :</p>
          <p>Experience :</p>
          <p>From :</p>
          <p>To :</p>
        </div>
        <ol>
          {props.userExperience.map((content) => {
            return (
              <li key={content.company + content.experience}>
                <div className="experienceWrapper">
                  <p>{content.company}</p>
                  <p>{content.experience}</p>
                  <p>{content.from}</p>
                  <p>{content.to}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
