# Testing JavaScript

[testingjavascript.com](https://www.testingjavascript.com)

## 1. Fundamentals of Testing in JavaScript

Do you know what a testing framework does? Do you know what makes a testing
framework different from a testing or assertion library? The best way to use a
tool effectively is to understand how it works. And the best way to understand
how a tool works is by making it yourself!

In this short course, we’ll learn how testing frameworks and assertion libraries
work by building our own, simple version of each.

## 2. Static Analysis Testing JavaScript Applications

There are a ton of ways your application can break. One of the most common
sources of bugs is related to typos and incorrect types. Passing a string to a
function that expects a number, or falling prey to a common typo in a logical
statement are silly mistakes that should never be made, but this happens all
the time.

We could write a comprehensive suite of automated tests for our entire codebase
to make certain mistakes like this never happen, but that would likely be too
much work and slow development down to be worth the benefit. Luckily for us,
there are tools we can use to satisfy a whole category of testing with a great
developer experience.

## 3. JavaScript Mocking Fundamentals

When running unit tests, you don’t want to actually make network requests or
charge real credit cards. That could… get expensive… and also very, very slow.
So instead of running your code exactly as it would run in production, you can
modify how some of your JavaScript modules and functions work during tests to
avoid test unreliability (flakiness) and improve the speed of your tests. This
kind of modification can come in the form of stubs, mocks, or generally: “test doubles.”

There are some great libraries and abstractions for mocking your JavaScript
modules during tests. The Jest testing framework has great mocking capabilities
built-in for functions as well as entire modules. To really understand how
things are working though, let’s implement some of these features ourselves.

## 4. Configure Jest for Testing JavaScript Applications

Jest is a fully featured testing framework with a developer experience that is
second to none. It’s remarkably simple and flexible at the same time. For simple
use cases, you often don’t need to configure anything, install and enjoy the
built-in coverage and watch mode support.

In a real-world application though, you’ll often have needs specific to your
application, especially when testing browser-based applications. You'll need to
handle Webpack loaders, dynamic imports, and custom module resolution which
Node.js does not support.

In this course we’ll go over ways you can optimize your Jest configuration to
make testing real-world JavaScript applications a delight. We’ll cover what’s
already been mentioned in addition to Babel support, code coverage, how to make
watch mode even more helpful, and how to run test suites with entirely different
configurations.

## 5. Test React Components with Jest and react-testing-library

If you want to ship your applications with confidence—and of course you do—you
need an excellent suite of automated tests to make absolutely sure that when
changes reach your users, nothing gets broken. To get this confidence, your
tests need to realistically mimic how users actually use your React components.
Otherwise, tests could pass when the application is broken in the real world.

In this course, we’ll write a series of render methods and run a range of tests
to see how we can get the confidence we’re looking for, without giving up
maintainability or test run-speed.

## 6. Install, Configure, and Script Cypress for JavaScript Web Applications

Cypress is an incredibly powerful web testing tool. It’s capable of testing any
web application. Its architecture places it a cut above similar end-to-end
testing tools. Its developer experience is best-in-class. And because Cypress
runs your tests in the same context as the rest of your application, you’re able
to get speed, reliability, and debuggability that are just a long-distant dream
with similar tools. The catch? There is no catch. Cypress is exceptional.

In this course, we’ll go over how you can install, configure, and script Cypress
to test modern, real-world JavaScript web applications.

## 7. Use dom-testing-library to test any JS framework

The person using your application components shouldn’t have to know or care what
framework(s) you used to write your application. Guess what: Neither should your
tests.

This course explores the dom-testing-library using 11 different frameworks, from
React to Svelte. You’ll get hands-on experience writing tests for any JavaScript
framework, giving you the confidence you need to ship your JavaScript application
with your framework of choice.
