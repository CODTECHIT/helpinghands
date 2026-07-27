import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Helping Hands Foundation" },
      {
        name: "description",
        content:
          "What personal data Helping Hands Foundation collects from donors, members and volunteers, how long we keep it, who we share it with, and how to have it deleted.",
      },
      { property: "og:title", content: "Privacy Policy | Helping Hands Foundation" },
      {
        property: "og:description",
        content: "How we collect, store, share and delete personal data.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="We collect the minimum, and we tell you exactly what it is."
      intro="This policy covers donors, members, volunteers, job applicants and visitors to this website. It applies to Helping Hands Foundation, a public charitable trust registered in Pune."
      updated="1 April 2026"
      sections={[
        {
          heading: "What we collect",
          paras: [
            "We collect only what a transaction or an application genuinely requires. We never buy contact lists, and we do not track you across other websites.",
          ],
          list: [
            "Donors — name, email, phone, postal address, PAN (only where an 80G receipt is requested), and payment reference. We never store card or bank credentials.",
            "Members and volunteers — the details submitted in the application form, plus records of participation and, for field roles, safeguarding check outcomes.",
            "Website visitors — anonymous aggregate page analytics. No advertising or cross-site tracking cookies are used.",
          ],
        },
        {
          heading: "Why we hold it",
          paras: [
            "Donor data is held to issue statutory receipts, meet income-tax and FCRA reporting obligations, and to send you reports on the work you funded.",
            "Volunteer and member data is held to run placements, safeguard the people we work with, and maintain an auditable record of who was in the field and when.",
          ],
        },
        {
          heading: "Who we share it with",
          paras: [
            "We do not sell, rent or trade personal data under any circumstances.",
            "We share the minimum necessary with our payment gateway, our statutory auditors, and the Income Tax Department and Ministry of Home Affairs where the law requires it. Corporate donors receive aggregate reporting only, never individual donor records.",
          ],
        },
        {
          heading: "How long we keep it",
          paras: [
            "Donation records are retained for eight financial years, as required under Indian tax and FCRA rules. Volunteer records are retained for three years after last engagement. Unsuccessful job applications are deleted after twelve months.",
          ],
        },
        {
          heading: "Children's data",
          paras: [
            "Beneficiary children's records are held offline, access-controlled, and never published. Photographs are used only with written guardian consent, which can be withdrawn at any time, after which we remove the image from all material we control.",
          ],
        },
        {
          heading: "Your rights",
          paras: [
            "You may ask us for a copy of your data, ask us to correct it, ask us to stop contacting you, or ask us to delete it — except where a statutory retention rule prevents deletion, in which case we will tell you which rule applies.",
            "Write to legal@helpinghandsfoundation.org. We respond within fifteen working days.",
          ],
        },
        {
          heading: "Security",
          paras: [
            "Data is stored on access-controlled systems with role-based permissions. Payments are processed by a PCI-DSS compliant gateway; card details never reach our servers. Any breach affecting personal data will be disclosed to those affected within seventy-two hours of discovery.",
          ],
        },
      ]}
    />
  ),
});
