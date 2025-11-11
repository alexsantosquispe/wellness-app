import SessionCard from "../atoms/SessionCard";
import type { SessionType } from "../../models/types";
import { getSessions } from "../../service/api";
import { useQuery } from "@tanstack/react-query";

const SessionsGrid = () => {
  const { data: sessions } = useQuery<SessionType[]>({
    queryKey: ["sessions"],
    queryFn: getSessions
  });

  return (
    <div className="grid w-full gap-8 p-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sessions?.map((session) => (
        <SessionCard key={session.id} {...session} />
      ))}
    </div>
  );
};

export default SessionsGrid;
