(ns remember.macros)

(defmacro remember
  "creates a set of stuff to remember"
  [& forms]
  `(->> #{} ~@forms))

