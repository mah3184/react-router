import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h2>Page1です。</h2>
      <Link to="/Page1/DetailA">DetailA</Link>
      <br />
      <Link to="/Page1/DetailB">DetailB</Link>
    </div>
  );
};
