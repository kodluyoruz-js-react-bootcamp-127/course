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
    - You can see what this endpoint return as a result [here](https://developers.themoviedb.org/3/discover/movie-discover).
- You should use [flex](https://www.w3schools.com/css/css3_flexbox.asp) or [grid](https://www.w3schools.com/css/css_grid.asp) for layout styling in CSS
- You should use [media queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) for responsiveness.

### Publish

To publish your app, you can use [Netlify](https://www.netlify.com/).
- After sign in to Netlify, go to [Drop](https://app.netlify.com/drop) page.
- Here you should put your `index.html` to a folder. (movie-app/index.html)
- And drag & drop your folder to here. 
- It will generate a website for you. 
- Share this link in your README.md of your repo.

## Plus

It would be great to see these features in your example but you don't have to.

- The endpoint returns `page:1` and `total_pages`. You can implement pagination with these details. In every page, you can send `page=[PAGE_NUMBER]` as a query parameter to fetch new list.
- You can provide sorting [options](https://www.w3schools.com/tags/tag_option.asp) to end user. So they can sort the movies with `sort_by` query params. You can find the details [here](https://developers.themoviedb.org/3/discover/movie-discover) (Click **Try it Out** butotn).
