import {Link} from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/page1">Page 1</Link>
      </li>
      <li>
        <Link to="/page2">Page 2</Link>
      </li>
    </nav>
  );
}
