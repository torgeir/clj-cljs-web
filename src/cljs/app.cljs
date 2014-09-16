(ns app
  (:require [logger :refer [log]]
            [quiescent :as q :include-macros true]
            [quiescent.dom :as d]
            [clojure.browser.repl :as repl]))

(log "boyah")

(repl/connect "http://localhost:9000/repl")

(def app-state {:name "bob"})

(q/defcomponent Hello [{:keys [name]}]
  (d/text {} (str "Hello " name)))

(q/render (Hello app-state) (.querySelector js/document ".app"))
