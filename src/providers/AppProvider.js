import React, {createContext, useState} from 'react';

const AppContext = createContext();
const {Provider, Consumer: AppConsumer} = AppContext;
const AppProvider = ({children}) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [furkan, setFurkan] = useState(0);
  const [tamer, setTamer] = useState(0);
  const [cigdem, setCigdem] = useState(0);

  const setAmount = value => {
    setTotalAmount(value);
  };

  return (
    <Provider
      value={{
        totalAmount,
        setAmount,
        furkan,
        setFurkan,
        tamer,
        setTamer,
        cigdem,
        setCigdem
      }}>
      {children}
    </Provider>
  );
};

export {AppProvider, AppConsumer, AppContext};
