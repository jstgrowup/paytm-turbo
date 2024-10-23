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
// 607
export const DashboardSidebarLinks: SidebarItem[] = [
  {
    href: "/",
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
    href: "/p2p",
    title: "P2P Transafer",
    icon: Send,
  },
];
