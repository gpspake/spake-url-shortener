import React from 'react';

const SignIn = ({ signIn }) => {
  return (
    <div className="SignIn">
      <button
        className="block"
        onClick={signIn}
      >
        Sign In
      </button>
    </div>
  );
};

export default SignIn;