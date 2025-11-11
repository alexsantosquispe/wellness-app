import SessionCard from "../atoms/SessionCard";
import type { SessionType } from "../../models/types";
import { getSessions } from "../../service/api";
import { useQuery } from "@tanstack/react-query";

const SessionsGrid = () => {
  const { data: sessions, isLoading } = useQuery<SessionType[]>({
    queryKey: ["sessions"],
    queryFn: getSessions
  });

  if (isLoading) {
    return (
      <div className="flex min-h-1/2 w-full flex-1 items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sessions?.map((session) => (
        <SessionCard key={session.id} {...session} />
      ))}
    </div>
  );
};

export default SessionsGrid;
