//

import { TabContentTitle } from "../common/TabContentTitle";
export function BasicsContent() {
  return (
    <div className="space-y-6">
      <TabContentTitle name="Basics" />

      <p className="text-2xl text-gray-700">
        Welcome to the Simple Tabs Project! 🎉 This is your centralized place to
        explore different sections of the app. Use the tabs above to navigate
        through various topics and get hands-on practice.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded shadow">
          <h3 className="text-2xl font-semibold mb-2 text-blue-600">
            Introduction
          </h3>
          <p className="text-white text-xl">
            Start here to understand the purpose and structure of this project.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
          <h3 className="text-2xl font-semibold mb-2 text-green-600">Basics</h3>
          <p className="text-white text-xl">
            Learn the fundamental concepts that power tab-based interfaces in
            React.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
          <h3 className="text-2xl font-semibold mb-2 text-purple-600">
            Projects
          </h3>
          <p className="text-white text-xl">
            Discover ideas and challenges to put your skills to the test.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition">
          Explore Tabs →
        </button>
      </div>
    </div>
  );
}
