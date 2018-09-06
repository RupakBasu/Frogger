# Feed Reader Project for the Grow With Google Scholorship

## Table of Contents

* [Description of Project](#description)
* [Purpose of Project](#purpose)
* [What did I learn?](#what)
* [How to run Jasmine?](#run)
* [Resources](#resources)
* [How will I complete this project?](#How)
* [Additional Information](#additional)
* [Contributing](#contributing)

## Description of Project

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

## Purpose of Project

This project tests an idea known as "test-driven development". This is where developers write tests first and then they develop the application where these test initially fail and as they write the applicaiton the tests begin to pass.

## What did I learn?

We learned how to use Jasmine. This taught us how to how to write proper tests with the pre-existing application. Helped us use our knowledge of event handling and DOM manipulation.

## How to run Jasmine?

First you need to install Node.js
Second NPM should be downloaded
NPM will be used to install Jamsine on your machine.
Node.js - https://nodejs.org/en/
NPM - https://www.npmjs.com/package/dist-js

Once this is in order go to your comand line of choice and run the following:
$ npm install -g jasmine

To see what you have on your machine which relates to npm you can run  $ npm list -g and you should see jasmine listed.

## Resources

1. Udacity FEND P4 Walkthrough) - https://www.youtube.com/watch?v=7kOBXPbDmyw&feature=youtu.be
2. Matthew Cranford - https://matthewcranford.com/feed-reader-walkthrough-part-1-starter-code/
3. Ryan Waite - RyanWaite.ProjectCoach [FEND, MWS]
4. stackoverflow - https://stackoverflow.com/questions/16890618/test-for-click-event-using-jasmine-test-suite
5. stackoverflow - https://stackoverflow.com/questions/15903993/how-to-get-innertext-of-a-div-using-javascript
6. .html() -  http://api.jquery.com/html/



# How will I complete this project?

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass.
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.

## Additional Information

The HTML , CSS, resouces.js, engine.js and app.js were all provided by Udacity for us to build upon.
## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
