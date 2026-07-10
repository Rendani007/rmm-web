import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <div className="max-w-4xl mx-auto px-6 py-24 pt-32">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p>
            RMM System ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our software-as-a-service application ("Service"), in compliance with the Protection of Personal Information Act (POPIA) of South Africa.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect personal information that you voluntarily provide to us when registering at the Service, expressing an interest in obtaining information about us or our products and services, or otherwise contacting us. The personal information that we collect depends on the context of your interactions with us and the Service, the choices you make, and the products and features you use.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Details:</strong> Name, email address, phone number, company name, and job title.</li>
            <li><strong>Payment Information:</strong> We do not store full credit card details. Payment processing is handled securely by Paystack.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our Service (IP address, browser type, device info, access times).</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use personal information collected via our Service for a variety of business purposes described below:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To facilitate account creation and logon process.</li>
            <li>To manage user accounts and provide the Service.</li>
            <li>To send administrative information to you (e.g., updates, security alerts).</li>
            <li>To fulfill and manage your orders, payments, and subscriptions securely via Paystack.</li>
            <li>To respond to user inquiries/offer support to users.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Data Protection (POPIA Compliance)</h2>
          <p>
            In accordance with the POPI Act, we have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. We only process personal information if we have a lawful justification (e.g., consent, contract performance, legitimate interest).
          </p>
          <p>
            You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, please contact us at support@rmmsystem.com.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Sharing Your Information</h2>
          <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We share data with trusted third-party service providers (like Paystack for payments, AWS for hosting) who are bound by strict data processing agreements.</p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <p>Email: support@rmmsystem.com</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
