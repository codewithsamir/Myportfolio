"use client";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animation from "@/public/lottie/laptop.json";

export default function LaptopAnimation({ className }: { className?: string }) {
  return <Lottie className={className} animationData={animation} loop={true} />;
}
