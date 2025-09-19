"use client";

import dynamic from "next/dynamic";

const GrowthChart = dynamic(
  () => import("@/Components/templates/p-admin/index/GrowthChart"),
  { ssr: false }
);

export default function GrowthChartWrapper({ data }) {
  return <GrowthChart data={data} />;
}
