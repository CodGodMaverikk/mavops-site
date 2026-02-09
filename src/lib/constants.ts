export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "The Overseer", href: "/bot" },
  { label: "ClipBot", href: "/clipbot" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const DISCORD_INVITE = "https://discord.gg/mavops";
export const BOT_INVITE =
  "https://discord.com/api/oauth2/authorize?client_id=mavops-bot";

export const STATS = [
  { value: "25+", label: "Commands" },
  { value: "10", label: "Trivia Categories" },
  { value: "4", label: "Platforms" },
  { value: "Multi", label: "Guild Support" },
];

export const BOT_FEATURES = [
  {
    title: "XP & Leveling",
    description:
      "Reward active members with XP for chatting, voice, and events. Fully customizable multipliers.",
    icon: "TrendingUp",
  },
  {
    title: "Rank System",
    description:
      "Bronze, Silver, Gold, Diamond tiers with automatic promotions and exclusive role rewards.",
    icon: "Award",
  },
  {
    title: "Twitch Integration",
    description:
      "Live stream notifications, viewer rewards, and channel point synchronization.",
    icon: "Tv",
  },
  {
    title: "Trivia & Games",
    description:
      "10+ categories of trivia, leaderboards, and competitive game modes for your community.",
    icon: "Gamepad2",
  },
  {
    title: "Member Spotlight",
    description:
      "Automatically highlight top contributors with weekly/monthly spotlight features.",
    icon: "Star",
  },
  {
    title: "Chess System",
    description:
      "Built-in chess challenges with ELO ratings, tournaments, and leaderboards.",
    icon: "Crown",
  },
  {
    title: "Moderation",
    description:
      "Auto-mod, warning system, temp bans, and audit logging to keep your server safe.",
    icon: "Shield",
  },
  {
    title: "Customization",
    description:
      "Custom commands, welcome messages, reaction roles, and server-specific configurations.",
    icon: "Settings",
  },
];

export const BOT_COMMANDS = [
  { name: "/xp", description: "Check your XP and level", category: "XP" },
  {
    name: "/leaderboard",
    description: "View server XP leaderboard",
    category: "XP",
  },
  {
    name: "/rank",
    description: "View your current rank tier",
    category: "Ranks",
  },
  {
    name: "/rankup",
    description: "Promote to next rank tier",
    category: "Ranks",
  },
  {
    name: "/trivia",
    description: "Start a trivia game session",
    category: "Games",
  },
  {
    name: "/trivia-categories",
    description: "Browse available categories",
    category: "Games",
  },
  {
    name: "/chess",
    description: "Challenge someone to chess",
    category: "Games",
  },
  {
    name: "/chess-elo",
    description: "View chess ELO ratings",
    category: "Games",
  },
  {
    name: "/twitch-link",
    description: "Link your Twitch account",
    category: "Twitch",
  },
  {
    name: "/twitch-notify",
    description: "Set up stream notifications",
    category: "Twitch",
  },
  {
    name: "/twitch-stats",
    description: "View your Twitch stats",
    category: "Twitch",
  },
  {
    name: "/spotlight",
    description: "View current spotlight member",
    category: "Community",
  },
  {
    name: "/nominate",
    description: "Nominate a member for spotlight",
    category: "Community",
  },
  {
    name: "/welcome",
    description: "Configure welcome messages",
    category: "Config",
  },
  {
    name: "/autorole",
    description: "Set up automatic roles",
    category: "Config",
  },
  {
    name: "/reactionrole",
    description: "Create reaction role messages",
    category: "Config",
  },
  {
    name: "/warn",
    description: "Issue a warning to a member",
    category: "Moderation",
  },
  {
    name: "/mute",
    description: "Temporarily mute a member",
    category: "Moderation",
  },
  {
    name: "/ban",
    description: "Ban a member from the server",
    category: "Moderation",
  },
  {
    name: "/audit",
    description: "View moderation audit log",
    category: "Moderation",
  },
  {
    name: "/customcmd",
    description: "Create a custom command",
    category: "Config",
  },
  {
    name: "/serverinfo",
    description: "View server statistics",
    category: "Community",
  },
  {
    name: "/userinfo",
    description: "View member profile info",
    category: "Community",
  },
  {
    name: "/help",
    description: "View all available commands",
    category: "General",
  },
  {
    name: "/ping",
    description: "Check bot response time",
    category: "General",
  },
];

export const COMMAND_CATEGORIES = [
  "All",
  "XP",
  "Ranks",
  "Games",
  "Twitch",
  "Community",
  "Config",
  "Moderation",
  "General",
];

export const RANK_TIERS = [
  {
    name: "Bronze",
    color: "#cd7f32",
    xp: "0 - 999",
    perks: "Basic chat access",
  },
  {
    name: "Silver",
    color: "#c0c0c0",
    xp: "1,000 - 4,999",
    perks: "Custom nickname color",
  },
  {
    name: "Gold",
    color: "#ffd700",
    xp: "5,000 - 14,999",
    perks: "Priority voice channels",
  },
  {
    name: "Diamond",
    color: "#00e5ff",
    xp: "15,000+",
    perks: "All perks + exclusive role",
  },
];

export const BOT_PRICING = [
  {
    tier: "Free",
    price: "$0",
    period: "forever",
    features: [
      "Basic XP & Leveling",
      "5 Custom Commands",
      "Basic Moderation",
      "Community Features",
      "1 Trivia Category",
    ],
    cta: "Add to Server",
    highlighted: false,
  },
  {
    tier: "Pro",
    price: "$9.99",
    period: "/month",
    features: [
      "Advanced XP Multipliers",
      "25 Custom Commands",
      "Twitch Integration",
      "All Trivia Categories",
      "Chess System",
      "Priority Support",
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
      "Unlimited Commands",
      "Member Spotlight",
      "Advanced Analytics",
      "Custom Branding",
      "API Access",
      "Dedicated Support",
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
      "White-Label Options",
      "SLA Guarantee",
      "Custom Development",
      "Account Manager",
      "24/7 Priority Support",
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
    description: "Link your Twitch or YouTube stream to ClipBot.",
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
    question: "Is the The Overseer free to use?",
    answer:
      "Yes! The The Overseer has a generous free tier that includes basic XP & leveling, moderation tools, and community features. Premium tiers unlock advanced features like Twitch integration and unlimited custom commands.",
  },
  {
    question: "When will ClipBot be available?",
    answer:
      "ClipBot is currently in development. Join our Discord server to get notified when the beta launches and get early access.",
  },
  {
    question: "How do I add the The Overseer to my Discord server?",
    answer:
      'Click the "Add to Server" button on the The Overseer page, then select your server from the dropdown and authorize the required permissions.',
  },
  {
    question: "Can I use MavOps tools for non-gaming communities?",
    answer:
      "While MavOps tools are designed with gaming communities in mind, many features like XP systems, moderation, and custom commands work great for any type of Discord community.",
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
    { label: "ClipBot AI", href: "/clipbot" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  community: [
    { label: "Discord", href: DISCORD_INVITE },
    { label: "Twitter", href: "https://twitter.com/mavops" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
