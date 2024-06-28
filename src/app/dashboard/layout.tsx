import { Sidebar } from "@/components/navigations";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { SidebarProvider } from "@/contexts/SidebarContext";
import type { ChildType } from "@/types";

const RootLayout = ({ children }: ChildType) => (
  <ResizablePanelGroup
    direction="horizontal"
    className="max-h-screen w-full rounded-lg border"
  >
    <SidebarProvider>
      <ResizablePanel defaultSize={17}>
        <Sidebar />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={83}>{children}</ResizablePanel>
    </SidebarProvider>
  </ResizablePanelGroup>
);

export default RootLayout;
