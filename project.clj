(defproject hello-repl "0.1.0-SNAPSHOT"

  :description "clj-cljs-template"

  :url "https://github.com/torgeir/clj-cljs-browser-repl-vim-fireplace-setup"

  :dependencies [[org.clojure/clojurescript "0.0-2280"]
                 [org.clojure/clojure "1.6.0"]
                 [compojure "1.1.8"]
                 [http-kit "2.1.16"]
                 [quiescent "0.1.4"]
                 [org.clojure/core.async "0.1.338.0-5c5012-alpha"]]

  :hooks [leiningen.cljsbuild]

  :plugins [[lein-npm "0.4.0"]]

  :source-paths ["src/clj"]

  :main web

  :profiles {
             :prod {:cljsbuild {:builds [{:source-paths ["src/cljs"]
                                          :compiler {:output-to "target/classes/public/cljs/app.js"
                                                     :externs ["externs.js"]
                                                     :optimizations :advanced
                                                     :pretty-print false}}]}}

             :dev {:plugins [[lein-cljsbuild "1.0.3"]]
                   :dependencies [[com.cemerick/piggieback "0.1.3"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :cljsbuild {:builds [{:source-paths ["src/cljs"]
                                         :compiler {:output-to  "target/classes/public/cljs/app.js"
                                                    ; :output-dir "target/classes/public/cljs"
                                                    ; :source-map "target/classes/public/cljs/app.js.map"
                                                    :externs ["externs.js"]
                                                    :optimizations :whitespace
                                                    :pretty-print true}}]}
                   :injections [(use 'web)]}}

  :nodejs {:scripts {:make    "./node_modules/.bin/gulp"
                     :clean   "./node_modules/.bin/gulp clean"
                     :watch   "GULP_IS_WATCH=true ./node_modules/.bin/gulp watch"}}

  :node-dependencies [[bluebird "^2.3.2"]
                      [browserify "^5.11.2"]
                      [connect "^3.2.0"]
                      [del "^0.1.3"]
                      [es6ify "^1.3.0"]
                      [font-awesome "^4.2.0"]
                      [gulp "^3.8.8"]
                      [gulp-autoprefixer "^0.0.10"]
                      [gulp-cache "^0.2.2"]
                      [gulp-concat "^2.4.0"]
                      [gulp-debug "^1.0.1"]
                      [gulp-embedlr "^0.5.2"]
                      [gulp-htmlmin "^0.2.0"]
                      [gulp-if "^1.2.4"]
                      [gulp-imagemin "^1.0.1"]
                      [gulp-jshint "^1.8.4"]
                      [gulp-less "^1.3.5"]
                      [gulp-livereload "^2.1.1"]
                      [gulp-minify-css "^0.3.8"]
                      [gulp-notify "^1.6.0"]
                      [gulp-postcss "^1.0.2"]
                      [gulp-rev "^1.1.0"]
                      [gulp-sourcemaps "^1.1.5"]
                      [gulp-template "^1.1.0"]
                      [gulp-uglify "^1.0.1"]
                      [gulp-util "^3.0.1"]
                      [gulp-compile-handlebars "^0.2.0"]
                      [open "^0.0.5"]
                      [react "^0.11.1"]
                      [serve-static "^1.6.1"]
                      [vinyl-buffer "^1.0.0"]
                      [vinyl-source-stream "^1.0.0"]
                      [watchify "^1.0.2"]]
  )
