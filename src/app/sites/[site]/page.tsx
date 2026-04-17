import { notFound } from "next/navigation";
import { getTenant } from "@/tenants/config";
import ParallaxLayout from "@/components/ClientAParallax";
import WikiGeneratorForm from "@/components/WikiGeneratorForm"; // <-- 1. Import the form we built
import { Tenant } from "@/lib/types";

const StandardLayout = ({ tenant }: { tenant: Tenant }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-2xl p-10 bg-white shadow-xl rounded-xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{tenant.name}</h1>
      <p className="text-lg text-gray-600">{tenant.content.description}</p>
    </div>
  </div>
);

// 2. Create the Wiki Layout Wrapper
const WikiLayout = ({ tenant }: { tenant: Tenant }) => (
  <main style={{ backgroundColor: tenant.theme.secondaryColor, minHeight: '100vh', padding: '2rem' }}>
    <div style={{ maxWidth: '600px', margin: '0 auto', color: tenant.theme.primaryColor }}>
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{tenant.content.headline}</h1>
        <p className="text-lg opacity-80">{tenant.content.description}</p>
      </header>
      
      {/* The client component that talks to the /api/generate-wiki route */}
      <WikiGeneratorForm />
    </div>
  </main>
);

// Layout Registry
const LayoutRegistry: Record<string, React.FC<{ tenant: Tenant }>> = {
  parallax: ParallaxLayout,
  standard: StandardLayout,
  "wiki-app": WikiLayout, // <-- 3. Register the new layout
  minimal: StandardLayout, // Fallback
};

interface PageProps {
  params: Promise<{ site: string }>;
}

export default async function TenantPage({ params }: PageProps) {
  const { site } = await params;
  const domain = decodeURIComponent(site);
  const tenant = getTenant(domain);

  if (!tenant) notFound();

  // Dynamic Component Selection
  const LayoutComponent = LayoutRegistry[tenant.layout] || StandardLayout;
  
  return <LayoutComponent tenant={tenant} />;
}