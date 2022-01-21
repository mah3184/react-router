import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h3>Page2です</h3>
      <Link to="/Page2/999">URL Parameter</Link>
      <br />
      <Link to="/Page2/111?name=hogehoge">Query Parameter</Link>
    </div>
  );
};
