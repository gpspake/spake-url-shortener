import React from 'react';
import './App.css';
import SignIn from './SignIn';
import CurrentUser from './CurrentUser';

const App = ({ auth, signIn, signOut }) => {
  return (
    <main className="Application">
      <div className="Application--sidebar">
        { auth.status === 'ANONYMOUS' && <SignIn signIn={signIn}/> }
        { auth.status === 'SIGNED_IN' && <CurrentUser auth={auth} signOut={signOut} />}
      </div>
    </main>
  );
};

export default App;
