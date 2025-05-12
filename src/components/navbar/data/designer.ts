import { CiSearch } from "react-icons/ci";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import type { Designer } from "../types/designer";

export const designerProps: Designer[] = [
  {
    id: 1,
    name: "Browse Freelancers",
    icon: CiSearch,
  },
  {
    id: 2,
    name: "Purchase Services",
    icon: BiPurchaseTagAlt,
  },
  {
    id: 3,
    name: "Product Design",
    icon: BiPurchaseTagAlt,
  },
  {
    id: 4,
    name: "Post a Full-Time Job",
    icon: IoDocumentTextOutline,
  },
];
