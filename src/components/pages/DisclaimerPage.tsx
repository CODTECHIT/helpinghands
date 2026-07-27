"use client";

import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";

export function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="A few things we would rather you read than assume."
      intro="This page covers the limits of what is published here, and one warning we would ask you to take seriously before you give money to anyone using our name."
      updated="1 April 2026"
      sections={[
        {
          heading: "Fundraising fraud — please read",
          paras: [
            "We never solicit donations to a personal bank account, a personal UPI ID, or through unsolicited calls asking for card details or OTPs. Every legitimate donation goes through this website or a bank account in the name of Helping Hands Foundation.",
            "If someone approaches you in our name and you are unsure, stop and call +91 20 4000 1122 before paying anything. Report suspected misuse of our name to legal@helpinghandsfoundation.org.",
          ],
        },
        {
          heading: "Impact figures",
          paras: [
            "Numbers on this site come from our own monitoring systems and partner assessments, and are accurate as at the date shown. Some are independently verified and some are not; where a figure is a target, a projection or a pilot result, it is labelled.",
            "Rounding is used for readability. Audited figures in the annual report take precedence over anything published on this website.",
          ],
        },
        {
          heading: "Health camps and medical content",
          paras: [
            "Consultations at our camps are provided by registered practitioners but are screening and primary-care services, not a substitute for continuous clinical care. Nothing on this website constitutes medical advice.",
          ],
        },
        {
          heading: "Photographs and stories",
          paras: [
            "Beneficiary photographs are published with consent. Some names in field stories are changed at the family's request, and where this has been done it is stated in the article. Stock or illustrative imagery is never presented as documentary field photography.",
          ],
        },
        {
          heading: "External links",
          paras: [
            "Links to partner organisations, government portals and news coverage are provided for convenience. We do not control those sites and are not responsible for their content, accuracy or privacy practices.",
          ],
        },
        {
          heading: "Tax guidance",
          paras: [
            "Information about 80G deductions is general. Eligibility depends on your own tax position; please consult your tax advisor. We issue the receipt, not the assessment.",
          ],
        },
      ]}
    />
  );
}
