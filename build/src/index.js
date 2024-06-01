"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
const container = document.getElementById('app-root');
const root = (0, client_1.createRoot)(container);
root.render(react_1.default.createElement("h1", null, "Hello React!"));
//# sourceMappingURL=index.js.map