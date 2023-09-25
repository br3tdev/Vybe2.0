import * as React from "react";

export default function AuthPageLoyout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex justify-center items-center h-full">
      {children}
    </section>
  );
}
