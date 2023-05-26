import { Provider } from "ui/slices";
import App from "ui/components/app";

const Root = ({ applicationAdapter }) => {
  return (
    <Provider>
      <App applicationAdapter={applicationAdapter} />
    </Provider>
  );
};

export default Root;
