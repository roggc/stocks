import { useValues, applicationAdapter } from "ui/slices";

export const useGetApplicationAdapter = () => {
  const { value: applicationAdapterValue } = useValues(applicationAdapter);
  return applicationAdapterValue;
};
