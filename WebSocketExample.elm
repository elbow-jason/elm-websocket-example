module ElmWebSocket where

import Signal
import WebSocket
import Graphics.Element (..)

import Html (..)
-- import Time (delay, second)

-- connect to localhost websocket
main = Signal.map writeMessage (connection (Signal.constant "connected?"))

connection = WebSocket.connect "ws://localhost:8001"

writeMessage : String -> Html
writeMessage msg =
  h1 [] [text ("server response: " ++ msg)]
