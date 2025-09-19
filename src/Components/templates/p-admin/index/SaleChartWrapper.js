"use client";

import dynamic from "next/dynamic";


const SaleChart = dynamic(
  () => import("@/Components/templates/p-admin/index/SaleChart"),
  { ssr: false }
);

export default function SaleChartWrapper({ data }) {
  return <SaleChart data={data} />;
}
