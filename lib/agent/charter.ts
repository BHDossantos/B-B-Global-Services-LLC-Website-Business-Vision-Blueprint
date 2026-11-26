// Ported from Jennifer (src/company/businessAgents.ts). Generated; edit in Jennifer and re-port.
import type { BusinessAgent } from './core';

export const BUSINESS_AGENTS: BusinessAgent[] = [
  {
    "companyId": "technology",
    "name": "B&B Global Services agent",
    "mission": "Turn mid-market teams with a cloud, SRE, FinOps or AI delivery need into assessments and contracts.",
    "routine": {
      "name": "B&B global services",
      "does": "Daily campaign pack and up to five new qualified prospects matched to one verified offer."
    },
    "guardrails": [
      "Match each prospect to one verified offer, such as the Technology Health Check or the AI Readiness Assessment.",
      "Peer-to-peer tone; cite the public signal that makes the prospect a fit."
    ],
    "measures": [
      "qualified replies",
      "assessment bookings",
      "proposals sent",
      "contracts won"
    ],
    "tasks": [
      {
        "id": "prospects",
        "name": "Qualify mid-market prospects",
        "department": "sales",
        "cadence": "daily",
        "does": "Qualify teams with a documented cloud, SRE, FinOps or AI delivery signal. The daily Claude routine finds and drafts; this task qualifies what it logged, drops duplicates and anyone on the do-not-contact list, and proposes the next step for each.",
        "inputs": [
          "icp",
          "offer",
          "CRM accounts"
        ],
        "outputs": [
          "CRM tasks",
          "email and LinkedIn drafts"
        ],
        "approval": "Drafts and CRM changes wait for Bruno."
      },
      {
        "id": "deals",
        "name": "Move open deals",
        "department": "deals",
        "cadence": "daily",
        "does": "Review open opportunities: next step, proposal or scope questions, stalled deals and follow-ups due.",
        "inputs": [
          "offer",
          "pricing",
          "contracts",
          "CRM opportunities"
        ],
        "outputs": [
          "proposal outlines",
          "follow-up drafts"
        ],
        "approval": "Pricing and terms escalate; proposals wait for Bruno."
      },
      {
        "id": "content",
        "name": "LinkedIn content week",
        "department": "marketing",
        "cadence": "weekly",
        "does": "Plan the week of LinkedIn posts for the company page from the approved offers and case material.",
        "inputs": [
          "offer",
          "brand",
          "claims"
        ],
        "outputs": [
          "post drafts"
        ],
        "approval": "Each post waits for Bruno before it is scheduled."
      }
    ]
  }
];

export const BUSINESS_AGENT: BusinessAgent = BUSINESS_AGENTS[0];
