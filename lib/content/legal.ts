// Privacy Policy and Terms of Service content. Rendered as Markdown on
// /privacy and /terms. These are reasonable, plain-English starting templates
// tailored to what this site does — have counsel review before relying on them.

import { siteConfig } from "@/lib/siteConfig";

export const legalEffectiveDate = "June 25, 2026";

const domain = siteConfig.url.replace("https://", "");

export const privacyPolicy = `> **Note:** This Privacy Policy is a general template provided for convenience. It is not legal advice. Please have it reviewed by qualified counsel and tailored to your actual data practices and jurisdictions before relying on it.

**Effective date:** ${legalEffectiveDate}

${siteConfig.name} ("B&B Global Services," "we," "us," or "our") respects your privacy. This Privacy Policy explains what information we collect through ${domain} (the "Site") and in the course of providing our services, how we use it, and the choices you have.

## Information We Collect

**Information you provide.** When you fill out our contact form, request an assessment, use the technology health check or cost calculator, subscribe to our updates, or otherwise contact us, you may provide information such as your name, email address, company, job title, phone number, company size, budget range, timeline, and any message or details you choose to share.

**Information collected automatically.** When you visit the Site, we and our analytics providers may automatically collect technical information such as your IP address, browser type, device information, pages viewed, referring URLs, and general usage data, including through cookies and similar technologies.

**Information from engagements.** If you become a client, we may process information necessary to deliver our services. That processing is governed by the agreement (such as a Master Services Agreement and Statement of Work) between us, which controls in the event of any conflict with this Policy.

## How We Use Information

We use the information we collect to:

- Respond to your inquiries and provide requested assessments, proposals, and services.
- Operate, maintain, secure, and improve the Site and our offerings.
- Send you administrative messages and, where permitted, relevant updates or outreach about our services.
- Understand how the Site is used through analytics.
- Comply with legal obligations and protect our rights.

## Legal Bases (EEA/UK)

Where applicable law (such as the GDPR or UK GDPR) requires, we rely on the following legal bases: your consent; our legitimate interests in operating and growing our business; the performance of a contract with you; and compliance with legal obligations.

## How We Share Information

We do not sell your personal information. We share information only as needed:

- **Service providers** who help us operate, such as our website host (Vercel), email delivery (Resend), customer relationship and analytics tools (which may include HubSpot, Google Analytics, or PostHog), and similar vendors, who process information on our behalf.
- **Legal and safety** purposes, where required by law, regulation, legal process, or to protect rights, property, or safety.
- **Business transfers**, in connection with a merger, acquisition, or sale of assets, subject to this Policy.

## Cookies and Analytics

The Site uses cookies and similar technologies for functionality and analytics. You can control cookies through your browser settings. Our analytics providers help us understand aggregate usage; you can opt out of certain analytics through industry tools or browser controls.

## Marketing and Outreach

If we contact you with sales or marketing email, every message includes a clear way to opt out. You can unsubscribe at any time using the link in our emails, by visiting ${siteConfig.url}/unsubscribe, or by emailing us at ${siteConfig.email}. We honor opt-out requests promptly and maintain a suppression list to prevent further contact.

## Data Retention

We retain personal information for as long as needed to fulfill the purposes described in this Policy, to provide our services, and to comply with our legal obligations, after which we delete or de-identify it.

## Your Rights and Choices

Depending on where you live, you may have rights to access, correct, delete, or restrict the processing of your personal information, to object to certain processing, to data portability, and to withdraw consent. California residents may have rights under the CCPA/CPRA, including the right to know, delete, and opt out of "sale" or "sharing" (we do not sell personal information). To exercise any right, contact us at ${siteConfig.email}. We will respond consistent with applicable law and may need to verify your identity.

## International Transfers

We are based in the United States and may process information in the United States and other countries. Where required, we use appropriate safeguards for cross-border transfers.

## Security

We use reasonable technical and organizational measures designed to protect personal information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.

## Children's Privacy

The Site is not directed to children under 16, and we do not knowingly collect personal information from them.

## Changes to This Policy

We may update this Policy from time to time. We will revise the "Effective date" above and, where appropriate, provide additional notice.

## Contact Us

Questions about this Policy or your information? Contact us at **${siteConfig.email}** or ${siteConfig.phone} (US) / ${siteConfig.phoneIt} (IT). ${siteConfig.name}, ${siteConfig.headquarters}.`;

export const termsOfService = `> **Note:** These Terms of Service are a general template provided for convenience. They are not legal advice. Please have them reviewed by qualified counsel and tailored to your business before relying on them.

**Effective date:** ${legalEffectiveDate}

These Terms of Service ("Terms") govern your access to and use of ${domain} (the "Site"), operated by ${siteConfig.name} ("B&B Global Services," "we," "us," or "our"). By accessing or using the Site, you agree to these Terms. If you do not agree, please do not use the Site.

## Use of the Site

The Site provides information about our technology consulting and managed services. You may use the Site for lawful purposes only. You agree not to:

- Use the Site in any way that violates applicable law or these Terms.
- Attempt to gain unauthorized access to the Site, its systems, or related networks.
- Interfere with or disrupt the Site, introduce malicious code, or scrape or harvest data without permission.
- Misrepresent your identity or affiliation, or submit false or misleading information.

## Services and Separate Agreements

Information on the Site, including descriptions of services, frameworks, and indicative pricing, is for general informational purposes only and does not constitute an offer or a binding quote. Any engagement for services is governed by a separate written agreement (such as a Master Services Agreement and Statement of Work). In the event of a conflict between these Terms and such an agreement regarding services, the separate agreement controls.

## Intellectual Property

The Site and its content — including text, graphics, logos, and design — are owned by or licensed to ${siteConfig.name} and are protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to access and use the Site for your internal, informational purposes. You may not copy, modify, distribute, or create derivative works from the Site without our prior written consent. Third-party names and marks are the property of their respective owners.

## Submissions

If you submit information through the Site (for example, via our contact form or assessments), you represent that it is accurate and that you have the right to provide it. We handle such information as described in our Privacy Policy.

## Third-Party Links

The Site may contain links to third-party websites or services that we do not control. We are not responsible for their content, policies, or practices, and your use of them is at your own risk.

## Disclaimers

THE SITE AND ITS CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT INFORMATION ON THE SITE IS COMPLETE OR CURRENT. NOTHING ON THE SITE CONSTITUTES PROFESSIONAL ADVICE.

## Limitation of Liability

TO THE FULLEST EXTENT PERMITTED BY LAW, ${siteConfig.name.toUpperCase()} AND ITS PRINCIPALS, EMPLOYEES, AND CONTRACTORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SITE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

## Indemnification

You agree to indemnify and hold harmless ${siteConfig.name} from any claims, damages, liabilities, and expenses arising out of your use of the Site or your violation of these Terms.

## Governing Law

These Terms are governed by the laws of the Commonwealth of Massachusetts, United States, without regard to its conflict-of-laws principles. Any disputes will be subject to the exclusive jurisdiction of the state and federal courts located in Massachusetts, unless otherwise agreed in a separate services agreement.

## Changes to These Terms

We may update these Terms from time to time. Changes are effective when posted, and we will revise the "Effective date" above. Your continued use of the Site after changes constitutes acceptance.

## Contact Us

Questions about these Terms? Contact us at **${siteConfig.email}** or ${siteConfig.phone} (US) / ${siteConfig.phoneIt} (IT). ${siteConfig.name}, ${siteConfig.headquarters}.`;
