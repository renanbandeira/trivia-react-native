require('dotenv').config()
export default {
  // All values in extra will be passed to your app.
  extra: {
    triviaAPIKey: process.env.TRIVIA_API_KEY,
  },
};
