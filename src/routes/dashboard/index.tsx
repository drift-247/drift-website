import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardIndex,
});

function DashboardIndex() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">
          Welcome back. Here's an overview of your account.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Balance"
          value="$48,352.18"
          change="+12.5%"
          trend="up"
        />
        <StatCard
          title="Open Positions"
          value="7"
          change="+2"
          trend="up"
        />
        <StatCard
          title="Today's P&L"
          value="+$1,240.00"
          change="+3.2%"
          trend="up"
        />
        <StatCard
          title="Win Rate"
          value="68.4%"
          change="-1.1%"
          trend="down"
        />
      </div>

      {/* Content grid */}
      <div className="grid gap-6 lg:grid-cols-7">
        {/* Recent trades */}
        <div className="rounded-xl border bg-card shadow-sm lg:col-span-4">
          <div className="border-b px-6 py-4">
            <h2 className="font-semibold">Recent Trades</h2>
            <p className="text-xs text-muted-foreground">
              Your last 5 executed trades
            </p>
          </div>
          <div className="divide-y">
            <TradeRow
              pair="BTC/USD"
              side="buy"
              amount="0.25 BTC"
              price="$67,420.00"
              time="2 min ago"
            />
            <TradeRow
              pair="ETH/USD"
              side="sell"
              amount="3.10 ETH"
              price="$3,845.20"
              time="18 min ago"
            />
            <TradeRow
              pair="SOL/USD"
              side="buy"
              amount="120 SOL"
              price="$178.55"
              time="1 hr ago"
            />
            <TradeRow
              pair="BTC/USD"
              side="sell"
              amount="0.10 BTC"
              price="$67,100.00"
              time="3 hr ago"
            />
            <TradeRow
              pair="AVAX/USD"
              side="buy"
              amount="85 AVAX"
              price="$38.92"
              time="5 hr ago"
            />
          </div>
          <div className="border-t px-6 py-3">
            <button className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
              View all trades &rarr;
            </button>
          </div>
        </div>

        {/* Activity feed */}
        <div className="rounded-xl border bg-card shadow-sm lg:col-span-3">
          <div className="border-b px-6 py-4">
            <h2 className="font-semibold">Activity</h2>
            <p className="text-xs text-muted-foreground">
              Recent account activity
            </p>
          </div>
          <div className="flex flex-col gap-0 divide-y">
            <ActivityItem
              title="Deposit confirmed"
              description="$5,000.00 USDC deposited to your account"
              time="10 min ago"
            />
            <ActivityItem
              title="Limit order placed"
              description="Buy 0.5 BTC at $66,000.00"
              time="45 min ago"
            />
            <ActivityItem
              title="Stop loss triggered"
              description="Sold 2.0 ETH at $3,800.00"
              time="2 hr ago"
            />
            <ActivityItem
              title="API key created"
              description="New read-only API key generated"
              time="6 hr ago"
            />
            <ActivityItem
              title="Login detected"
              description="New session from Chrome on macOS"
              time="8 hr ago"
            />
          </div>
        </div>
      </div>

      {/* Portfolio allocation */}
      <div className="rounded-xl border bg-card shadow-sm">
        <div className="border-b px-6 py-4">
          <h2 className="font-semibold">Portfolio Allocation</h2>
          <p className="text-xs text-muted-foreground">
            Current distribution of your holdings
          </p>
        </div>
        <div className="px-6 py-4">
          <div className="flex gap-1 overflow-hidden rounded-full">
            <div
              className="h-3 bg-primary"
              style={{ width: "42%" }}
              title="BTC 42%"
            />
            <div
              className="h-3 bg-primary/70"
              style={{ width: "28%" }}
              title="ETH 28%"
            />
            <div
              className="h-3 bg-primary/50"
              style={{ width: "15%" }}
              title="SOL 15%"
            />
            <div
              className="h-3 bg-primary/30"
              style={{ width: "15%" }}
              title="Other 15%"
            />
          </div>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <LegendItem color="bg-primary" label="BTC" value="42%" />
            <LegendItem color="bg-primary/70" label="ETH" value="28%" />
            <LegendItem color="bg-primary/50" label="SOL" value="15%" />
            <LegendItem color="bg-primary/30" label="Other" value="15%" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  change,
  trend,
}: {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
}) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <p className="text-sm font-medium text-muted-foreground">{title}</p>
      <p className="mt-2 text-2xl font-bold tracking-tight">{value}</p>
      <p
        className={`mt-1 text-xs font-medium ${
          trend === "up" ? "text-emerald-600" : "text-red-500"
        }`}
      >
        {trend === "up" ? "↑" : "↓"} {change} from last period
      </p>
    </div>
  );
}

function TradeRow({
  pair,
  side,
  amount,
  price,
  time,
}: {
  pair: string;
  side: "buy" | "sell";
  amount: string;
  price: string;
  time: string;
}) {
  return (
    <div className="flex items-center justify-between px-6 py-3">
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex h-6 w-12 items-center justify-center rounded text-xs font-semibold uppercase ${
            side === "buy"
              ? "bg-emerald-500/10 text-emerald-600"
              : "bg-red-500/10 text-red-500"
          }`}
        >
          {side}
        </span>
        <div>
          <p className="text-sm font-medium">{pair}</p>
          <p className="text-xs text-muted-foreground">{amount}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium">{price}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  );
}

function ActivityItem({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div className="px-6 py-3">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-medium">{title}</p>
          <p className="truncate text-xs text-muted-foreground">
            {description}
          </p>
        </div>
        <span className="shrink-0 text-xs text-muted-foreground">{time}</span>
      </div>
    </div>
  );
}

function LegendItem({
  color,
  label,
  value,
}: {
  color: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className={`size-2.5 rounded-full ${color}`} />
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
