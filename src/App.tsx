import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IntroScreen, AcceptGiftScreen, SadResponseScreen, ChooseGiftsScreen, LetterScreen, BouquetScreen, FinalGiftScreen } from './screens';

type Screen =
  | 'INTRO'
  | 'ACCEPT_GIFT'
  | 'SAD_RESPONSE'
  | 'CHOOSE_GIFTS'
  | 'LETTER'
  | 'BOUQUET'
  | 'FINAL_GIFT';

function App() {
  const [screen, setScreen] = useState<Screen>('INTRO');

  return (
    <div className="app">
      <AnimatePresence>
        {screen === 'INTRO' && (
          <IntroScreen key="intro" onContinue={() => setScreen('ACCEPT_GIFT')} />
        )}
        
        {screen === 'ACCEPT_GIFT' && (
          <AcceptGiftScreen 
            key="accept" 
            onYes={() => setScreen('CHOOSE_GIFTS')} 
            onNo={() => setScreen('SAD_RESPONSE')} 
          />
        )}
        
        {screen === 'SAD_RESPONSE' && (
          <SadResponseScreen 
            key="sad" 
            onRetry={() => setScreen('ACCEPT_GIFT')} 
          />
        )}
        
        {screen === 'CHOOSE_GIFTS' && (
          <ChooseGiftsScreen 
            key="choose-gifts" 
            onSelectEnvelope={() => setScreen('LETTER')} 
            onSelectBouquet={() => setScreen('BOUQUET')} 
            onSelectGiftBox={() => setScreen('FINAL_GIFT')} 
          />
        )}

        {screen === 'LETTER' && (
          <LetterScreen 
            key="letter"
            onBack={() => setScreen('CHOOSE_GIFTS')}
          />
        )}

        {screen === 'BOUQUET' && (
          <BouquetScreen 
            key="bouquet"
            onComplete={() => setScreen('CHOOSE_GIFTS')}
          />
        )}

        {screen === 'FINAL_GIFT' && (
          <FinalGiftScreen key="final" />
        )}
        
        {/* Placeholder for other screens for now */}
        {screen !== 'INTRO' && screen !== 'ACCEPT_GIFT' && screen !== 'SAD_RESPONSE' && screen !== 'CHOOSE_GIFTS' && screen !== 'LETTER' && screen !== 'BOUQUET' && screen !== 'FINAL_GIFT' && (
          <div key="other" style={{ textAlign: 'center', color: '#fff' }}>
            <p>Screen: {screen}</p>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
