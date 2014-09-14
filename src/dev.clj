(ns dev)
(use 'ring.adapter.jetty)
(use 'compojure.route)

(defonce server (atom nil))

(defn start-server []
  (reset! server
          (run-jetty (resources "/") {:port 3000 :join? false}))
  (.start @server))

(defn stop-server []
  (.stop @server))
