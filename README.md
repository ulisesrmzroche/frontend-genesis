= Frontend Genesis =

![Image](/path/to/image)

This is my preferred front-end stack for new web apps.

== Tech Stack ==

Full-Stack JavaScript.

# Primary

* React
* Express

# Aux

* Bootstrap

== Dev ==

=== Installing ===

1. Git clone the app
2. Run npm setup
3. Run npm start

Assuming everything went right, and this boilerplate is still relevant due to not living in a post-apocalypictic nuclear distopia, you should see a hello world splash page when you go to http://localhost:8080.

Open the postcard to see a wise saying and a funny gif. It will self-destruct in 10 seconds and leave you with a naked page after that.

=== Development ===

`npm start` to run the app.
`npm test` to run the tests.

=== Upgrading ===

To upgrade the project, run `npm upgrade`. It will run git merge and you'll have to resolve the conflicts, if there are any, by hand.

It's super hacky, but why waste time to save a couple of minutes tomorrow.


=== Architecture ===

* dist
* lib
* scripts
* src
* * app
* * server
* test

=== The Dist Directory ===

This is the compiled output of the app

=== The Lib Directory ===

=== Scripts ===

These are scripts to run the project

=== Src ===

This is where the app lives. It is further divided at the top level into components, modules, and utils.

=== Test ===

The tests
