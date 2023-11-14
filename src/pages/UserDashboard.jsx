import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { UserInfo } from "./tabs/UserInfo";

export function UserDashboard() {
  return (
    <main>
      <Tabs>
        <TabList>
          <Tab>Perfil</Tab>
          <Tab>Reinscripción</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <UserInfo />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  );
}
