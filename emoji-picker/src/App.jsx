import EmojiPicker from "emoji-picker-react";
import { Theme } from "emoji-picker-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <>
      <div className="bg-sky-200 w-screen h-screen">
        <div className="relative flex justify-center items-center py-4">
          <h1 className="text-3xl bg-amber-100 px-4 py-3 rounded-xl text-center inline-block">
            Emoji Picker
          </h1>
          <div className="absolute right-4">
            <FontAwesomeIcon
              icon={faCircleHalfStroke}
              size="2xl"
              style={{ color: "#033792" }}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 px-4 py-4 h-10/12">
          <div className="flex justify-center items-center bg-amber-50 rounded-lg overflow-scroll">
            <EmojiPicker width="100%" height="100%" />
          </div>
          <div className="bg-amber-50 rounded-lg p-6">
            <textarea
              className="bg-white w-full h-full p-5"
              placeholder="Paste emojis here..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
