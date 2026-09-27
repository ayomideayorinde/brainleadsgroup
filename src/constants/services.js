import campaign from "../assets/images/campaign.webp"
import campaignsvg from "../assets/images/campaign.svg"
import digital from "../assets/images/digital.jpg"
import socialsvg from "../assets/images/social.svg"
import sales from "../assets/images/sales.webp"
import salessvg from "../assets/images/sales.svg"
import lead from "../assets/images/lead.jpg"
import leadsvg from "../assets/images/lead.svg"
import Franchise from "../assets/images/Franchise.webp"
import datasvg from "../assets/images/data.svg"

export const SERVICES_DATA = [
  {
    id: "campaign-video",
    category: "Video & Creative",
    title: "Campaign Video Production – Storytelling That Sells",
    shortTitle: "Campaign Video Production",
    description: "We craft story-driven campaigns that connect your brand with the right audience.",
    details: [
      "Showcase your mission, vision, and values",
      "Highlight your unique selling points",
      "Build emotional connections that convert",
      "Delivery Channels: Social media (Instagram, TikTok, YouTube, LinkedIn, Facebook), TV & Radio, Magazines, Podcasts & Audio Platforms",
    ],
    cta: "Let’s Tell Your Brand Story",
    image: campaign,
    sketch: campaignsvg,
    badge: "Cinema Quality",
  },
  {
    id: "distribution",
    category: "Multi-Channel Growth",
    title: "Digital & Non-Digital Distribution – Maximum Reach",
    shortTitle: "Omnichannel Distribution",
    description: "Your campaigns are only powerful if people see them. We ensure your brand reaches the right audience, everywhere.",
    details: [
      "Digital Marketing: Social media ads, Search engine marketing & PPC, AI-powered retargeting, Email & drip campaigns, Content marketing, Influencer collaborations, Webinars & Online PR",
      "Non-Digital Marketing: Billboards, flyers, posters, TV & Radio ads, Print sponsorships, Event activations, Retail promotions",
    ],
    cta: "Schedule a Distribution Strategy Call",
    image: digital,
    sketch: socialsvg,
    badge: "Omnichannel Reach",
  },
  {
    id: "sales-strategy",
    category: "Revenue Acceleration",
    title: "Sales & Revenue Strategy – Tripling Your Growth",
    shortTitle: "Sales & Revenue Strategy",
    description: "We turn marketing campaigns into measurable revenue with strategies that deliver.",
    details: [
      "Develop custom sales strategies",
      "Optimize pricing, promotion, and product focus",
      "Train staff as skilled sales consultants",
      "Implement upselling, cross-selling, and journey optimization",
      "Design promotions & loyalty initiatives",
    ],
    cta: "Start Tripling Your Sales Today",
    image: sales,
    sketch: salessvg,
    badge: "ROI Focused",
  },
  {
    id: "lead-generation",
    category: "Funnel & Retention",
    title: "Lead Generation & Retention – Capture, Convert, Keep",
    shortTitle: "Lead Gen & Retention",
    description: "We capture leads, nurture them, and turn them into long-term loyal customers.",
    details: [
      "Lead Magnets: Free guides, webinars, discounts, quizzes",
      "Nurturing: Personalized follow-ups, Retargeting, Drip campaigns",
      "Retention: Loyalty programs, Subscriptions, Customer appreciation campaigns, Community engagement",
    ],
    cta: "Generate More Leads Today",
    image: lead,
    sketch: leadsvg,
    badge: "Automated Funnels",
  },
  {
    id: "franchise-growth",
    category: "Expansion & Scaling",
    title: "Franchise Growth & Marketing – Expand Nationwide",
    shortTitle: "Franchise Expansion",
    description: "We turn proven brands into thriving franchises with end-to-end growth solutions.",
    details: [
      "Franchise Strategy: Readiness, models, locations, investor targeting",
      "Franchise Marketing: Storytelling campaigns, Digital ads, Print campaigns, Events",
      "Franchisee Lead Generation: Landing pages, Email nurturing, CRM setup",
      "Ongoing Support: Onboarding, Sales & marketing training, Replicable campaigns",
    ],
    cta: "Start Your Franchise Journey Today",
    image: Franchise,
    sketch: datasvg,
    badge: "Nationwide Scale",
  },
];
