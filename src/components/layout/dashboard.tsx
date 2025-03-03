// Extern
import { Separator } from "@radix-ui/react-separator";

// UI
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Components
import TransitionPageAnimation from "@/components/transition-page-animation";
import ToggleModeButton from "@/components/toggle-mode-button";
import AppSidebar from "./app-sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <header className="flex flex-row justify-between items-center">
          <div className="flex h-16 shrink-0 items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink>Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Product</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="p-4 px-8 flex flex-row items-center gap-4">
            <ToggleModeButton />
            <Avatar>
              <AvatarImage
                src="https://images.genai.works/image_84f620fda2.png"
                alt="@shadcn"
              />
              <AvatarFallback>TN</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <TransitionPageAnimation>
          <div className="flex w-full p-4">{children}</div>
        </TransitionPageAnimation>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
