//
import { HomeContent } from "./tab-content/HomeContent";
import { IntroContent } from "./tab-content/IntroContent";
import { BasicsContent } from "./tab-content/BasicsContent";
import { PracticeContent } from "./tab-content/PracticeContent";
import { ProjectsContent } from "./tab-content/ProjectsContent";
import { ResourceContent } from "./tab-content/ResourceContent";
import { CommunityContent } from "./tab-content/CommunityContent";
import { ProgressContent } from "./tab-content/ProgressContent";

export function TabContent({ currentTab }) {
  const tabContentMap = {
    Home: <HomeContent />,
    Introduction: <IntroContent />,
    Basics: <BasicsContent />,
    Practice: <PracticeContent />,
    Projects: <ProjectsContent />,
    Resources: <ResourceContent />,
    Community: <CommunityContent />,
    Progress: <ProgressContent />,
  };
  return <div className="w-screen p-6">{tabContentMap[currentTab]}</div>;
}
