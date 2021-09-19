## Movie List App

You are expected to create and single web page that lists movies.
You can find the example design here: https://www.figma.com/file/4rz2uuU1kU1moo7A8vtpLc/Untitled?node-id=0%3A1

### As a end user;

- I should be able to list movies on page load.
- I should be able to search movies with and input on top right of the screen.
- The design must be responsive;
  - In desktop sizes, I should see 4 movies in a row.
  - In tablet sizes, I should see 2 movies in a row.
  - In a phone sizes, I should one movie in a row.

### Requirements

- You need to develop your application by using only HTML, CSS and JavaScript.
- You should not use any JS Library.
- You should not use any CSS library.
- You should use `document` methods to manipulate the dom.
- You can use the following information for Movie API;
  - Create an account in [The Movie API](https://www.themoviedb.org/).
  - After create account, you should get an API key. Here is how you can do;
    - Go to [settings > API](https://www.themoviedb.org/settings/api) and request an API KEY. It will give you an API key.
    - After that, you can use the following endpoint to get list of movies;
    - `https://api.themoviedb.org/3/discover/movie?api_key=[YOUR_API_KEY]&sort_by=popularity.desc`
    - Here, you should use own key.
- You should use [flex](https://www.w3schools.com/css/css3_flexbox.asp) or [grid](https://www.w3schools.com/css/css_grid.asp) for layout styling in CSS
- You should use [media queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) for responsiveness.
