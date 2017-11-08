import React from 'react';
import './App.css';
import SignIn from './SignIn';
import CurrentUser from './CurrentUser';
import Loading from './Loading';

const App = ({ auth, signIn, signOut }) => {
  return (
    <main className="Application">
      <div className="Application--sidebar">
        { auth.status === 'ANONYMOUS' && <SignIn signIn={signIn}/> }
        { auth.status === 'SIGNED_IN' && <CurrentUser auth={auth} signOut={signOut} />}
        { auth.status === 'AWAITING_AUTH_RESPONSE' && <Loading /> }
      </div>
    </main>
  );
};

export default App;
