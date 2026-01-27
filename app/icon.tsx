import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Intelligence",
  description: "Transform your data into strategic advantage",
};

export default function Icon() {
  return new Response(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="#001538"/>
      <text x="50" y="60" font-size="60" font-weight="bold" text-anchor="middle" fill="white">D</text>
    </svg>`,
    {
      headers: {
        "Content-Type": "image/svg+xml",
      },
    }
  );
}
