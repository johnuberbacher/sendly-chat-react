import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import {BiPaperPlane} from "react-icons/bi";
import {BiSmile} from "react-icons/bi";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

function ChatInput() {
  const [input, setInput] = useState("");
  const [showEmojis, setShowEmojis] = useState(false);

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
    setShowEmojis(!showEmojis)
  };

    return (
      <div className="chat-input position-relative">
        <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Send a message..."
        className="form-control border-0 bg-white rounded-pill pe-5 hover-shadow"/>
        <div className="position-absolute top-50 end-0 translate-middle-y d-flex flex-row justify-content-end">
          <a href="#" className="btn btn-light rounded-circle btn-send d-flex align-items-center justify-content-center position-relative">
            <BiSmile onClick={() => setShowEmojis(!showEmojis)} className="text-primary" size=" bx-sm"/>
            {showEmojis && (
              <div className="position-absolute bottom-0 end-0">
                <Picker onSelect={addEmoji} />
              </div>
            )}
          </a>
          <Button className="btn btn-primary rounded-circle btn-send d-flex align-items-center justify-content-center p-1 mx-3">
            <BiPaperPlane className="text-white" size="bx-sm"/>
          </Button>
        </div>
      </div>
    );
}

export default ChatInput;
