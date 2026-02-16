import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/settings")({
  component: Settings,
});

function Settings() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="mt-1 text-muted-foreground">
          Manage your account preferences and configuration.
        </p>
      </div>

      {/* Profile section */}
      <section className="rounded-xl border bg-card shadow-sm">
        <div className="border-b px-6 py-4">
          <h2 className="font-semibold">Profile</h2>
          <p className="text-xs text-muted-foreground">
            Your public profile information
          </p>
        </div>
        <form
          className="flex flex-col gap-6 px-6 py-6"
          onSubmit={(e) => e.preventDefault()}
        >
          {/* Avatar */}
          <div className="flex items-center gap-4">
            <div className="flex size-16 items-center justify-center rounded-full bg-muted text-lg font-semibold text-muted-foreground">
              JD
            </div>
            <div className="flex flex-col gap-1">
              <button
                type="button"
                className="inline-flex h-8 w-fit items-center justify-center rounded-md border bg-background px-3 text-xs font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Change avatar
              </button>
              <p className="text-xs text-muted-foreground">
                JPG, PNG or GIF. Max 2MB.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              label="First name"
              id="first-name"
              placeholder="John"
              defaultValue="John"
            />
            <FormField
              label="Last name"
              id="last-name"
              placeholder="Doe"
              defaultValue="Doe"
            />
          </div>
          <FormField
            label="Display name"
            id="display-name"
            placeholder="johndoe"
            defaultValue="johndoe"
            hint="This is how other users will see you."
          />
          <FormField
            label="Email"
            id="email"
            type="email"
            placeholder="you@example.com"
            defaultValue="john@example.com"
            hint="We'll send account notifications to this address."
          />
          <div className="flex flex-col gap-2">
            <label htmlFor="bio" className="text-sm font-medium">
              Bio
            </label>
            <textarea
              id="bio"
              rows={3}
              placeholder="Tell us a little about yourself..."
              defaultValue="Full-time trader. Building with Drift247."
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Save changes
            </button>
          </div>
        </form>
      </section>

      {/* Security section */}
      <section className="rounded-xl border bg-card shadow-sm">
        <div className="border-b px-6 py-4">
          <h2 className="font-semibold">Security</h2>
          <p className="text-xs text-muted-foreground">
            Protect your account with strong credentials
          </p>
        </div>
        <form
          className="flex flex-col gap-6 px-6 py-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <FormField
            label="Current password"
            id="current-password"
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
          />
          <FormField
            label="New password"
            id="new-password"
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
            hint="Must be at least 8 characters with a number and a symbol."
          />
          <FormField
            label="Confirm new password"
            id="confirm-password"
            type="password"
            placeholder="••••••••"
            autoComplete="new-password"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Update password
            </button>
          </div>
        </form>
      </section>

      {/* Two-factor authentication */}
      <section className="rounded-xl border bg-card shadow-sm">
        <div className="border-b px-6 py-4">
          <h2 className="font-semibold">Two-Factor Authentication</h2>
          <p className="text-xs text-muted-foreground">
            Add an extra layer of security to your account
          </p>
        </div>
        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">Authenticator app</p>
            <p className="text-xs text-muted-foreground">
              Use an authenticator app to generate one-time codes.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex h-9 items-center justify-center rounded-md border bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Enable
          </button>
        </div>
        <div className="flex items-center justify-between border-t px-6 py-6">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">SMS recovery</p>
            <p className="text-xs text-muted-foreground">
              Use your phone number as a backup verification method.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex h-9 items-center justify-center rounded-md border bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Set up
          </button>
        </div>
      </section>

      {/* Notifications section */}
      <section className="rounded-xl border bg-card shadow-sm">
        <div className="border-b px-6 py-4">
          <h2 className="font-semibold">Notifications</h2>
          <p className="text-xs text-muted-foreground">
            Choose what you want to be notified about
          </p>
        </div>
        <div className="divide-y">
          <ToggleRow
            title="Trade executions"
            description="Get notified when a trade is executed."
            defaultChecked={true}
          />
          <ToggleRow
            title="Price alerts"
            description="Receive alerts when price targets are hit."
            defaultChecked={true}
          />
          <ToggleRow
            title="Deposit & withdrawals"
            description="Get notified about account balance changes."
            defaultChecked={true}
          />
          <ToggleRow
            title="Security alerts"
            description="New logins, password changes, and suspicious activity."
            defaultChecked={true}
          />
          <ToggleRow
            title="Marketing emails"
            description="Product updates, tips, and feature announcements."
            defaultChecked={false}
          />
        </div>
      </section>

      {/* API keys section */}
      <section className="rounded-xl border bg-card shadow-sm">
        <div className="border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold">API Keys</h2>
              <p className="text-xs text-muted-foreground">
                Manage your API keys for programmatic access
              </p>
            </div>
            <button
              type="button"
              className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Generate new key
            </button>
          </div>
        </div>
        <div className="divide-y">
          <ApiKeyRow
            name="Production (read-only)"
            prefix="dk_live_••••a3f8"
            created="May 12, 2025"
            lastUsed="2 hours ago"
          />
          <ApiKeyRow
            name="Development"
            prefix="dk_test_••••9c21"
            created="Apr 28, 2025"
            lastUsed="3 days ago"
          />
        </div>
      </section>

      {/* Danger zone */}
      <section className="rounded-xl border border-red-200 bg-card shadow-sm dark:border-red-900/50">
        <div className="border-b border-red-200 px-6 py-4 dark:border-red-900/50">
          <h2 className="font-semibold text-red-600 dark:text-red-400">
            Danger Zone
          </h2>
          <p className="text-xs text-muted-foreground">
            Irreversible and destructive actions
          </p>
        </div>
        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium">Delete account</p>
            <p className="text-xs text-muted-foreground">
              Permanently delete your account and all associated data. This
              action cannot be undone.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex h-9 shrink-0 items-center justify-center rounded-md border border-red-200 bg-red-50 px-4 text-sm font-medium text-red-600 transition-colors hover:bg-red-100 dark:border-red-900/50 dark:bg-red-950/50 dark:text-red-400 dark:hover:bg-red-950"
          >
            Delete account
          </button>
        </div>
      </section>
    </div>
  );
}

// ── Components ──

function FormField({
  label,
  id,
  type = "text",
  placeholder,
  defaultValue,
  hint,
  autoComplete,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  hint?: string;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  );
}

function ToggleRow({
  title,
  description,
  defaultChecked,
}: {
  title: string;
  description: string;
  defaultChecked: boolean;
}) {
  return (
    <label className="flex cursor-pointer items-center justify-between px-6 py-4 transition-colors hover:bg-muted/50">
      <div className="flex flex-col gap-0.5 pr-4">
        <span className="text-sm font-medium">{title}</span>
        <span className="text-xs text-muted-foreground">{description}</span>
      </div>
      <div className="relative inline-flex h-6 w-11 shrink-0">
        <input
          type="checkbox"
          defaultChecked={defaultChecked}
          className="peer sr-only"
        />
        <span className="absolute inset-0 cursor-pointer rounded-full bg-input transition-colors peer-checked:bg-primary peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background" />
        <span className="absolute left-0.5 top-0.5 size-5 rounded-full bg-background shadow-sm transition-transform peer-checked:translate-x-5" />
      </div>
    </label>
  );
}

function ApiKeyRow({
  name,
  prefix,
  created,
  lastUsed,
}: {
  name: string;
  prefix: string;
  created: string;
  lastUsed: string;
}) {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium">{name}</p>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[11px]">
            {prefix}
          </code>
          <span>Created {created}</span>
          <span>·</span>
          <span>Last used {lastUsed}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="inline-flex h-8 items-center justify-center rounded-md border bg-background px-3 text-xs font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Copy
        </button>
        <button
          type="button"
          className="inline-flex h-8 items-center justify-center rounded-md border border-red-200 bg-background px-3 text-xs font-medium text-red-600 shadow-sm transition-colors hover:bg-red-50 dark:border-red-900/50 dark:text-red-400 dark:hover:bg-red-950/50"
        >
          Revoke
        </button>
      </div>
    </div>
  );
}
