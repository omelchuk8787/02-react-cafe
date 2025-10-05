import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import css from "./VoteStats.module.css";
const VoteStats = ({ votes, totalVotes, positiveRate, }) => {
    return (_jsxs("div", { className: css.container, children: [_jsxs("p", { className: css.stat, children: ["Good: ", _jsx("strong", { children: votes.good })] }), _jsxs("p", { className: css.stat, children: ["Neutral: ", _jsx("strong", { children: votes.neutral })] }), _jsxs("p", { className: css.stat, children: ["Bad: ", _jsx("strong", { children: votes.bad })] }), _jsxs("p", { className: css.stat, children: ["Total: ", _jsx("strong", { children: totalVotes })] }), _jsxs("p", { className: css.stat, children: ["Positive: ", _jsxs("strong", { children: [positiveRate, "%"] })] })] }));
};
export default VoteStats;
