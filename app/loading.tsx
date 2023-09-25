import { Spinner } from "@nextui-org/react";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex h-full items-center justify-center">
      <p className="animate-pulse font-serif text-4xl">V Y B E</p>
    </div>
  );
}
