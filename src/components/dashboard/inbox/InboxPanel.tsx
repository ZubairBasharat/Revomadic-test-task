import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  ChevronLeft,
  MessageSquare,
  Send,
  Stars,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { useInboxUsers } from "@/hooks/useInbox";

interface InboxPanelProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function InboxPanel({ open, setOpen }: InboxPanelProps) {
  const { data: users, isLoading, isError, error } = useInboxUsers();

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="bg-transparent">
      <Card
        className={`sticky top-24 h-max pb-10 transition-all duration-700 ease-in-out
          ${open ? "w-[320px]" : "w-18"}
          ${open ? "rounded-3xl" : "rounded-full"}
          bg-white/10 backdrop-filter backdrop-blur-lg
          border border-white/30 shadow-xl flex flex-col
        `}
      >
        {/* HEADER / TOGGLE */}
        <div className="flex items-center justify-center border-b border-gray-200/50">
          <CollapsibleTrigger asChild className="flex items-center mb-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-card border"
            >
              <ChevronLeft
                className={`h-4 w-4 transition-transform ${
                  open ? "rotate-0" : "rotate-180"
                }`}
              />
            </Button>
          </CollapsibleTrigger>
        </div>

        {/* COLLAPSED AVATARS */}
        {!open && (
          <div className="flex flex-col items-center gap-3 py-2">
            {isLoading &&
              Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-9 w-9 rounded-lg" />
              ))}

            {isError && (
              <p className="text-red-500 text-xs">{(error as Error).message}</p>
            )}

            {users?.map((user) => (
              <Avatar
                key={user.id}
                className="h-9 w-9 border border-white shadow rounded-lg"
              >
                <AvatarImage src={user.img} />
                <AvatarFallback className="rounded-lg">
                  {user.name[0]}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
        )}

        {/* EXPANDED CONTENT */}
        <CollapsibleContent className="flex flex-col items-center flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 w-full">
            {isLoading &&
              Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-12 rounded-xl" />
              ))}

            {isError && (
              <p className="text-red-500 text-xs">{(error as Error).message}</p>
            )}

            {users?.map((user) => (
              <div
                key={user.id}
                className="group rounded-2xl p-3 cursor-pointer transition-all duration-300
                  bg-card border border-white/40 shadow-sm hover:shadow-md hover:bg-white/80"
              >
                <div className="flex items-start gap-3">
                  <Avatar className="h-9 w-9 rounded-full">
                    <AvatarImage src={user.img} />
                    <AvatarFallback>{user.name[0]}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1 overflow-hidden">
                    <p className="text-xs font-semibold truncate">
                      {user.name}
                    </p>
                    <p className="text-xs opacity-70 truncate">
                      Latest message preview…
                    </p>
                  </div>

                  <span className="text-[10px] opacity-50 whitespace-nowrap">
                    2h ago
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 bg-gray-50 p-3 space-y-2">
            {/* Quick Reply */}
            <div className="relative">
              <textarea
                placeholder="Quick reply..."
                rows={1}
                className="min-h-20 w-full resize-none rounded-lg bg-card shadow-md border-px border-gray-100 px-3 py-2 pr-11 text-sm placeholder:text-gray-400 focus:outline-none"
                onInput={(e) => {
                  const el = e.currentTarget;
                  el.style.height = "auto";
                  el.style.height = el.scrollHeight + "px";
                }}
              />

              <button className="absolute right-1.5 bottom-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* View Full Inbox */}
            <a href="#">
              <Button
                variant="ghost"
                className="w-full h-10 rounded-lg text-sm font-medium text-gray-700 bg-card shadow-sm hover:bg-gray-100 mt-4"
              >
                <MessageSquare className="inline-block mr-1 h-4 w-4" />
                View Full Inbox
                <ArrowUpRight className="inline-block h-3 w-3 text-gray-500" />
              </Button>
            </a>

            <a href="">
              <Button className="w-full h-11 rounded-lg bg-black text-white hover:bg-black/90 mt-4">
                <Stars className="inline-block mr-1 h-4 w-4" />
                AI Chat Assistant
              </Button>
            </a>
          </div>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}
