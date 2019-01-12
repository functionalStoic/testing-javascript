# Section 1 - Fundamentals of Testing in JavaScript

[Link to Course Section](https://testingjavascript.com/courses/fundamentals-of-testing-in-javascript)

Do you know what a testing framework does? Do you know what makes a testing
framework different from a testing or assertion library? The best way to use
a tool effectively is to understand how it works. And the best way to
understand how a tool works is by making it yourself!

In this short course, we’ll learn how testing frameworks and assertion libraries
work by building our own, simple version of each.

## 1. Throw an Error with a Simple Test in JavaScript

In this lesson, we’ll get the most fundamental understanding of what an
automated test is in JavaScript. A test is code that throws an error when the
actual result of something does not match the expected output.

Tests can get more complicated when you’re dealing with code that depends on
some state to be set up first (like a component needs to be rendered to the
document before you can fire browser events, or there needs to be users in the
database). However, it is relatively easy to test pure functions (functions
which will always return the same output for a given input and not change the
state of the world around them).

## 2. Abstract Test Assertions into a JavaScript Assertion Library

Let’s add a simple layer of abstraction in our simple test to make writing tests
easier. The assertion library will help our test assertions read more like a
phrase you might say which will help people understand our intentions better.
It will also help us avoid unnecessary duplication.

play icon Watch Lesson
duration icon1m

## 3. Encapsulate and Isolate Tests by building a JavaScript Testing Framework

One of the limitations of the way that this test is written is that as soon as
one of these assertions experiences an error, the other tests are not run. It
can really help developers identify what the problem is if they can see the
results of all of the tests.

Let’s create our own test function to allow us to encapsulate our automated
tests, isolate them from other tests in the file, and ensure we run all the
tests in the file with more helpful error messages.

play icon Watch Lesson
duration icon2m

## 4. Support Async Tests with JavaScripts Promises through async await

Our testing framework works great for our synchronous test. What if we had some
asynchronous functions that we wanted to test? We could make our callback
functions async, and then use the await keyword to wait for that to resolve,
then we can make our assertion on the result and the expected.

Let’s make our testing framework support promises so users can use async/await.

play icon Watch Lesson
duration icon1m

## 5. Provide Testing Helper Functions as Globals in JavaScript

These testing utilities that we built are pretty useful. We want to be able to
use them throughout our application in every single one of our test files.

Some testing frameworks provide their helpers as global variables. Let’s
implement this functionality to make it easier to use our testing framework and
assertion library. We can do this by exposing our test and expect functions on
the global object available throughout the application.

play icon Watch Lesson
duration icon

## 6. Verify Custom JavaScript Tests with Jest

Up to this point we’ve created all our own utilities. As it turns out, the
utilities we’ve created mirror the utilities provided by Jest perfectly! Let’s
install Jest and use it to run our test!
