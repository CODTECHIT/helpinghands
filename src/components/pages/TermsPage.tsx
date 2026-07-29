"use client";

import { LegalPage } from "@/components/LegalPage";

export function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="The rules of using this site, in plain language."
      intro="By using this website, donating, or applying for membership or a volunteer placement, you agree to the terms below. They are written to be read, not to be skipped."
      updated="3 August 2026"
      sections={[
        {
          heading: "Who we are",
          paras: [
            "Helping Hands Foundation is a Public Charitable Trust registered in Adoni, Kurnool District, Andhra Pradesh. Applications for Section 12A and 80G registrations are currently in progress. References to “we”, “us” and “the Foundation” mean that trust.",
          ],
        },
        {
          heading: "Use of this website",
          paras: [
            "You may read, print and share the content here for personal, educational or journalistic purposes with attribution. You may not use our name, logo or photographs to solicit funds, imply endorsement, or represent yourself as acting on our behalf.",
          ],
          list: [
            "Do not attempt to access accounts, dashboards or data that are not yours.",
            "Do not scrape, republish or resell content at scale without written permission.",
            "Do not upload anything unlawful, defamatory or unsafe through our forms.",
          ],
        },
        {
          heading: "Donations",
          paras: [
            "All donations are voluntary. Amounts are in Indian Rupees and processed by a third-party payment gateway subject to its own terms. A receipt is issued to the email address provided; 80G certificates require a valid PAN.",
            "Where a donation is designated to a specific campaign and that campaign is fully funded or closed, we will apply the funds to the nearest comparable programme and tell you where they went.",
          ],
        },
        {
          heading: "Membership and volunteer accounts",
          paras: [
            "Membership and volunteer applications are reviewed and may be declined without a stated reason. Field placements require completion of induction and, where children are involved, a safeguarding check.",
            "We may suspend or terminate an account for breach of our child protection policy, misrepresentation, or conduct that endangers beneficiaries, staff or other volunteers.",
          ],
        },
        {
          heading: "Accuracy of content",
          paras: [
            "Impact figures published here are drawn from our monitoring records and are stated as at the date of publication. Where a figure is a target or a projection rather than an outcome, it is labelled as such.",
          ],
        },
        {
          heading: "Intellectual property",
          paras: [
            "Text, reports, photographs and the Foundation's name and logo remain our property or that of our licensors. Field photographs may not be reproduced outside editorial coverage of our work.",
          ],
        },
        {
          heading: "Liability",
          paras: [
            "We provide this website on an “as is” basis and do not guarantee uninterrupted availability. To the extent permitted by law, we are not liable for indirect or consequential loss arising from use of this site or reliance on its content.",
          ],
        },
        {
          heading: "Governing law",
          paras: [
            "These terms are governed by the laws of India. Disputes are subject to the exclusive jurisdiction of the courts at Adoni, Andhra Pradesh.",
          ],
        },
      ]}
    />
  );
}
