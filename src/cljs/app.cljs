(ns app
  (:require [logger :refer [log]]
            [repl :refer [connect-to-repl]]
            [quiescent :as q :include-macros true]
            [quiescent.dom :as d]))

(set! (.-repl js/window) connect-to-repl)

(log "yes")

(q/defcomponent Hello [{:keys [name]}]
  (d/text {} (str "Hello " name)))

(defn $ [selector]
  (.querySelector js/document selector))

(defn $$ [selector]
  (.querySelectorAll js/document selector))

(def app-state {:name "torgeir"})

(q/render (Hello app-state) ($ ".app"))
