(ns web
  (:gen-class)
  (:require [org.httpkit.server :refer [run-server]]
            [compojure.core :refer [defroutes GET]]
            [compojure.route :refer [resources]]))

(def stop-server-fn (atom nil))

(defroutes app
  (GET "/" [] (clojure.java.io/resource "public/index.html"))
  (resources "/"))

(defn start-server
  "starts a server, returns a fn to stop it"
  []
  (reset! stop-server-fn
          (run-server app {:port 3000})))

(defn stop-server
  "derefs and calls the fn to stops the server"
  []
  (@stop-server-fn))

(defn -main [& args]
  (start-server)
  (println "up on http://localhost:3000"))
