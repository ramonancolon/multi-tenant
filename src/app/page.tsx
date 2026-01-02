import { headers } from "next/headers";

export default async function DebugPage() {
  // 1. Await the headers (Required in Next.js 15+)
  const headersList = await headers();
  
  const host = headersList.get("host");
  const xForwardedHost = headersList.get("x-forwarded-host");

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>⚠️ Middleware Bypass Detected</h1>
      <p>The request hit the root page instead of being rewritten to a tenant.</p>
      
      <div style={{ background: "#f0f0f0", padding: 20, borderRadius: 8, marginTop: 20 }}>
        <h3>Debug Info:</h3>
        <p><strong>Host Header:</strong> {host}</p>
        <p><strong>X-Forwarded-Host:</strong> {xForwardedHost || "Missing"}</p>
      </div>

      <p style={{ marginTop: 20 }}>
        <strong>Fix:</strong> Add the value shown in "Host Header" to your <code>config.ts</code> file.
      </p>
    </div>
  );
}