import { notFound } from "next/navigation";
import { getTenant } from "@/tenants/config";
import ParallaxLayout from "@/components/ClientAParallax";
import WikiGeneratorForm from "@/components/WikiGeneratorForm";
import { Tenant } from "@/lib/types";

// 1. The Standard Layout
const StandardLayout = ({ tenant }: { tenant: Tenant }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-2xl p-10 bg-white shadow-xl rounded-xl">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{tenant.name}</h1>
      <p className="text-lg text-gray-600">{tenant.content.description}</p>
    </div>
  </div>
);

// 2. The Wiki Layout (Defined right here so TypeScript can see it)
const WikiLayout = ({ tenant }: { tenant: Tenant }) => (
  <main style={{ backgroundColor: tenant.theme.secondaryColor, minHeight: '100vh', padding: '2rem' }}>
    <div style={{ maxWidth: '600px', margin: '0 auto', color: tenant.theme.primaryColor }}>
      <header className="mb-8">
        <h1 className="text-4xl font-bold">{tenant.content.headline}</h1>
        <p className="text-lg opacity-80">{tenant.content.description}</p>
      </header>
      
      <WikiGeneratorForm />
    </div>
  </main>
);

// 3. The Typed Layout Registry mapping strings to the components above
const LayoutRegistry: Record<string, React.FC<{ tenant: Tenant }>> = {
  parallax: ParallaxLayout,
  standard: StandardLayout,
  minimal: StandardLayout, // Fallback
  "wiki-app": WikiLayout,
};

interface PageProps {
  params: Promise<{ site: string }>;
}

// 4. The actual Page render
export default async function TenantPage({ params }: PageProps) {
  const { site } = await params;
  const domain = decodeURIComponent(site);
  const tenant = getTenant(domain);

  if (!tenant) notFound();

  // Dynamic Component Selection
  const LayoutComponent = LayoutRegistry[tenant.layout] || StandardLayout;
  
  return <LayoutComponent tenant={tenant} />;
}