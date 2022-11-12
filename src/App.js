import React from 'react';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import ProfilePhoto from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
       <FullName/>
       <Address/>
       <ProfilePhoto/>

      </div>
        
      </header>
    </div>
  );
}

export default App;
