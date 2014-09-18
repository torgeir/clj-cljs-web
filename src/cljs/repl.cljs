(ns repl
  (:require [clojure.browser.repl :as browser-repl]
            [logger :refer [log]]))

(defn connect-to-repl []
  (browser-repl/connect "http://localhost:9000/repl")
  (log "connected"))
