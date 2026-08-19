import { useEffect } from 'react'
import { ArrowLeft, Mail, Phone } from 'lucide-react'

const supportEmail = 'support@bteck.co.za'

export function LegalPolicies({ pathname }: { pathname: string }) {
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
  }, [])
  if (pathname === '/terms-of-service') return <Terms />
  if (pathname === '/privacy-policy') return <Privacy />
  return <Payments />
}

function Layout({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return <main className="min-h-screen bg-page pt-28 pb-20"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-body-muted hover:text-body"><ArrowLeft className="h-4 w-4" /> Back to B Teck</a>
    <header className="mt-8 max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">Customer information</p><h1 className="mt-3 section-heading text-4xl text-body sm:text-5xl">{title}</h1><p className="mt-5 text-body-muted">{intro}</p><p className="mt-3 text-sm text-body-muted">Effective: 19 August 2026</p></header>
    <div className="mt-10 space-y-6">{children}</div>
  </div></main>
}

function Payments() { return <Layout title="Payments, refunds, cancellations & delivery" intro="These policies explain how B Teck supplies services, handles project changes and processes refunds for work accepted under a written quote or invoice.">
  <Section id="payments" title="Payment terms"><p>Prices, currency, scope, milestones and payment requirements are shown on the applicable written quote or invoice. Work begins after the required deposit or milestone payment has cleared, unless agreed otherwise in writing. A payment confirmation or receipt is sent after a successful payment.</p><p>Payments are made securely using the method shown on the invoice or payment page. B Teck does not store full payment-card details.</p></Section>
  <Section id="delivery" title="Delivery policy"><p>B Teck provides digital and professional services, including websites, software, mobile apps, design, hosting, business email and business-support services. We do not ship physical goods.</p><p>Deliverables are supplied electronically by email, a live website link, account access, a shared repository or another agreed digital channel. Delivery dates and milestones are confirmed in the quote or project plan. Dates may change if we are waiting for content, approvals, access credentials or other information from you; we will communicate material changes.</p></Section>
  <Section id="cancellations" title="Cancellation policy"><p>You may request cancellation by email or WhatsApp before work is completed. If work has already started, you remain responsible for approved work, completed milestones, non-recoverable third-party costs and time reserved or spent up to cancellation. We will confirm the impact of cancellation in writing.</p><p>B Teck may pause work for unpaid invoices, missing client material, unlawful requests or work outside the agreed scope, and will try to contact you first where reasonably possible.</p></Section>
  <Section id="refunds" title="Refund policy"><p>Send refund requests to {supportEmail} with your name, invoice or payment reference, and the reason for the request. We acknowledge requests within two business days and review them against the agreed scope and work completed.</p><p>Approved refunds are returned to the original payment method where possible. Deposits and milestone payments for completed work are generally non-refundable, except where B Teck cannot provide the agreed service or where required by law. Completed bespoke work, delivered digital assets, domain registrations, hosting, subscriptions and third-party charges are not refundable once supplied or incurred, unless required by law.</p></Section><Contact />
</Layout> }

function Terms() { return <Layout title="Terms of Service" intro="These terms govern B Teck's professional and digital services. Please read them before accepting a quote, placing an order or making a payment.">
  <Section title="Our services"><p>B Teck provides web, software, mobile app, design, hosting, business email and business-support services. The services, deliverables, fees and timelines for your project are those in the written quote, invoice or project agreement.</p></Section>
  <Section title="Quotes, scope and client responsibilities"><p>Quotes are valid for the period stated on them. Requests outside the agreed scope may need a revised quote, timeline or fee. You must provide accurate information, timely approvals, lawful content and the materials and access needed to perform the work.</p></Section>
  <Section title="Payments, delivery and ownership"><p>Payment requirements are shown on the quote or invoice. Digital deliverables are supplied through the agreed electronic channel. After full payment, you receive ownership or the agreed licence for final bespoke deliverables. B Teck retains ownership of its pre-existing tools, templates, know-how and third-party materials, which remain subject to their licences.</p></Section>
  <Section title="Acceptable use and liability"><p>You may not use our services for unlawful, fraudulent, abusive or infringing activity. To the extent permitted by law, B Teck is not liable for indirect or consequential loss. Nothing in these terms limits rights or obligations that cannot lawfully be excluded.</p></Section>
  <Section title="Cancellations and refunds"><p>Our <a href="/terms-and-policies" className="font-medium text-[#b18c1e] underline">Payment, Delivery & Refund Policy</a> forms part of these terms.</p></Section>
</Layout> }

function Privacy() { return <Layout title="Privacy Policy" intro="This policy explains how B Teck collects, uses, protects and shares personal information when you use our website or enquire about our services.">
  <Section title="Information we collect"><p>We collect information you provide through our contact form, email, WhatsApp or telephone, such as your name, email address, phone number, company details and project enquiry. We may also collect technical information needed to operate and secure the website, such as browser and device information.</p></Section>
  <Section title="How we use information"><p>We use information to respond to enquiries, prepare and deliver services, process payments, provide support, maintain records, prevent fraud and meet legal obligations. We process information where necessary to perform a contract, for a legitimate business purpose, to comply with law, or with consent where required.</p></Section>
  <Section title="Sharing and payment security"><p>We do not sell personal information. We may share information only as needed with trusted services that help operate the website, communicate with you, host services or process payments. Payment details are entered on secure payment pages and are not stored by B Teck. We may also disclose information where required by law.</p></Section>
  <Section title="Security and retention"><p>We use reasonable organisational and technical measures to protect personal information, but no internet transmission is completely secure. We retain information only as long as needed for the purpose collected, support, accounting, legal obligations or dispute resolution.</p></Section>
  <Section title="Your rights"><p>Subject to applicable law, you may ask to access, correct or delete your personal information, object to certain processing, or withdraw consent. Email {supportEmail}; we may need to verify your identity before responding.</p></Section><Contact />
</Layout> }

function Contact() { return <Section title="Questions or complaints"><p>Contact B Teck before opening a payment dispute so we can try to resolve the matter quickly and fairly. B Teck is based in South Africa.</p><div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-body"><a className="inline-flex items-center gap-2 hover:text-[#d4af37]" href={`mailto:${supportEmail}`}><Mail className="h-4 w-4" /> {supportEmail}</a><a className="inline-flex items-center gap-2 hover:text-[#d4af37]" href="tel:+27780330972"><Phone className="h-4 w-4" /> +27 78 033 0972</a></div></Section> }
function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) { return <section id={id} className="glass-card scroll-mt-24 p-6 sm:p-8"><h2 className="section-heading text-2xl text-body">{title}</h2><div className="mt-4 space-y-4 leading-7 text-body-muted">{children}</div></section> }
