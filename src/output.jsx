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
    </div>
  );
}
