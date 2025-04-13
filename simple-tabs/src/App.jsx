// vim: set ts=2 sw=2 expandtab:
import { useState } from "react";
import { Header } from "./components/header";
import { TabSection } from "./components/TabSection";
import { TabHeaderRow } from "./components/TabHeaderRow";
import { TabHeader } from "./components/TabHeader";
import { TabContent } from "./components/TabContent";
export default function App() {
  const [currentTab, setCurrentTab] = useState("Home");
  const handleChangeTab = (tabName) => {
    setCurrentTab(tabName);
  };
  const tabs = [
    "Home",
    "Introduction",
    "Basics",
    "Practice",
    "Projects",
    "Resources",
    "Community",
    "Progress",
  ];
  return (
    <>
      <Header />
      <TabSection>
        <TabHeaderRow>
          {tabs.map((tab) => {
            return (
              <TabHeader
                key={tab}
                name={tab}
                isActive={currentTab === tab}
                handleClick={handleChangeTab}
              />
            );
          })}
        </TabHeaderRow>
        <TabContent currentTab={currentTab} />
      </TabSection>
    </>
  );
}
