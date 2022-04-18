# SparkAmplify Coding Challenge

> Welcome to the SparkAmplify Coding Challenge!


## Overview

To complete this challenge, you will need to write a simple [React](https://facebook.github.io/react/) web app, and provide us the source files to be built.

The purpose of this challenge is to assess your **skills and approach to composing a simple web app** given a set of screens and an API feed.  We will also assess the **generated HTML, CSS, and JS** output.


## The Challenge

It's pretty simple. Using the provided screens as a reference, you'll need to build a set of React components to render the app.  You'll also need to request a JSON feed, filter that data, and use the relevant fields.

Although this is a basic exercise, we'll be looking for **simple, well-designed and tested code** in the submission.

Please include a `README` with setup instructions, and any tests or other documentation you created as part of your solution.

Also, add the following info to your `README`:

* How did you decide which technologies to use as part of your solution?
* Are there any improvements you could make to your submission?
* What would you do differently if you were allocated more time?

## Details

You will need to build the following 3 pages with React:

* A "Home" page
* A "Search result" page
* A "Item detail" page

The deployable solution should be built in a folder named **`dist`** with an entry point file of **`index.html`**.

Please create components for each part of the page (eg. header, content, footer, etc).

The pages should also be usable on mobile and tablet devices.

You can assume that you do not have to support legacy browsers without features such as `fetch` or `flexbox`.


### "Home" Page

Refer to the [screens/home.png](./screens/home.png) screen.

This will be your `index.html` screen.

You will need to display 2 tiles, which link to the "Series" page and the "Movies" page.


### "Search result" and "Item detail" Pages

Refer to the [screens/search-result.png](./screens/search-result.png) and [screens/item-detail.png](./screens/item-detail.png) screens.

For each page you will need to fetch data from [OMDB API](http://www.omdbapi.com/)

You will also need to handle the loading and error states, of fetching the JSON feed:

* "Loading" state [screens/loading.png](./screens/loading.png)
* "Error" state [screens/error.png](./screens/error.png)


## FAQ

### What language, framework, build tool... should I use?

You may use whatever you like as long as the solution is built using [React](https://facebook.github.io/react/).


## Useful Links

* [React](https://facebook.github.io/react/)
* [OMDB API](http://www.omdbapi.com/)
