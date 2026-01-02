import { notFound } from "next/navigation";
import { getTenant } from "@/tenants/config";
import ParallaxLayout from "@/components/ClientAParallax";
import { Tenant } from "@/lib/types";

export const dynamic = "force-dynamic";

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
  minimal: StandardLayout, // Fallback
};

interface PageProps {
  params: Promise<{ site: string }>;
}

export default async function TenantPage({ params }: PageProps) {
  const { site } = await params;
  const domain = decodeURIComponent(site);

 console.log("----------------------------------------------");
  console.log("🔍 DEBUG PAGE RENDER:");
  console.log("1. Raw Site Param:", site);
  console.log("2. Decoded Domain:", domain);
  
  const tenant = getTenant(domain);
  
  console.log("3. Tenant Found?", tenant ? "✅ YES" : "❌ NO");
  console.log("----------------------------------------------");

  if (!tenant) notFound();

  // Dynamic Component Selection
  const LayoutComponent = LayoutRegistry[tenant.layout] || StandardLayout;
  
  return <LayoutComponent tenant={tenant} />;
}