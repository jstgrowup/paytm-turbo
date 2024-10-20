import {
  ArrowLeftRight,
  Clock,
  House,
  Send,
  type LucideIcon,
} from "lucide-react";
interface SidebarItem {
  href: string;
  title: string;
  icon: LucideIcon;
}
export const DashboardSidebarLinks: SidebarItem[] = [
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
  {
    href: "/transfer",
    title: "P2P Transafer",
    icon: Send,
  },
];
