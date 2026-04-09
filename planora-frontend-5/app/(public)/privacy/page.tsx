"use client";

export default function PrivacyPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16">

      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-emerald-600">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Last updated: {new Date().getFullYear()}
        </p>
      </div>

      {/* Content */}
      <div className="mt-12 space-y-10 text-muted-foreground">

        {/* Section 1 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            1. Information We Collect
          </h2>
          <p>
            We collect only the necessary information to provide our services,
            including your name, email address, and event participation details.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            2. How We Use Your Information
          </h2>
          <p>
            Your information is used to manage your account, improve our platform,
            and provide a better event experience. We do not sell your data to
            third parties.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            3. Data Protection
          </h2>
          <p>
            We use industry-standard security practices and encryption to keep
            your data safe and secure at all times.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            4. Your Rights
          </h2>
          <p>
            You have the right to access, update, or delete your personal data
            at any time. Contact us if you need assistance.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-3">
            5. Contact Us
          </h2>
          <p>
            If you have any questions about this policy, please contact us at{" "}
            <a
              href="mailto:support@planora.com"
              className="text-emerald-500 hover:underline"
            >
              support@planora.com
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}