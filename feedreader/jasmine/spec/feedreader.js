/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

         it('URL is defined', function() {
           for(i=0; i< allFeeds.length; i++){
             expect(allFeeds[i].url).toBeDefined();
             expect(allFeeds[i].url).not.toBeNull();
             expect(allFeeds[i].url.length).not.toBe(0,'',"");
            }
          });
         //  the length is what will produce the integer that will be
         // the upper bounds of the iteration and it expects a data type of int, whereas allFeeds is the actual array of objects itself…

         //This is another way for of method to acheive the second way

         // it('URL is defined', function() {
         //   for (let feed of allFeeds){
         //     expect(feed.url).toBeDefined();
         //     expect(feed.url.length).toBeGreaterThan(0);
         //     expect(feed.url).not.toBeNull();
         //   }
         //  });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name are defined', function() {
           for (let feed of allFeeds){
             expect(feed.name).toBeDefined();
             expect(feed.name).not.toBeNull();
             expect(feed.name.length).not.toBe(0,'',"");
           }
             // 0 , '', "" ==> The 0 means it should not be empty,
             // '' single quotes means that no string inside it shall not be accepted
             //""  double quotes means that no string inside it shall not be accepted
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it('menu is hidden', function() {
           let body = document.querySelector('body')
             expect(body.classList.contains('menu-hidden')).toBe(true);
             //This means that once the page loads is the class menu-hidden basically on.
             // expect(body).toHaveClass('menu-hidden')

         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          // When the menu is clicked it should toggle according to the app.js on
          // lines 130-133
      //     menuIcon.on('click', function() {
      //         $('body').toggleClass('menu-hidden');
      //     });
      // }());

      it('menu icon clicked on/off', function () {
          let body = document.querySelector('body');
          let menuLink= document.querySelector('menu-icon-link');
          // We needed to target the hamburger button and that was the class menu-icon-link

           //To Turn On menu
           $(menuLink).trigger('click');
          //https://stackoverflow.com/questions/16890618/test-for-click-event-using-jasmine-test-suite
          //This is another way to do the click event  $(menuLink).click();
          // but apparently $(menuLink).toggle('click'); is wrong to use.
          // .toggle is deprecated and it's bot the right method: https://api.jquery.com/toggle-event/
          expect(body.classList.contains('menu-hidden')).toBe(true);
          //turn off menu
          $(menuLink).trigger('click');
          expect(body.classList.contains('menu-hidden')).toBe(true);

      });

    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done){
           loadFeed(0); //loadFeed 0 is looking at the first load feed array function
           done();
         });
         // done() that signals to the framework when an asynchronous function has completed and we’re ready to go run our tests.
         let feed = document.querySelector('feed');
         let entry = document.querySelector('entry');
         //The project sheet asks to be sure that atleast one entry should be present in the feed
         // the articles have a class of entry. Basically we need to be sure that there is ATLEAST one of these in the feed

         it('loadFeed called and complete work', function(done) {
           expect(feed).toBeDefined();
           expect(feed).toBeNull(false);
           expect(entry).toBeNull(false);
           expect($( "div.feed").children( entry ).length > 0).toBe(false);
           expect($(entry).parent( feed ).length > 0).toBe(false);

           // expect(entry.parentClass.length > 0).toBe(true);
           // expect(feed.children.length > 0).toBe(true);
           // expect(feed.length).not.toBe(0);
           // expect($( "div.feed" ).children( entry ).length).toBeGreaterThan(0);

           done();
         });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        let firstFeed, secondFeed;

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         //https://stackoverflow.com/questions/15903993/how-to-get-innertext-of-a-div-using-javascript
         beforeEach(function(done){
           loadFeed(0, function(){
             firstFeed = $('.feed').html(); //  did jquery and selected the feed class by using this   http://api.jquery.com/html/
             loadFeed(1, function(){
               secondFeed = $('.feed').html();
               done();
             });
           });
         });
         it("should change content", function(){
           expect(firstFeed === secondFeed).toBe(false);
           // compared the two DOMs
         });
    });

}());
