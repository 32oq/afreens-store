import { siteData } from "@/utils/data";
import ContactPageClient from "./ContactPageClient";

export const metadata = {
  title: `Contact • ${siteData.name}`,
  description: "Contact Afreen Calligraphy for commissions, custom invitations, and luxury stationery.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
