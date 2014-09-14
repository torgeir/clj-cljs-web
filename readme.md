# clj cljs browser repl vim fireplace setup

Whats needed to have vim fireplace connect to the cljs.browser.repl using piggieback, so you can evaluate cljs directly from vim against the dev tools console.

- `lein repl`
- open vim from the same folder
- in vim `:e src/dev.cljs`, hit `cqp` run `(start-server)`
- in another console run `lein cljsbuild auto`
- in vim `:e src/app.cljs`, and `:Piggieback 9000`, which sets up a server on localhost 9000
- open `http://localhost:3000` in the browser

Run cljs forms from vim with `cpp` to see them evaluated in the browser!
