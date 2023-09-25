import ServerSideBar from "@/components/server/server-sidebar";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function ServerIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { serverId: string };
}) {
  const profile = await currentProfile();

  if (!profile) return redirectToSignIn();

  const server = db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (!server) return redirect("/");

  return (
    <section className="h-full">
      <div className="hidden fixed md:flex flex-col h-full w-60 z-20 inset-y-0">
        <ServerSideBar serverId={params.serverId} />
      </div>
      <section className="h-full md:pl-60">{children}</section>
    </section>
  );
}
