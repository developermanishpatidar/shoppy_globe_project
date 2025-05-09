import { Link } from 'react-router-dom';
import '../style.css'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
}
  
export default NotFound;