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
  return (
    <>
      <Header />
      <TabSection>
        <TabHeaderRow>
          <TabHeader name="Home" handleClick={handleChangeTab} />
          <TabHeader name="Introduction" handleClick={handleChangeTab} />
          <TabHeader name="Basics" handleClick={handleChangeTab} />
          <TabHeader name="Practice" handleClick={handleChangeTab} />
          <TabHeader name="Projects" handleClick={handleChangeTab} />
          <TabHeader name="Resources" handleClick={handleChangeTab} />
          <TabHeader name="Community" handleClick={handleChangeTab} />
          <TabHeader name="Progress" handleClick={handleChangeTab} />
        </TabHeaderRow>
        <TabContent currentTab={currentTab} />
      </TabSection>
    </>
  );
}
