type TickerItem = {
  label: string;
  value: string;
  up: boolean;
};

const ITEMS: TickerItem[] = [
  { label: "NEXT.JS", value: "100%", up: true },
  { label: "TYPESCRIPT", value: "100%", up: true },
  { label: "SUPABASE", value: "98%", up: true },
  { label: "TAILWIND", value: "100%", up: true },
  { label: "REACT", value: "100%", up: true },
  { label: "MES/ES/MNQ/NQ", value: "LIVE", up: true },
  { label: "DEBUG STREAK", value: "∞", up: true },
];

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {ITEMS.map((item) => (
        <span
          key={item.label}
          className="flex items-center gap-2 font-mono text-xs tracking-wide text-muted"
        >
          <span className="text-paper">{item.label}</span>
          <span className={item.up ? "text-lime" : "text-coral"}>
            {item.up ? "▲" : "▼"} {item.value}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div
      className="w-full overflow-hidden border-y border-panel2 bg-panel py-2"
      role="marquee"
      aria-label="Stack e status em tempo real"
    >
      <div className="flex w-max animate-marquee">
        <Row />
        <div aria-hidden="true" className="flex shrink-0">
          <Row />
        </div>
      </div>
    </div>
  );
}
