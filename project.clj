(defproject hello-repl "0.1.0-SNAPSHOT"

  :description "clj-cljs-template"

  :url "https://github.com/torgeir/clj-cljs-browser-repl-vim-fireplace-setup"

  :dependencies [[org.clojure/clojurescript "0.0-2280"]
                 [org.clojure/clojure "1.6.0"]
                 [compojure "1.1.8"]
                 [http-kit "2.1.16"]]

  :hooks [leiningen.cljsbuild]

  :source-paths ["src/clj"]

  :main web

  :profiles {
             :prod {:cljsbuild {:builds [{:source-paths ["src/cljs"]
                                          :compiler {:output-to "target/classes/public/js/app.js"
                                                     :externs ["externs.js"]
                                                     :optimizations :advanced
                                                     :pretty-print false}}]}}

             :dev {:plugins [[lein-cljsbuild "1.0.3"]]
                   :dependencies [[com.cemerick/piggieback "0.1.3"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :cljsbuild {:builds [{:source-paths ["src/cljs"]
                                         :compiler {:output-to  "target/classes/public/js/app.js"
                                                    ; :output-dir "target/classes/public/js"
                                                    ; :source-map "target/classes/public/js/app.js.map"
                                                    :externs ["externs.js"]
                                                    :optimizations :whitespace
                                                    :pretty-print true}}]}}})
