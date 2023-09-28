import { Spinner } from "@nextui-org/react";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex h-full items-center justify-center">
      <p className="animate-pulse font-serif text-white text-4xl">vybe2{" "}
        <span className="text-base inline-block">by Brtdev</span>
      </p>
    </div>
  );
}
