import React, { useState } from 'react';

import Signup from '../Components/Signup/Signup';

function SignupPage() {
  const [username,setUsername] = useState('')
  return (
    <div>
      <Signup />
    </div>
  );
}

export default SignupPage;
