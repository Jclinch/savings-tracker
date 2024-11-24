// import React from 'react';
// import AppNavigator from './navigation/AppNavigator';
// import { SavingsProvider } from './contexts/SavingsContext';

// export default function App() {
//   return( 
//     <SavingsProvider>

//   <AppNavigator />;
//     </SavingsProvider>

// )
// }


//........

//path: savings-tracker\App.tsx
import React from "react";
import AppNavigator from "./navigation/AppNavigator";
import { SavingsProvider } from "./contexts/SavingsContext";

export default function App() {
  return (
    <SavingsProvider>
      <AppNavigator />
    </SavingsProvider>
  );
}
