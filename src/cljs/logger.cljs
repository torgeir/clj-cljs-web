(ns logger)

(defn log
  "console.log()"
  [& args]
  (.log js/console (apply pr-str args)))

