import { ArrowLeftRight, Clock, House, type LucideIcon } from "lucide-react";
interface SidebarItem {
  href: string;
  title: string;
  icon: LucideIcon;
}
export const DashboardSidebar: SidebarItem[] = [
  {
    href: "/dashboard",
    title: "Home",
    icon: House,
  },
  {
    href: "/transfer",
    title: "Transfer",
    icon: ArrowLeftRight,
  },
  {
    href: "/transactions",
    title: "Transactions",
    icon: Clock,
  },
];
