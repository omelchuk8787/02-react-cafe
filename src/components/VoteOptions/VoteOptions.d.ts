import React from "react";
import { VoteType } from "../../types/votes";
interface VoteOptionsProps {
    onVote: (type: VoteType) => void;
    onReset: () => void;
    canReset: boolean;
}
declare const VoteOptions: React.FC<VoteOptionsProps>;
export default VoteOptions;
