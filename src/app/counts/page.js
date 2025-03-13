
import dynamic from "next/dynamic";
import { fetchHostelCounts } from "@/lib/LocationFetch";
const HostelCountClient = dynamic(() => import("../components/HostelCountClient"), {
  loading: () => <p>Loading...</p>,
});

export default async function HostelCountPage() {
  const hostelCounts = await fetchHostelCounts();
  return <HostelCountClient hostelCounts={hostelCounts} />;
}
