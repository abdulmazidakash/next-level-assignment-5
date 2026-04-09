import { LucideIcon } from "lucide-react";

export type Category = {
    icon: LucideIcon;
    label: string;
    visibility: "PUBLIC" | "PRIVATE";
    type: "FREE" | "PAID";
};