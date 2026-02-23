import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/analytics")({
  component: Analytics,
});

function Analytics() {
  return (
    <div className="flex flex-col gap-8">
      {/* Page header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="mt-1 text-muted-foreground">
          Detailed insights into your trading performance.
        </p>
      </div>

      {/* Time range selector */}
      <div className="flex items-center gap-2">
        {["24h", "7d", "30d", "90d", "1y", "All"].map((range) => (
          <button
            key={range}
            className="inline-flex h-8 items-center justify-center rounded-md border bg-background px-3 text-xs font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground first:bg-primary first:text-primary-foreground first:border-primary first:hover:bg-primary/90"
          >
            {range}
          </button>
        ))}
      </div>

      {/* Performance summary */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Return"
          value="+$12,482.30"
          subtitle="Since inception"
          trend="up"
        />
        <MetricCard
          title="Sharpe Ratio"
          value="1.84"
          subtitle="Risk-adjusted return"
          trend="up"
        />
        <MetricCard
          title="Max Drawdown"
          value="-8.3%"
          subtitle="Worst peak-to-trough"
          trend="down"
        />
        <MetricCard
          title="Total Trades"
          value="342"
          subtitle="Since inception"
          trend="up"
        />
      </div>

      {/* Chart placeholder */}
      <div className="rounded-xl border bg-card shadow-sm">
        <div className="border-b px-6 py-4">
          <h2 className="font-semibold">Equity Curve</h2>
          <p className="text-xs text-muted-foreground">
            Portfolio value over time
          </p>
        </div>
        <div className="flex h-72 items-center justify-center px-6 py-8">
          <div className="flex w-full items-end justify-between gap-1.5 h-full px-4">
            {equityCurveData.map((point, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-t bg-primary/80 transition-all hover:bg-primary"
                  style={{ height: `${point.value}%` }}
                  title={`${point.label}: $${point.amount}`}
                />
                {i % 4 === 0 && (
                  <span className="text-[10px] text-muted-foreground">
                    {point.label}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed stats grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Win/Loss breakdown */}
        <div className="rounded-xl border bg-card shadow-sm">
          <div className="border-b px-6 py-4">
            <h2 className="font-semibold">Win / Loss Breakdown</h2>
            <p className="text-xs text-muted-foreground">
              Performance by trade outcome
            </p>
          </div>
          <div className="px-6 py-4">
            {/* Win/loss bar */}
            <div className="flex gap-0.5 overflow-hidden rounded-full">
              <div
                className="h-3 bg-emerald-500"
                style={{ width: "68%" }}
                title="Wins 68%"
              />
              <div
                className="h-3 bg-red-500"
                style={{ width: "32%" }}
                title="Losses 32%"
              />
            </div>
            <div className="mt-4 flex justify-between text-sm">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-emerald-500" />
                <span className="text-muted-foreground">Wins</span>
                <span className="font-medium">233 (68.1%)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-red-500" />
                <span className="text-muted-foreground">Losses</span>
                <span className="font-medium">109 (31.9%)</span>
              </div>
            </div>
            <div className="mt-6 divide-y">
              <StatsRow label="Average Win" value="+$186.40" />
              <StatsRow label="Average Loss" value="-$98.20" />
              <StatsRow label="Largest Win" value="+$2,840.00" />
              <StatsRow label="Largest Loss" value="-$680.00" />
              <StatsRow label="Profit Factor" value="2.14" />
              <StatsRow label="Expectancy" value="+$95.62" />
            </div>
          </div>
        </div>

        {/* Trading pairs performance */}
        <div className="rounded-xl border bg-card shadow-sm">
          <div className="border-b px-6 py-4">
            <h2 className="font-semibold">Performance by Pair</h2>
            <p className="text-xs text-muted-foreground">
              Return breakdown across trading pairs
            </p>
          </div>
          <div className="divide-y">
            <PairRow
              pair="BTC/USD"
              trades={124}
              pnl="+$6,420.00"
              winRate="72.6%"
              trend="up"
            />
            <PairRow
              pair="ETH/USD"
              trades={89}
              pnl="+$3,180.50"
              winRate="66.3%"
              trend="up"
            />
            <PairRow
              pair="SOL/USD"
              trades={62}
              pnl="+$2,240.80"
              winRate="69.4%"
              trend="up"
            />
            <PairRow
              pair="AVAX/USD"
              trades={38}
              pnl="+$841.00"
              winRate="63.2%"
              trend="up"
            />
            <PairRow
              pair="DOGE/USD"
              trades={29}
              pnl="-$200.00"
              winRate="48.3%"
              trend="down"
            />
          </div>
        </div>
      </div>

      {/* Monthly returns */}
      <div className="rounded-xl border bg-card shadow-sm">
        <div className="border-b px-6 py-4">
          <h2 className="font-semibold">Monthly Returns</h2>
          <p className="text-xs text-muted-foreground">
            Month-over-month performance
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="px-6 py-3 font-medium text-muted-foreground">
                  Month
                </th>
                <th className="px-6 py-3 font-medium text-muted-foreground">
                  Return
                </th>
                <th className="px-6 py-3 font-medium text-muted-foreground">
                  P&L
                </th>
                <th className="px-6 py-3 font-medium text-muted-foreground">
                  Trades
                </th>
                <th className="px-6 py-3 font-medium text-muted-foreground">
                  Win Rate
                </th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {monthlyReturns.map((month) => (
                <tr
                  key={month.name}
                  className="transition-colors hover:bg-muted/50"
                >
                  <td className="px-6 py-3 font-medium">{month.name}</td>
                  <td
                    className={`px-6 py-3 font-medium ${
                      month.positive ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {month.returnPct}
                  </td>
                  <td
                    className={`px-6 py-3 ${
                      month.positive ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {month.pnl}
                  </td>
                  <td className="px-6 py-3 text-muted-foreground">
                    {month.trades}
                  </td>
                  <td className="px-6 py-3 text-muted-foreground">
                    {month.winRate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ── Components ──

function MetricCard({
  title,
  value,
  subtitle,
  trend,
}: {
  title: string;
  value: string;
  subtitle: string;
  trend: "up" | "down";
}) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <p className="text-sm font-medium text-muted-foreground">{title}</p>
      <p
        className={`mt-2 text-2xl font-bold tracking-tight ${
          trend === "up" ? "text-emerald-600" : "text-red-500"
        }`}
      >
        {value}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
    </div>
  );
}

function StatsRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}

function PairRow({
  pair,
  trades,
  pnl,
  winRate,
  trend,
}: {
  pair: string;
  trades: number;
  pnl: string;
  winRate: string;
  trend: "up" | "down";
}) {
  return (
    <div className="flex items-center justify-between px-6 py-3">
      <div>
        <p className="text-sm font-medium">{pair}</p>
        <p className="text-xs text-muted-foreground">{trades} trades</p>
      </div>
      <div className="text-right">
        <p
          className={`text-sm font-medium ${
            trend === "up" ? "text-emerald-600" : "text-red-500"
          }`}
        >
          {pnl}
        </p>
        <p className="text-xs text-muted-foreground">{winRate} win rate</p>
      </div>
    </div>
  );
}

// ── Mock data ──

const equityCurveData = [
  { label: "Jan", value: 25, amount: "36,200" },
  { label: "Feb", value: 30, amount: "37,800" },
  { label: "Mar", value: 28, amount: "37,100" },
  { label: "Apr", value: 35, amount: "38,900" },
  { label: "May", value: 42, amount: "40,200" },
  { label: "Jun", value: 38, amount: "39,500" },
  { label: "Jul", value: 45, amount: "41,400" },
  { label: "Aug", value: 50, amount: "42,600" },
  { label: "Sep", value: 48, amount: "42,100" },
  { label: "Oct", value: 55, amount: "43,800" },
  { label: "Nov", value: 62, amount: "45,300" },
  { label: "Dec", value: 58, amount: "44,600" },
  { label: "Jan", value: 65, amount: "46,200" },
  { label: "Feb", value: 70, amount: "47,100" },
  { label: "Mar", value: 68, amount: "46,800" },
  { label: "Apr", value: 75, amount: "48,000" },
  { label: "May", value: 80, amount: "48,352" },
];

const monthlyReturns = [
  {
    name: "May 2025",
    returnPct: "+4.2%",
    pnl: "+$1,940.00",
    trades: 38,
    winRate: "71.1%",
    positive: true,
  },
  {
    name: "Apr 2025",
    returnPct: "+2.8%",
    pnl: "+$1,260.00",
    trades: 42,
    winRate: "66.7%",
    positive: true,
  },
  {
    name: "Mar 2025",
    returnPct: "-1.2%",
    pnl: "-$540.00",
    trades: 31,
    winRate: "51.6%",
    positive: false,
  },
  {
    name: "Feb 2025",
    returnPct: "+5.1%",
    pnl: "+$2,280.00",
    trades: 44,
    winRate: "72.7%",
    positive: true,
  },
  {
    name: "Jan 2025",
    returnPct: "+3.6%",
    pnl: "+$1,580.00",
    trades: 36,
    winRate: "69.4%",
    positive: true,
  },
  {
    name: "Dec 2024",
    returnPct: "-0.8%",
    pnl: "-$350.00",
    trades: 28,
    winRate: "53.6%",
    positive: false,
  },
];
