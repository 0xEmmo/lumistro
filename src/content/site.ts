export const site = {
  name: "Emmanuel Balogun",
  role: "Frontend & Full-Stack Developer",
  location: "Lagos, Nigeria",
  timezone: "Africa/Lagos",
  email: "lumistrodev@gmail.com",
  url: "https://lumistro.vercel.app",
  revision: "2026.10",
  availability: "Open to frontend & full-stack opportunities",
  openTo: ["Full-time", "Contract", "Freelance"],
  links: { github: "https://github.com/0xEmmo", x: "https://x.com/lumistro", instagram: "https://www.instagram.com/lumistro_/" },
} as const;

export const statement = {
  headline: "I build the whole thing, and then keep it running.",
  lede: "I'm a frontend and full-stack developer in Lagos. I build responsive websites, dashboards, platforms, AI tools, and automation systems — taking an idea from its first interface to a live product people can actually use.",
};

export const figures = [
  { value: "8", unit: "projects", label: "Food, events, commerce, sport, restaurants and AI" },
  { value: "4", unit: "live", label: "Public deployments you can open right now" },
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
  { group: "Languages", items: [{ name: "JavaScript", note: "Interactive web products, APIs and browser experiences" }, { name: "TypeScript", note: "Safer application code and clearer contracts as products grow" }, { name: "HTML / CSS", note: "Semantic structure, responsive layouts and custom visual systems" }] },
  { group: "Interface", items: [{ name: "React", note: "Product interfaces, dashboards and reusable component systems" }, { name: "Vite", note: "Fast front-end builds for focused web applications and experiments" }, { name: "Tailwind CSS", note: "Consistent responsive foundations with room for a specific visual voice" }, { name: "CSS Modules", note: "Hand-written styles when the design system deserves its own vocabulary" }] },
  { group: "Server & data", items: [{ name: "Node.js", note: "Server-side logic, API routes and integrations" }, { name: "REST APIs", note: "Connecting interfaces to data, services and operational workflows" }, { name: "Supabase", note: "Auth, data, storage and practical backend building blocks" }, { name: "SQL", note: "Thinking clearly about records, relationships and the data a screen depends on" }] },
  { group: "Delivery & AI", items: [{ name: "Git / GitHub", note: "Versioned work, collaboration and a readable project history" }, { name: "Vercel", note: "Preview-first deployment and a short path from build to live URL" }, { name: "AI integrations", note: "Useful AI features placed inside real product workflows" }, { name: "Automation", note: "Removing repetitive steps from content, operations and reporting" }] },
];

export const profile = {
  paragraphs: [
    "I'm a frontend and full-stack developer based in Lagos. I work across the visible part of a product — the page, the flow, the brand — and the practical part underneath it that makes the experience hold together.",
    "My projects have taken me from restaurant operations and event discovery to fantasy sports, commerce, street food and AI-powered tools. I like work with a real user, a real constraint, and a reason to exist beyond looking impressive in a browser tab.",
    "I build with JavaScript, React, TypeScript, Vite, Tailwind CSS, APIs, Supabase and Vercel, while staying comfortable moving between interface decisions and the systems that support them.",
  ],
  seeking: "I'm looking for a frontend or full-stack role, freelance project or collaboration where thoughtful design and solid implementation are treated as partners.",
};
