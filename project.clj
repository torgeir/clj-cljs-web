(defproject hello-repl "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2280"]
                 [compojure "1.1.8"]
                 [ring/ring-jetty-adapter "1.1.1"]]
  :source-paths ["src"]
  :hooks [leiningen.cljsbuild]
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.1.3"]]
                   :plugins [[lein-cljsbuild "1.0.3"]]
                   :cljsbuild {:builds [{:source-paths ["src"],
                                         :compiler {:optimizations :whitespace
                                                    :output-to "resources/public/app.js"
                                                    :pretty-print true}}]}}})
