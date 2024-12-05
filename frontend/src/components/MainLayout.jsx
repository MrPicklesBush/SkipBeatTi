import LeftSidebar from "./components/LeftSidebar";
import { ResizablePanel, ResizablePanelGroup } from "react-router-dom";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    const isMobile = false;

    return (
        <div className="h-screen bg-black text-white flex flex-col">
            MainLayout

            <ResizablePanelGroup>
                {/* Left sidebar */}
                <ResizablePanel defaultSize={20} minSize={isMobile ? 0 : 10} maxSize={30}>
                    left sidebar
                </ResizablePanel>

                {/* Main Content */}
                <ResizablePanel>
                    <Outlet />
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
};

export default MainLayout;