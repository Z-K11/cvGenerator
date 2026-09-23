import './styles/App.css';
import InputForm from './userInput';
function Header() {
  return (
    <header>
      <div className="leftContentHeader">
        <h1>Cv Generator</h1>
      </div>
      <div className="rightContentHeader">
        <Link />
      </div>
    </header>
  );
}
function Link() {
  return (
    <div className="links">
      <a href="https://www.linkedin.com/in/zk11/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3ByZVxsb67SO6pJKntsYwbIQ%3D%3D">
        LinkedIn
      </a>
      <a href="https://github.com/Z-K11">GitHub</a>
      <a href="https://www.facebook.com/profile.php?id=100089228738451">
        Facebook
      </a>
    </div>
  );
}
export default function App() {
  return (
    <>
      <Header />
      <div className="mainWrapper">
        <InputForm />
      </div>
    </>
  );
}
