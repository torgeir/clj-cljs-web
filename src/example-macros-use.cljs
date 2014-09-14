(ns example-macros-use
  (:require [remember.stuff :as r])
  (:require-macros [remember.macros :as r]))

(defn macro-use
  "fn that uses a macro"
  []
  (r/remember
    (r/stuff :another)))
