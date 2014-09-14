(ns app
  (:require [clojure.browser.repl :as repl]
            [example-macros-use :refer [macro-use]]))

(repl/connect "http://localhost:9000/repl")

(defn log
  [& args]
  (.log js/console (apply pr-str args)))

(log "yes")

(log (macro-use))
