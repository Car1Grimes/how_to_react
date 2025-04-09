import EmojiPicker from "emoji-picker-react";

export default function App() {
  return (
    <>
      <div className="bg-sky-200 w-screen h-screen">
        <div className="flex justify-center py-4">
          <h1 className="text-3xl bg-amber-100 px-4 py-3 rounded-xl text-center inline-block">
            Emoji Picker
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-6 px-4 py-4 h-10/12">
          <div className="bg-amber-50 rounded-lg"></div>
          <div className="bg-amber-50 rounded-lg"></div>
        </div>
      </div>
    </>
  );
}
