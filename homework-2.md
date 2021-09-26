# Messaging App

You are expected to example messaging app that lists movies.
You can find the design here: https://www.figma.com/file/4rz2uuU1kU1moo7A8vtpLc/?node-id=602%3A177

## As a end user;

- Firstly, I should see login page to start chatting with people on `/login` route.
- User who has **not authorized** should not able to see messaging page. They should be redirected to login.
- After login, I should have redirected to `/chat` route and see list of my friends on the left side;
  - I should be able to find my friends to start chat with search input.
  - User list should show to me **last message** of that conversation below the user title.
  - **When I click the any of user**, I should redirected to subroute `/chat/:userid` and see my messages with that user on the right side.
- on the right side, I should see;
  - **Header** with selected user information. (image, user name, and more info icon).
  - **Messages** on the center.
  - **Input and button** to send a new message.
- When I click three dot (on right top of screen), I should navigate to user details page.
  - Here, app should navigate to `/user/:userid/details`
- When I click the close button on user details page, I should navigate back.
- When I refresh page, I should still be authorized. My auth information should be stored in local storage or cookies.

## Additional Info

- You will find mock data to use in your app in this repo called `messaging-mock-users.json`;

  - You will need to use these users to show. Each user has `messages` array and these messages have sender id.
  - If message sender is selected user, I should see his/her messages on the left, if it is my message, I should see them on right.

## Requirements

- You need to develop your application by using only HTML, CSS, JavaScript and **React**.
- You should not use any CSS library.
- You should use [flex](https://www.w3schools.com/css/css3_flexbox.asp) for layout styling in CSS
- You should create your components in their own folder. ie: `/components/button`.
  - Each component should have it is own style file as well. ie:
    - /Button
      - index.js
      - Button.js
      - Button.style.js
- You should use both **class components** and **function components**.
- You should use [Hooks API](https://reactjs.org/docs/hooks-intro.html) to create state, life cycle methods, connecting to context etc.
- You should use [Context API](https://reactjs.org/docs/context.html) for state management. We should have at least two context. UserContext and ThemeContext.
- All pages, contexts, hooks should be in their own folder. ie: `/hooks`, `/context`, `/pages`
- In `UserContext`, we should have user list, selected user etc.
- In `ThemeContext`, we should have theme variable and every component should consume it. When I change the theme, my components should change as dark or light mode.
- You should create routing structure with `react-router` package.

## Publish

To publish your app, you can use [Netlify](https://www.netlify.com/).

- After sign in to Netlify, go to [New Site](https://app.netlify.com/start) page.
- Here you should create an app connected to your Github repository.
- Follow [these](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) steps.
- It will generate a website for you.
- Share this link in your README.md of your repo.

## Plus

### Git Usage (Plus)

- I want you to use [Git-Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) branch strategy in your project.
- You should initialize a React application and push that to `main` branch.
- After that, you should work on `develop` branch.
- You should commit your changes to develop. When you finish any part of your application (ie, login page, users list, messaging), you should merge changes to `/main`.
  - Netlify should listen your `main` branch and after every merge, it will create a new deploy automaticly.
