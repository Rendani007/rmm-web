import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export default function RefundPolicy() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <div className="max-w-4xl mx-auto px-6 py-24 pt-32">
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        <p className="text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p>
            At RMM System, we strive to ensure you are fully satisfied with our industrial ERP platform. This Refund Policy is provided in accordance with the Consumer Protection Act (CPA) of South Africa.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Subscription Refunds</h2>
          <p>
            Due to the nature of our software-as-a-service (SaaS) platform, we generally do not offer refunds for partial months of service or for periods where your account remained open but was unused.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. The 7-Day Cooling-Off Period</h2>
          <p>
            In compliance with the CPA (if applicable to your transaction) and the Electronic Communications and Transactions Act (ECTA), you have a 7-day cooling-off period from the date of your initial subscription purchase. If you are unsatisfied within the first 7 days of your initial purchase, you may request a full refund.
          </p>
          <p>
            This cooling-off period does not apply to subsequent renewals (monthly or annual).
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Exceptional Circumstances</h2>
          <p>
            Refund requests made outside of the 7-day cooling-off period will be evaluated on a case-by-case basis. We may issue refunds for reasons such as prolonged service outages or billing errors directly caused by RMM System.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. How to Request a Refund</h2>
          <p>
            To request a refund, please contact our support team at support@rmmsystem.com with your account details and the reason for your request. Approved refunds will be processed via Paystack to your original method of payment within 5-10 business days.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
