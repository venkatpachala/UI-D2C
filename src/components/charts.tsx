import { useEffect, useState, type ReactNode } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { intentSeries, resolutionSeries, toolReliability } from "@/lib/data";

function Frame({ children }: { children: ReactNode }) {
  const [on, setOn] = useState(false);
  useEffect(() => setOn(true), []);
  if (!on) return <div className="h-44" />;
  return <div className="h-44">{children}</div>;
}

const tip = {
  contentStyle: {
    background: "#12151b",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 8,
    fontSize: 12,
    color: "#f7f8fa",
  },
};

export function ResolutionChart() {
  return (
    <Frame>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={resolutionSeries}>
          <XAxis dataKey="d" tick={{ fill: "#6f7782", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis hide domain={[60, 85]} />
          <Tooltip {...tip} />
          <Area
            type="monotone"
            dataKey="rate"
            name="Resolution %"
            stroke="#6d6aff"
            fill="rgba(109,106,255,0.18)"
            strokeWidth={1.5}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Frame>
  );
}

export function IntentChart() {
  return (
    <Frame>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={intentSeries}>
          <XAxis dataKey="name" tick={{ fill: "#6f7782", fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip {...tip} />
          <Bar dataKey="value" fill="#a1a8b3" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Frame>
  );
}

export function ToolChart() {
  return (
    <Frame>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={toolReliability} layout="vertical" margin={{ left: 16 }}>
          <XAxis type="number" hide domain={[90, 100]} />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: "#a1a8b3", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={72}
          />
          <Tooltip {...tip} />
          <Bar dataKey="value" fill="#3dbe8b" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Frame>
  );
}

export function LatencyChart() {
  return (
    <Frame>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={resolutionSeries}>
          <XAxis dataKey="d" tick={{ fill: "#6f7782", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip {...tip} />
          <Area
            type="monotone"
            dataKey="latency"
            name="P95 s"
            stroke="#e2b15a"
            fill="rgba(226,177,90,0.15)"
            strokeWidth={1.5}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Frame>
  );
}
