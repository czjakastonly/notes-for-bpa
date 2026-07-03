import react from "react";
import { LastEventProvider, useGetWasLastEventTypeKeyboard } from "./LastEventProvider/index.js";
import { ImperativeModalWindowProvider } from "./ImperativeModalWindowProvider/index.js";
const Provider = ({ children })=>/*#__PURE__*/ react.createElement(LastEventProvider, null, /*#__PURE__*/ react.createElement(ImperativeModalWindowProvider, null, children));
const providers = Provider;
export { ImperativeModalWindowProvider, LastEventProvider, Provider, providers as default, useGetWasLastEventTypeKeyboard };
