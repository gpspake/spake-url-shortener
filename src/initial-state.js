const initialState = {
  auth: {
    status: 'ANONYMOUS',
    email: null,
    displayName: null,
    photoURL: null,
    uid: null
  },
  messages: {
    'firstMessage': {
      content: 'My spoon is too big.',
      timeStamp: Date.now() - 600,
      uid: 'firstUser'
    },
    'secondMessage': {
      content: 'I am a banana!',
      timeStamp: Date.now() - 540,
      uid: 'secondUser'
    }
  },
};

export default initialState;