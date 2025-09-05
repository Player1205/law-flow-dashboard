import { NavLink } from "react-router-dom";
import { 
  Home, 
  MessageCircle, 
  BookOpen, 
  Settings, 
  User, 
  Scale
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Chat", url: "/chat", icon: MessageCircle },
  { title: "Saved Cases", url: "/cases", icon: BookOpen },
  { title: "Settings", url: "/settings", icon: Settings },
  { title: "Profile", url: "/profile", icon: User },
];

export function DashboardSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar className="border-r border-border bg-surface-elevated">
      <SidebarHeader className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Scale className="w-4 h-4 text-text-on-primary" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="text-lg font-semibold text-text-primary">LegalAI</h2>
              <p className="text-sm text-text-secondary">Assistant</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-text-secondary font-medium mb-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="group">
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                          isActive
                            ? 'nav-active'
                            : 'text-text-secondary hover:text-text-primary hover:bg-surface-hover'
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <div className="mt-8 p-4 bg-gradient-accent rounded-xl text-text-on-primary">
            <h3 className="font-semibold mb-2">Premium Features</h3>
            <p className="text-sm opacity-90 mb-3">
              Upgrade to access advanced legal research tools
            </p>
            <button className="w-full bg-white/20 hover:bg-white/30 text-white px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200">
              Upgrade Now
            </button>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}