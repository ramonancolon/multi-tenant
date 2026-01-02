import { headers } from "next/headers";

export default function DebugPage() {
  const headersList = headers();
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
        <strong>Fix:</strong> Ensure your middleware matcher includes this path 
        and that your config.ts has a key for the "Host" value shown above.
      </p>
    </div>
  );
}