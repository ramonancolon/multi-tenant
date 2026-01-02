import { notFound } from "next/navigation";
import { getTenant } from "@/tenants/config";
import ParallaxLayout from "@/components/ClientAParallax";
import { Tenant } from "@/lib/types";

// 1. Force dynamic rendering so it updates instantly
export const dynamic = "force-dynamic";

// 2. Simple Layout Wrapper
const StandardLayout = ({ tenant }: { tenant: Tenant }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-2xl p-10 bg-white shadow-xl rounded-xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{tenant.name}</h1>
      <p className="text-lg text-gray-600">{tenant.content.description}</p>
    </div>
  </div>
);

// Layout Registry
const LayoutRegistry = {
  parallax: ParallaxLayout,
  standard: StandardLayout,
  minimal: StandardLayout,
};

export default function RootHomePage() {
  // 3. HARDCODE: We are forcibly loading Ramona's data
  // This bypasses all routing logic. If this file runs, your site LOADS.
  const domain = "ramonacolon.dev";
  const tenant = getTenant(domain);

  console.log("------------------------------------------------");
  console.log("🚀 ROOT PAGE LOADING FOR:", domain);
  console.log("Found Tenant:", tenant ? "YES" : "NO");
  console.log("------------------------------------------------");

  if (!tenant) {
    return (
        <div>
            <h1>Error: Configuration Missing</h1>
            <p>Could not find data for {domain} in config.ts</p>
        </div>
    );
  }

  const LayoutComponent = LayoutRegistry[tenant.layout] || StandardLayout;
  return <LayoutComponent tenant={tenant} />;
}