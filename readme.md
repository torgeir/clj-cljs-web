# clj cljs template project, with browser repl vim fireplace setup

Whats needed to have vim fireplace connect to the cljs.browser.repl using piggieback, so you can evaluate cljs directly from vim against the dev tools console.

- in one console run `lein cljsbuild auto`
- in another run `lein repl` and then `(start-server)`
- open vim from the same folder and do `:Piggieback 9000` (this sets up a browser repl server on localhost 9000)
- open `http://localhost:3000` in the browser
- run `repl()` in the chrome dev tools

Run cljs forms from vim with `cpp` to see them evaluated in chrome dev tools!

### lein with cljs for prod

`lein with-profile prod <command>`

### lein with cljs for dev

`lein with-profile dev <command>`
