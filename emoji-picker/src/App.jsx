import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { Theme } from "emoji-picker-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [theme, setTheme] = useState("light");

  let pageBgClassName = "w-screen h-screen";
  let titleClassName =
    "text-3xl font-bold px-4 py-3 rounded-xl text-center inline-block";
  let themeIconColor = "";
  let editorOuterBg = "rounded-lg shadow-inner p-6";
  let editorInnerBg =
    "w-full h-full p-5 rounded-md resize-none outline-none focus:ring-2 focus:ring-blue-500";
  if (theme === "dark") {
    pageBgClassName += " bg-gray-900 text-white";
    titleClassName += " bg-gray-800";
    editorOuterBg += " bg-gray-800";
    editorInnerBg += " bg-gray-900";
    themeIconColor += "#ffffff";
  } else {
    pageBgClassName += " bg-sky-200";
    titleClassName += " bg-amber-50";
    editorOuterBg += " bg-amber-50";
    editorInnerBg += " bg-white";
    themeIconColor += "#033792";
  }
  return (
    <>
      <div className={pageBgClassName}>
        <div className="relative flex justify-center items-center py-4 border-b border-gray-700">
          <h1 className={titleClassName}>Emoji Picker</h1>
          <div className="absolute right-4">
            <button
              className="hover:bg-gray-400 p-2 cursor-pointer rounded-full transition duration-200 ease-in"
              title="Toggle Theme"
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
              }}
            >
              <FontAwesomeIcon
                icon={faCircleHalfStroke}
                size="2xl"
                style={{ color: themeIconColor }}
              />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 px-4 py-4 h-10/12">
          <div className="flex justify-center items-center bg-amber-50 rounded-lg overflow-scroll">
            <EmojiPicker theme={theme} width="100%" height="100%" />
          </div>
          <div className={editorOuterBg}>
            <textarea
              className={editorInnerBg}
              placeholder="Paste emojis here..."
            />
          </div>
        </div>
      </div>
    </>
  );
}
