export function ServiceIcon({ id }: { id: string }) {
  switch (id) {
    case "process":
      return <ProcessIcon />;
    case "implementation":
      return <ImplementationIcon />;
    case "development":
      return <DevelopmentIcon />;
    case "migration":
      return <MigrationIcon />;
    case "support":
      return <SupportIcon />;
    case "api":
      return <ApiIcon />;
    case "dashboard":
      return <DashboardIcon />;
    case "accounting":
      return <AccountingIcon />;
    default:
      return <ProcessIcon />;
  }
}

function ProcessIcon() {
  return (
    <svg className="svc-art" viewBox="0 0 192 140" fill="none" aria-hidden>
      <rect x="18" y="50" width="44" height="40" rx="10" fill="#fff" />
      <rect x="28" y="64" width="24" height="6" rx="3" fill="#e6e2dc" />
      <rect x="28" y="74" width="16" height="6" rx="3" fill="#e6e2dc" />
      <path d="M66 70h16" stroke="#d4cfc8" strokeWidth="2" strokeLinecap="round" />
      <path d="M78 66l6 4-6 4" fill="#d4cfc8" />
      <rect x="86" y="50" width="44" height="40" rx="10" fill="#fff" />
      <rect x="96" y="64" width="24" height="6" rx="3" fill="#e6e2dc" />
      <rect x="96" y="74" width="16" height="6" rx="3" fill="#e6e2dc" />
      <path d="M134 70h10" stroke="#d4cfc8" strokeWidth="2" strokeLinecap="round" />
      <path d="M140 66l6 4-6 4" fill="#2f00ff" />
      <rect x="148" y="50" width="28" height="40" rx="10" fill="#fff" />
      <circle cx="162" cy="70" r="4" fill="#2f00ff" />
    </svg>
  );
}

function ImplementationIcon() {
  return (
    <svg className="svc-art" viewBox="0 0 192 140" fill="none" aria-hidden>
      <rect x="48" y="28" width="40" height="40" rx="10" fill="#fff" />
      <rect x="104" y="28" width="40" height="40" rx="10" fill="#fff" />
      <rect x="48" y="76" width="40" height="40" rx="10" fill="#fff" />
      <rect x="104" y="76" width="40" height="40" rx="10" fill="#fff" />
      <rect x="60" y="40" width="16" height="16" rx="4" fill="#eceae6" />
      <rect x="116" y="40" width="16" height="16" rx="4" fill="#2f00ff" />
      <rect x="60" y="88" width="16" height="16" rx="4" fill="#eceae6" />
      <rect x="116" y="88" width="16" height="16" rx="4" fill="#eceae6" />
    </svg>
  );
}

function DevelopmentIcon() {
  return (
    <svg className="svc-art" viewBox="0 0 192 140" fill="none" aria-hidden>
      <rect x="36" y="30" width="120" height="80" rx="12" fill="#fff" />
      <path
        d="M58 58l-10 12 10 12"
        stroke="#c8c3bc"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M134 58l10 12-10 12"
        stroke="#c8c3bc"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="80" y="66" width="32" height="8" rx="4" fill="#2f00ff" />
    </svg>
  );
}

function MigrationIcon() {
  return (
    <svg className="svc-art" viewBox="0 0 192 140" fill="none" aria-hidden>
      <rect x="24" y="38" width="52" height="64" rx="12" fill="#fff" />
      <rect x="36" y="52" width="28" height="6" rx="3" fill="#e6e2dc" />
      <rect x="36" y="64" width="20" height="6" rx="3" fill="#e6e2dc" />
      <rect x="36" y="76" width="24" height="6" rx="3" fill="#e6e2dc" />
      <path d="M86 70h20" stroke="#2f00ff" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M100 64l8 6-8 6" fill="#2f00ff" />
      <rect x="116" y="38" width="52" height="64" rx="12" fill="#fff" />
      <rect x="128" y="52" width="28" height="6" rx="3" fill="#e6e2dc" />
      <rect x="128" y="64" width="20" height="6" rx="3" fill="#e6e2dc" />
      <rect x="128" y="76" width="24" height="6" rx="3" fill="#e6e2dc" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg className="svc-art" viewBox="0 0 192 140" fill="none" aria-hidden>
      <rect x="42" y="36" width="108" height="52" rx="16" fill="#fff" />
      <rect x="58" y="52" width="48" height="8" rx="4" fill="#e6e2dc" />
      <rect x="58" y="66" width="28" height="8" rx="4" fill="#e6e2dc" />
      <path d="M78 88v8l12-8h8" fill="#fff" />
      <circle cx="132" cy="62" r="10" fill="#2f00ff" />
      <path
        d="M128.2 62.2l2.4 2.4 5.4-5.4"
        stroke="#fff"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ApiIcon() {
  return (
    <svg className="svc-art" viewBox="0 0 192 140" fill="none" aria-hidden>
      <rect x="22" y="48" width="54" height="44" rx="12" fill="#fff" />
      <rect x="34" y="64" width="30" height="8" rx="4" fill="#e6e2dc" />
      <path d="M80 70h32" stroke="#d4cfc8" strokeWidth="2" strokeLinecap="round" />
      <circle cx="96" cy="70" r="5" fill="#2f00ff" />
      <rect x="116" y="48" width="54" height="44" rx="12" fill="#fff" />
      <rect x="128" y="64" width="30" height="8" rx="4" fill="#e6e2dc" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg className="svc-art" viewBox="0 0 192 140" fill="none" aria-hidden>
      <rect x="28" y="32" width="56" height="76" rx="12" fill="#fff" />
      <rect x="40" y="46" width="32" height="6" rx="3" fill="#e6e2dc" />
      <rect x="40" y="78" width="10" height="18" rx="3" fill="#eceae6" />
      <rect x="54" y="68" width="10" height="28" rx="3" fill="#2f00ff" />
      <rect x="68" y="74" width="10" height="22" rx="3" fill="#eceae6" />
      <rect x="92" y="32" width="72" height="34" rx="12" fill="#fff" />
      <rect x="104" y="44" width="28" height="10" rx="5" fill="#e6e2dc" />
      <rect x="92" y="74" width="72" height="34" rx="12" fill="#fff" />
      <rect x="104" y="86" width="48" height="10" rx="5" fill="#e6e2dc" />
    </svg>
  );
}

function AccountingIcon() {
  return (
    <svg className="svc-art" viewBox="0 0 192 140" fill="none" aria-hidden>
      <rect x="56" y="24" width="80" height="96" rx="12" fill="#fff" />
      <rect x="70" y="40" width="36" height="8" rx="4" fill="#e6e2dc" />
      <rect x="70" y="56" width="52" height="6" rx="3" fill="#eceae6" />
      <rect x="70" y="68" width="52" height="6" rx="3" fill="#eceae6" />
      <rect x="70" y="80" width="36" height="6" rx="3" fill="#eceae6" />
      <rect x="70" y="96" width="24" height="10" rx="5" fill="#2f00ff" />
    </svg>
  );
}
