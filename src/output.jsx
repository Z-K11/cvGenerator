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
    </div>
  );
}
