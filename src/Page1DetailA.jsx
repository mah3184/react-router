import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();

  const history = useHistory();

  const historyBack = () => {
    history.push("/Page1");
  };
  return (
    <div>
      <h2>Page1DetailAです。</h2>
      <p>{state}</p>
      <button onClick={historyBack}>戻る</button>
    </div>
  );
};
