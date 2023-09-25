import { Hash } from "lucide-react";
import MobileToggle from "../mobile-toggle";
import { UserAvatar } from "../user-avatar";
import { SocketIndicator } from "../socket-indicator";
import { ChatVideoButton } from "./chat-video-button";

interface IChatHeaderProps {
  serverId: string;
  name: string;
  type: "channel" | "conversations";
  imageUrl?: string;
}

export default function ChatHeader({
  serverId,
  name,
  type,
  imageUrl,
}: IChatHeaderProps) {
  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
      <MobileToggle serverId={serverId} />
      {type === "channel" && (
        <Hash className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2" />
      )}
      {type === "conversations" && (
        <UserAvatar src={imageUrl} className="h-5 w-5 md:h-8 md:w-8 mr-2" />
      )}
      <p className="font-semibold text-md text-black dark:text-white">{name}</p>
      <div className="flex items-center ml-auto">
        {type === "conversations" && <ChatVideoButton />}
        <SocketIndicator />
      </div>
    </div>
  );
}
