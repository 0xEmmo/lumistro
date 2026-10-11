export const site = {
  name: "Emmanuel Balogun",
  role: "Frontend & Full-Stack Developer",
  location: "Lagos, Nigeria",
  timezone: "Africa/Lagos",
  email: "lumistrodev@gmail.com",
  url: "https://lumistro.vercel.app",
  revision: "2026.10",
  availability: "Open to frontend & full-stack roles",
  openTo: ["Full-time", "Contract", "Freelance"],
  links: { github: "https://github.com/0xEmmo", x: "https://x.com/lumistro", linkedin: "https://www.linkedin.com/in/emmanuel-balogun-a40844440", instagram: "https://www.instagram.com/lumistro_/" },
} as const;

export const statement = {
  headline: "I build the whole thing, and then keep it running.",
  lede: "I'm a frontend and full-stack developer in Lagos. I build mobile-first interfaces with React, Next.js and TypeScript, and the systems behind them — Node and Express APIs, tRPC, Supabase and Postgres, payments, webhooks and AI features.",
};

export const figures = [
  { value: "9", unit: "projects", label: "Events, food, commerce, sport, AI and automation" },
  { value: "6", unit: "live", label: "Public deployments you can open right now" },
  { value: "1", unit: "approach", label: "Design the interface, build the system, own the outcome" },
];

export const principles = [
  { id: "P-01", rule: "Make the first screen useful.", note: "A visitor should understand what a product is, who it is for and what to do next without waiting for a long animation or a second round trip." },
  { id: "P-02", rule: "Design for the device people actually have.", note: "Responsive is not a smaller desktop. I start with the phone, the network and the context a person is in when they need the product." },
  { id: "P-03", rule: "One source of truth beats three clever copies.", note: "Shared rules, typed data and reusable components keep interfaces consistent and make changes safer as a project grows." },
  { id: "P-04", rule: "A failure should tell someone what to do next.", note: "Empty states, errors and loading states are product surfaces. They should explain the situation instead of leaving the user staring at a broken screen." },
  { id: "P-05", rule: "Ship the interface the value needs.", note: "Sometimes that means a polished React product; sometimes it means a focused landing page or a fast tool. The right build is the one that helps the user sooner." },
  { id: "P-06", rule: "Keep the visual system intentional.", note: "Tokens, type, spacing and roles make a product feel like one product instead of a collection of screens assembled at different times." },
];

export const stack = [
  { group: "Languages", items: [{ name: "TypeScript", note: "Typed code across the interface, the API and the database layer" }, { name: "JavaScript", note: "Interactive web products, APIs and browser experiences" }, { name: "SQL", note: "Postgres and MySQL schemas, migrations and row-level security policies" }, { name: "HTML / CSS", note: "Semantic structure, responsive layouts and custom visual systems" }] },
  { group: "Frontend", items: [{ name: "React", note: "Product interfaces, dashboards and reusable component systems" }, { name: "Next.js (App Router)", note: "Server and client components, API routes, middleware and SEO metadata" }, { name: "Tailwind CSS / shadcn/ui", note: "Consistent responsive foundations with room for a specific visual voice" }, { name: "Zustand / TanStack Query", note: "Client state for carts and sessions; cached, typed server data" }, { name: "Vite / CSS Modules", note: "Fast builds and hand-written styles when a design needs its own vocabulary" }] },
  { group: "Backend & data", items: [{ name: "Node.js / Express", note: "API servers, Next.js route handlers and scheduled jobs" }, { name: "tRPC", note: "End-to-end typed APIs from the database to React hooks" }, { name: "Supabase / Postgres", note: "Auth, row-level security, realtime subscriptions and storage" }, { name: "MySQL / Drizzle ORM", note: "Typed schemas and checked-in migrations" }, { name: "Payments & webhooks", note: "Paystack and Flutterwave checkout, server-side verification and webhook reconciliation" }] },
  { group: "Delivery & AI", items: [{ name: "Git / GitHub", note: "Versioned work, collaboration and a readable project history" }, { name: "Vercel", note: "Preview-first deployment and a short path from build to live URL" }, { name: "Testing", note: "Vitest and Node test suites for business logic and access rules" }, { name: "AI integrations", note: "LLM features with guardrails placed inside real product workflows" }] },
];

export const profile = {
  paragraphs: [
    "I'm a frontend and full-stack developer based in Lagos. I work across the visible part of a product — the page, the flow, the brand — and the practical part underneath it that makes the experience hold together.",
    "My projects have taken me from restaurant operations and event discovery to fantasy sports, commerce, street food and AI-powered tools. I like work with a real user, a real constraint, and a reason to exist beyond looking impressive in a browser tab.",
    "On the frontend I build with React, Next.js, TypeScript and Tailwind CSS. On the backend I work with Node and Express, tRPC, Supabase and Postgres, MySQL with Drizzle, payment providers and their webhooks, and AI APIs — and I ship on Vercel.",
  ],
  seeking: "I'm looking for a frontend or full-stack role — remote or in Lagos — where thoughtful design and solid implementation are treated as partners.",
};
