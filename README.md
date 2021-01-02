# Trivia App using React-Native

This app uses React Native and connects to QuizAPI.io. If you wish to run locally, you should generate an API KEY on [quizapi.io](https://quizapi.io) and save it on .env file called TRIVIA_API_KEY.
React-native-dotenv didn't load well, so I used the dotenv library to load environment variables on `app.config.js` file.

This app was done based on a RisingStack post: [A Definitive React-Native Guide for React Developers: Getting Started](https://blog.risingstack.com/a-definitive-react-native-guide-for-react-developers/)

The main difference between this app and the app done by RisingStack post is not the game itself (colorblinder vs trivia), but react-nnavigation update ans API Rest usage.
