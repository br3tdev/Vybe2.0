import { Hash } from "lucide-react";

interface IChatWelcomeProps {
  name: string;
  type: "channel" | "conversation";
}

export function ChatWelcome({ name, type }: IChatWelcomeProps) {
  return (
    <div className="space-y-2 px-4 mb-4">
      {type === "channel" && (
        <div className="flex items-center justify-center h-[75px] w-[75px] rounded-full bg-zinc-500 dark:bg-zinc-700 ">
          <Hash className="h-12 w-12 text-white" />
        </div>
      )}
      <p className="font-bold text-xl md:text-3xl">
        {type === "channel" ? "Welcome to #" : ""}
        {name}
      </p>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        {type === "channel"
          ? `This is the start of the #${name} channel`
          : `This is the start of your conversation with ${name}`}
      </p>
    </div>
  );
}
