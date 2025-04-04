import { createContext, useState, useContext } from "react";
import { useTranslation } from "react-i18next";


const ErrorContext = createContext();



export const ErrorProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { t } = useTranslation("translation");


  const showError = (error) => {

    const translatedError=t(error.code);
    console.log(translatedError);
    setErrorMessage(translatedError)

  };

  const hideError = () => {
    setErrorMessage(null);
  };

  return (
    <ErrorContext.Provider value={{ showError, hideError, errorMessage }}>
      {children}
    </ErrorContext.Provider>
  );
};

// Custom hook for easy access
export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useError must be used within an ErrorProvider");
  }
  return context;
};
