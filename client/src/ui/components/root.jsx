import AppProvider from "ui/slices";
import App from "ui/components/app";

const Root = ({ applicationAdapter }) => {
  return (
    <AppProvider>
      <App applicationAdapter={applicationAdapter} />
    </AppProvider>
  );
};

export default Root;
