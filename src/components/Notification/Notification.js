import { jsx as _jsx } from "react/jsx-runtime";
import css from "./Notification.module.css";
const Notification = () => {
    return _jsx("p", { className: css.message, children: "No feedback yet" });
};
export default Notification;
