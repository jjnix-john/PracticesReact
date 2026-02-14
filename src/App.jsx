import Header from './Components/Header';
import Footer from './Components/Footer';
import react from 'react';
import Card from './Components/Card';
import Panel from './GameComponents/Panel'; 
import RollDice from './DiceRoller/RollDice.jsx';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function App() {
  return (
    <>
      <Header />
      {/* <Panel />
       <Card /> */}
        <RollDice />
      <Footer />

    </>
    
  );
}

export default App
