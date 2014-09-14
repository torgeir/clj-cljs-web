(ns app
  (:require [clojure.browser.repl :as repl]))

(repl/connect "http://localhost:9000/repl")

(defn log
  "console.log()"
  [& args]
  (.log js/console (apply pr-str args)))

(log "boyah")
