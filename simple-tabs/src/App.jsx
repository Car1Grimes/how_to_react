// vim: set ts=2 sw=2 expandtab:
import { Header } from "./components/header";
import { TabSection } from "./components/TabSection";
import { TabHeaderRow } from "./components/TabHeaderRow";
import { TabHeader } from "./components/TabHeader";
export default function App() {
  return (
    <>
      <Header />
      <TabSection>
        <TabHeaderRow>
          <TabHeader name="Home" />
          <TabHeader name="Introduction" />
          <TabHeader name="Basics" />
          <TabHeader name="Practice" />
          <TabHeader name="Projects" />
          <TabHeader name="Resources" />
          <TabHeader name="Community" />
          <TabHeader name="Progress" />
        </TabHeaderRow>
      </TabSection>
    </>
  );
}
