(ns app
  (:require [logger :refer [log]]
            [quiescent :as q :include-macros true]
            [quiescent.dom :as d]
            [clojure.browser.repl :as repl]))

(log "boyah")

(repl/connect "http://localhost:9000/repl")

(q/defcomponent Hello [{:keys [name]}]
  (d/text {} (str "Hello " name)))

(defn $ [selector]
  (.querySelector js/document selector))

(def app-state {:name "r"})
(q/render (Hello app-state) ($ ".app"))
