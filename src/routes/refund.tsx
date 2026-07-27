import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Donation & Refund Policy | Helping Hands Foundation" },
      {
        name: "description",
        content:
          "How Helping Hands Foundation handles donation errors, duplicate payments, refund requests, recurring giving cancellations and 80G receipts.",
      },
      { property: "og:title", content: "Donation & Refund Policy | Helping Hands Foundation" },
      {
        property: "og:description",
        content:
          "Refunds, duplicate payments, recurring giving and receipts — how each is handled.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <LegalPage
      eyebrow="Legal"
      title="Donations are final — but genuine mistakes get fixed."
      intro="Charitable donations are, by their nature, non-refundable once applied to programmes. This policy sets out the specific circumstances in which we do refund, and how quickly."
      updated="1 April 2026"
      sections={[
        {
          heading: "General position",
          paras: [
            "A completed donation is treated as final. Funds are committed to programme budgets within days of receipt, and reversing them after allocation takes money away from work already underway.",
          ],
        },
        {
          heading: "When we do refund",
          paras: ["We refund in full, without argument, in these cases:"],
          list: [
            "Duplicate transactions — the same amount charged more than once within twenty-four hours.",
            "Incorrect amount entered — for example an extra zero — reported within seven days of the transaction.",
            "Unauthorised or fraudulent use of a payment instrument, once confirmed with the payment gateway.",
            "A technical failure where the amount was debited but no donation record was created.",
          ],
        },
        {
          heading: "How to request a refund",
          paras: [
            "Email donations@helpinghandsfoundation.org with the transaction reference, date, amount and the reason. Do not send card details in the email.",
            "We acknowledge within two working days and complete verified refunds within seven to ten working days. The amount is returned to the original payment method; your bank may take a further three to five days to reflect it.",
          ],
        },
        {
          heading: "Receipts and 80G",
          paras: [
            "Where a refund is issued, any receipt already sent is cancelled and, if an 80G certificate was generated, it is withdrawn and reported as such. You may not claim a tax deduction on a refunded donation.",
          ],
        },
        {
          heading: "Recurring donations",
          paras: [
            "Monthly giving can be cancelled at any time from your member dashboard or by emailing us; cancellation takes effect before the next scheduled debit provided we receive it at least three working days in advance.",
            "Instalments already collected and applied to programmes are not refunded, but no further debits will occur.",
          ],
        },
        {
          heading: "Designated donations",
          paras: [
            "If you designated a donation to a campaign that closes fully funded, we will contact you before reallocating. If we cannot reach you within thirty days, funds are applied to the nearest comparable programme and disclosed in the quarterly utilisation statement.",
          ],
        },
        {
          heading: "Foreign contributions",
          paras: [
            "Donations received under FCRA are held in the designated bank account and are subject to additional statutory conditions. Refunds of foreign contributions require reporting to the Ministry of Home Affairs and may take longer than the standard timeline.",
          ],
        },
      ]}
    />
  ),
});
