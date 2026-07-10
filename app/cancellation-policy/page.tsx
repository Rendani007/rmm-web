import { Nav } from "@/components/landing/Nav";
import { Footer } from "@/components/landing/Footer";

export default function CancellationPolicy() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <div className="max-w-4xl mx-auto px-6 py-24 pt-32">
        <h1 className="text-4xl font-bold mb-8">Cancellation Policy</h1>
        <p className="text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p>
            This Cancellation Policy governs the termination of your subscription with RMM System.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. How to Cancel</h2>
          <p>
            You are solely responsible for properly canceling your account. You can cancel your subscription at any time by logging into the RMM Dashboard, navigating to the Billing section, and clicking the "Cancel Subscription" button. An email or phone request to cancel your account is not considered cancellation unless confirmed by our support team.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Effective Date of Cancellation</h2>
          <p>
            Upon cancellation, your subscription will remain active until the end of your current paid billing cycle. You will not be charged again for the following cycle. We do not prorate cancellations mid-cycle.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Data Retention</h2>
          <p>
            After your subscription period ends following a cancellation, your account will be deactivated. We retain your data for a grace period of 30 days to allow for account reactivation. After this period, your data may be permanently deleted from our servers in accordance with the POPI Act.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. RMM System's Right to Cancel</h2>
          <p>
            RMM System, in its sole discretion, has the right to suspend or terminate your account and refuse any and all current or future use of the Service if you violate our Terms of Service or engage in illegal or abusive activities.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Contact</h2>
          <p>
            If you need assistance with cancellation or data retrieval, please contact support@rmmsystem.com.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
