import React from "react";
import { Votes } from "../../types/votes";
interface VoteStatsProps {
    votes: Votes;
    totalVotes: number;
    positiveRate: number;
}
declare const VoteStats: React.FC<VoteStatsProps>;
export default VoteStats;
