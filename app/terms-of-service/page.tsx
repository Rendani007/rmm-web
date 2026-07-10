import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export default function TermsOfService() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <div className="max-w-4xl mx-auto px-6 py-24 pt-32">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p>
            Welcome to RMM System. By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable South African laws and regulations.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By registering for and/or using the Services in any manner, including but not limited to visiting or browsing the Site, you agree to these Terms of Service and all other operating rules, policies, and procedures that may be published from time to time on the Site by us.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Description of Service</h2>
          <p>
            RMM System provides an industrial ERP platform and modular resource management software. We reserve the right to modify, suspend, or discontinue the Service at any time, with or without notice.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. User Responsibilities</h2>
          <p>
            You are responsible for maintaining the security of your account and password. RMM System cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
          </p>
          <p>
            You are responsible for all content posted and activity that occurs under your account.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Payment and Fees</h2>
          <p>
            Valid payment details are required for paying accounts. Fees are billed in advance on a monthly or annual basis and are non-refundable, subject to our Refund Policy and the Consumer Protection Act (CPA).
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Limitation of Liability</h2>
          <p>
            In no event shall RMM System, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the Republic of South Africa, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Contact Information</h2>
          <p>If you have any questions about these Terms, please contact us at support@rmmsystem.com.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
