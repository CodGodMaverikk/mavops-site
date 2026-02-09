export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "The Overseer", href: "/bot" },
  { label: "Clip Dummy", href: "/clipbot" },
  { label: "Merch", href: "/merch" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const MERCH_URL = "https://mavops-shop.fourthwall.com";
export const DISCORD_INVITE = "https://discord.gg/mavops";
export const BOT_INVITE =
  "https://discord.com/api/oauth2/authorize?client_id=1373493681830756415&permissions=8&scope=bot%20applications.commands";

export const STATS = [
  { value: "30+", label: "Commands" },
  { value: "10", label: "Trivia Categories" },
  { value: "AI", label: "Powered" },
  { value: "Multi", label: "Guild Support" },
];

export const BOT_FEATURES = [
  {
    title: "XP & Leveling",
    description:
      "Earn XP from messages, voice chat, Twitch streams, trivia, and events. Anti-spam protection and XP decay keep it fair.",
    icon: "TrendingUp",
  },
  {
    title: "Rank System",
    description:
      "Five tiers — Unranked, Bronze, Silver, Gold, Diamond — with automatic promotions, role rewards, and configurable thresholds.",
    icon: "Award",
  },
  {
    title: "Twitch Integration",
    description:
      "Link Discord to Twitch, rank-based go-live announcements, stream chat XP, viewer tracking, and automatic stream recaps.",
    icon: "Tv",
  },
  {
    title: "AI-Powered Trivia",
    description:
      "10 built-in categories plus custom ones. GPT-4o generates unique questions on a schedule with XP rewards.",
    icon: "Gamepad2",
  },
  {
    title: "Streamer Spotlight",
    description:
      "Showcase community streamers with timed spotlight events, attendance tracking, and XP bonuses for participants.",
    icon: "Star",
  },
  {
    title: "Chess System",
    description:
      "Challenge others to chess with full move validation, visual boards, private game channels, and XP for wins.",
    icon: "Crown",
  },
  {
    title: "AI Moderation",
    description:
      "GPT-4o powered self-promo detection on Twitch, auto-timeouts, AI chat responses, roasts, and shoutout generation.",
    icon: "Shield",
  },
  {
    title: "Full Customization",
    description:
      "Configure 15+ channels, 9 roles, XP rates, rank thresholds, feature toggles, branding, and more via /setup.",
    icon: "Settings",
  },
];

export const BOT_COMMANDS = [
  { name: "/xp", description: "View your XP, level, and rank progress", category: "XP" },
  { name: "/leaderboard", description: "View the server's top 10 XP earners", category: "XP" },
  { name: "/addxp", description: "Add XP to a user with a reason (Admin)", category: "XP" },
  { name: "/removexp", description: "Remove XP from a user with a reason (Admin)", category: "XP" },
  { name: "/addalias", description: "Link an alt username to your account", category: "XP" },
  { name: "/trivia", description: "Manually start or close daily trivia (Admin)", category: "Games" },
  { name: "/cleantrivia", description: "Force cleanup of trivia data (Admin)", category: "Games" },
  { name: "/chess challenge", description: "Challenge another user to a chess match", category: "Games" },
  { name: "/chess accept", description: "Accept a pending chess challenge", category: "Games" },
  { name: "/chess move", description: "Make a move in your active game", category: "Games" },
  { name: "/chess board", description: "Display the current board state", category: "Games" },
  { name: "/chess resign", description: "Resign from your active game", category: "Games" },
  { name: "/chess decline", description: "Decline a pending challenge", category: "Games" },
  { name: "/chess revoke", description: "Revoke your outgoing challenge", category: "Games" },
  { name: "/linktwitch", description: "Link your Discord to your Twitch account", category: "Twitch" },
  { name: "/manuallink", description: "Manually link a user to Twitch (Mod)", category: "Twitch" },
  { name: "/unlink", description: "Remove a Discord-to-Twitch link (Mod)", category: "Twitch" },
  { name: "/listchannels", description: "List all connected Twitch channels", category: "Twitch" },
  { name: "/spotlight", description: "Start a spotlight event for a streamer", category: "Community" },
  { name: "/stopspotlight", description: "End the active spotlight early", category: "Community" },
  { name: "/antispam-status", description: "View anti-spam XP system status", category: "Admin" },
  { name: "/antispam-reset", description: "Reset a user's XP cooldown (Admin)", category: "Admin" },
  { name: "/config status", description: "Check configuration completeness (Admin)", category: "Admin" },
  { name: "/resetconfig", description: "Reset bot config to defaults (Admin)", category: "Admin" },
  { name: "/restartbot", description: "Restart the bot (Admin)", category: "Admin" },
  { name: "/setup branding", description: "Configure bot name, theme, catch phrase", category: "Setup" },
  { name: "/setup channels", description: "Configure 15+ channel assignments", category: "Setup" },
  { name: "/setup roles", description: "Configure rank and special roles", category: "Setup" },
  { name: "/setup features", description: "Enable/disable bot features", category: "Setup" },
  { name: "/setup xp_base", description: "Configure base XP values", category: "Setup" },
  { name: "/setup xp_stream", description: "Configure stream chat XP per rank", category: "Setup" },
  { name: "/setup xp_ranks", description: "Configure rank XP thresholds", category: "Setup" },
  { name: "/setup spotlight", description: "Configure spotlight duration and rewards", category: "Setup" },
  { name: "/setup trivia", description: "Configure trivia schedule and categories", category: "Setup" },
  { name: "/setup voice", description: "Configure voice channel XP settings", category: "Setup" },
  { name: "/setup antispam", description: "Configure anti-spam cooldowns and caps", category: "Setup" },
  { name: "/setup decay", description: "Configure XP decay (progressive or flat)", category: "Setup" },
];

export const COMMAND_CATEGORIES = [
  "All",
  "XP",
  "Games",
  "Twitch",
  "Community",
  "Admin",
  "Setup",
];

export const RANK_TIERS = [
  {
    name: "Unranked",
    color: "#95a5a6",
    xp: "0 - 249",
    perks: "Basic access",
  },
  {
    name: "Bronze",
    color: "#cd7f32",
    xp: "250 - 3,999",
    perks: "5 XP per stream chat message",
  },
  {
    name: "Silver",
    color: "#c0c0c0",
    xp: "4,000 - 7,999",
    perks: "10 XP per stream chat message",
  },
  {
    name: "Gold",
    color: "#ffd700",
    xp: "8,000 - 14,999",
    perks: "25 XP per stream chat message",
  },
  {
    name: "Diamond",
    color: "#00e5ff",
    xp: "15,000+",
    perks: "50 XP per stream chat message + exclusive role",
  },
];

export const BOT_PRICING = [
  {
    tier: "Free",
    price: "$0",
    period: "forever",
    features: [
      "XP System & Leveling",
      "Manual XP Management",
      "Leaderboard",
      "5 Rank Tiers",
      "Auto Role Assignment",
    ],
    cta: "Add to Server",
    highlighted: false,
  },
  {
    tier: "Pro",
    price: "$9.99",
    period: "/month",
    features: [
      "Everything in Free",
      "Voice Channel XP",
      "Streamer Spotlight",
      "AI-Powered Daily Trivia",
      "10 Built-in Categories",
      "Custom Trivia Categories",
    ],
    cta: "Upgrade to Pro",
    highlighted: true,
  },
  {
    tier: "Premium",
    price: "$19.99",
    period: "/month",
    features: [
      "Everything in Pro",
      "Twitch Integration",
      "Stream Chat XP",
      "XP Decay System",
      "Anti-Spam Protection",
      "Stream End Recaps",
      "Chess System",
    ],
    cta: "Go Premium",
    highlighted: false,
  },
  {
    tier: "Enterprise",
    price: "$49.99",
    period: "/month",
    features: [
      "Everything in Premium",
      "Multi-Guild Management",
      "Custom Branding",
      "Priority Support",
      "API Access",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const CLIPBOT_FEATURES = [
  {
    title: "AI Detection",
    description:
      "Our AI watches your stream and automatically detects highlight-worthy moments — kills, clutches, funny reactions.",
    icon: "Brain",
  },
  {
    title: "Auto-Edit",
    description:
      "Clips are automatically trimmed, enhanced with transitions, and optimized for each platform's format.",
    icon: "Scissors",
  },
  {
    title: "Multi-Platform",
    description:
      "Simultaneously upload to TikTok, YouTube Shorts, Instagram Reels, and Facebook Reels.",
    icon: "Share2",
  },
  {
    title: "Analytics",
    description:
      "Track views, engagement, and growth across all platforms from a single dashboard.",
    icon: "BarChart3",
  },
];

export const CLIPBOT_STEPS = [
  {
    step: 1,
    title: "Connect",
    description: "Link your Twitch or YouTube stream to Clip Dummy.",
  },
  {
    step: 2,
    title: "Detect",
    description: "AI monitors your stream and identifies clip-worthy moments.",
  },
  {
    step: 3,
    title: "Upload",
    description:
      "Clips are auto-edited and distributed to your chosen platforms.",
  },
];

export const CLIPBOT_PRICING = [
  {
    tier: "Free",
    price: "$0",
    period: "forever",
    features: [
      "5 Clips/Month",
      "1 Platform",
      "Basic AI Detection",
      "720p Export",
      "Community Support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    tier: "Pro",
    price: "$29",
    period: "/month",
    features: [
      "Unlimited Clips",
      "All Platforms",
      "Advanced AI Detection",
      "1080p Export",
      "Custom Branding",
      "Analytics Dashboard",
      "Priority Support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    tier: "Agency",
    price: "$99",
    period: "/month",
    features: [
      "Everything in Pro",
      "10 Creator Accounts",
      "4K Export",
      "Team Management",
      "API Access",
      "White-Label",
      "Dedicated Account Manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export const CLIPBOT_PLATFORMS = [
  { name: "TikTok", color: "#ff0050" },
  { name: "YouTube Shorts", color: "#ff0000" },
  { name: "Instagram Reels", color: "#e1306c" },
  { name: "Facebook Reels", color: "#1877f2" },
];

export const VALUES = [
  {
    title: "Empower Streamers",
    description:
      "We build tools that help content creators focus on what they do best — entertaining their audience.",
    icon: "Zap",
  },
  {
    title: "Build Communities",
    description:
      "Strong communities are the backbone of gaming. Our tools foster engagement, competition, and belonging.",
    icon: "Users",
  },
  {
    title: "Innovate with AI",
    description:
      "We leverage cutting-edge AI to automate the tedious parts of content creation and community management.",
    icon: "Sparkles",
  },
];

export const FAQ = [
  {
    question: "Is The Overseer free to use?",
    answer:
      "Yes! The Overseer has a free tier that includes XP & leveling, leaderboards, rank tiers, and auto role assignment. Paid tiers unlock features like voice XP, trivia, Twitch integration, and more.",
  },
  {
    question: "When will Clip Dummy be available?",
    answer:
      "Clip Dummy is currently in development. Join our Discord server to get notified when the beta launches and get early access.",
  },
  {
    question: "How do I add The Overseer to my Discord server?",
    answer:
      'Click the "Add to Server" button on The Overseer page, select your server from the dropdown, and authorize the required permissions. Then use /setup to configure channels, roles, and features.',
  },
  {
    question: "What AI features does The Overseer use?",
    answer:
      "The Overseer uses GPT-4o to generate unique daily trivia questions, detect self-promotion in Twitch chat, generate in-character chat responses, and create hype shoutouts for streamers.",
  },
  {
    question: "How do I get support?",
    answer:
      "The fastest way to get support is through our Discord server. You can also email us at support@mavops.org for non-urgent inquiries.",
  },
];

export const FOOTER_LINKS = {
  products: [
    { label: "The Overseer", href: "/bot" },
    { label: "Clip Dummy AI", href: "/clipbot" },
    { label: "Merch Store", href: "/merch" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  community: [
    { label: "Discord", href: DISCORD_INVITE },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
