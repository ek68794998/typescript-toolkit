import z from "zod";

export const keyCodeSchema = z.enum([
	"AltLeft",
	"AltRight",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowUp",
	"Backquote",
	"Backslash",
	"Backspace",
	"BracketLeft",
	"BracketRight",
	"CapsLock",
	"Comma",
	"ContextMenu",
	"ControlLeft",
	"ControlRight",
	"Delete",
	"Digit0",
	"Digit1",
	"Digit2",
	"Digit3",
	"Digit4",
	"Digit5",
	"Digit6",
	"Digit7",
	"Digit8",
	"Digit9",
	"End",
	"Enter",
	"Equal",
	"Escape",
	"F1",
	"F10",
	"F11",
	"F12",
	"F2",
	"F3",
	"F4",
	"F5",
	"F6",
	"F7",
	"F8",
	"F9",
	"Home",
	"Insert",
	"KeyA",
	"KeyB",
	"KeyC",
	"KeyD",
	"KeyE",
	"KeyF",
	"KeyG",
	"KeyH",
	"KeyI",
	"KeyJ",
	"KeyK",
	"KeyL",
	"KeyM",
	"KeyN",
	"KeyO",
	"KeyP",
	"KeyQ",
	"KeyR",
	"KeyS",
	"KeyT",
	"KeyU",
	"KeyV",
	"KeyW",
	"KeyX",
	"KeyY",
	"KeyZ",
	"MetaLeft",
	"MetaRight",
	"Minus",
	"NumLock",
	"Numpad0",
	"Numpad1",
	"Numpad2",
	"Numpad3",
	"Numpad4",
	"Numpad5",
	"Numpad6",
	"Numpad7",
	"Numpad8",
	"Numpad9",
	"NumpadAdd",
	"NumpadDecimal",
	"NumpadDivide",
	"NumpadMultiply",
	"NumpadSubtract",
	"PageDown",
	"PageUp",
	"Pause",
	"Period",
	"PrintScreen",
	"Quote",
	"ScrollLock",
	"Semicolon",
	"ShiftLeft",
	"ShiftRight",
	"Slash",
	"Space",
	"Tab",
] as const);

export type KeyCode = z.infer<typeof keyCodeSchema>;

export const asKeyCode = (value: unknown): KeyCode =>
	keyCodeSchema.parse(value);

export const isKeyCode = (obj: unknown): obj is KeyCode =>
	keyCodeSchema.safeParse(obj).success;

export const AltLeft: KeyCode = "AltLeft";
export const AltRight: KeyCode = "AltRight";
export const ArrowDown: KeyCode = "ArrowDown";
export const ArrowLeft: KeyCode = "ArrowLeft";
export const ArrowRight: KeyCode = "ArrowRight";
export const ArrowUp: KeyCode = "ArrowUp";
export const Backquote: KeyCode = "Backquote";
export const Backslash: KeyCode = "Backslash";
export const Backspace: KeyCode = "Backspace";
export const BracketLeft: KeyCode = "BracketLeft";
export const BracketRight: KeyCode = "BracketRight";
export const CapsLock: KeyCode = "CapsLock";
export const Comma: KeyCode = "Comma";
export const ContextMenu: KeyCode = "ContextMenu";
export const ControlLeft: KeyCode = "ControlLeft";
export const ControlRight: KeyCode = "ControlRight";
export const Delete: KeyCode = "Delete";
export const Digit0: KeyCode = "Digit0";
export const Digit1: KeyCode = "Digit1";
export const Digit2: KeyCode = "Digit2";
export const Digit3: KeyCode = "Digit3";
export const Digit4: KeyCode = "Digit4";
export const Digit5: KeyCode = "Digit5";
export const Digit6: KeyCode = "Digit6";
export const Digit7: KeyCode = "Digit7";
export const Digit8: KeyCode = "Digit8";
export const Digit9: KeyCode = "Digit9";
export const End: KeyCode = "End";
export const Enter: KeyCode = "Enter";
export const Equal: KeyCode = "Equal";
export const Escape: KeyCode = "Escape";
export const F1: KeyCode = "F1";
export const F10: KeyCode = "F10";
export const F11: KeyCode = "F11";
export const F12: KeyCode = "F12";
export const F2: KeyCode = "F2";
export const F3: KeyCode = "F3";
export const F4: KeyCode = "F4";
export const F5: KeyCode = "F5";
export const F6: KeyCode = "F6";
export const F7: KeyCode = "F7";
export const F8: KeyCode = "F8";
export const F9: KeyCode = "F9";
export const Home: KeyCode = "Home";
export const Insert: KeyCode = "Insert";
export const KeyA: KeyCode = "KeyA";
export const KeyB: KeyCode = "KeyB";
export const KeyC: KeyCode = "KeyC";
export const KeyD: KeyCode = "KeyD";
export const KeyE: KeyCode = "KeyE";
export const KeyF: KeyCode = "KeyF";
export const KeyG: KeyCode = "KeyG";
export const KeyH: KeyCode = "KeyH";
export const KeyI: KeyCode = "KeyI";
export const KeyJ: KeyCode = "KeyJ";
export const KeyK: KeyCode = "KeyK";
export const KeyL: KeyCode = "KeyL";
export const KeyM: KeyCode = "KeyM";
export const KeyN: KeyCode = "KeyN";
export const KeyO: KeyCode = "KeyO";
export const KeyP: KeyCode = "KeyP";
export const KeyQ: KeyCode = "KeyQ";
export const KeyR: KeyCode = "KeyR";
export const KeyS: KeyCode = "KeyS";
export const KeyT: KeyCode = "KeyT";
export const KeyU: KeyCode = "KeyU";
export const KeyV: KeyCode = "KeyV";
export const KeyW: KeyCode = "KeyW";
export const KeyX: KeyCode = "KeyX";
export const KeyY: KeyCode = "KeyY";
export const KeyZ: KeyCode = "KeyZ";
export const MetaLeft: KeyCode = "MetaLeft";
export const MetaRight: KeyCode = "MetaRight";
export const Minus: KeyCode = "Minus";
export const NumLock: KeyCode = "NumLock";
export const Numpad0: KeyCode = "Numpad0";
export const Numpad1: KeyCode = "Numpad1";
export const Numpad2: KeyCode = "Numpad2";
export const Numpad3: KeyCode = "Numpad3";
export const Numpad4: KeyCode = "Numpad4";
export const Numpad5: KeyCode = "Numpad5";
export const Numpad6: KeyCode = "Numpad6";
export const Numpad7: KeyCode = "Numpad7";
export const Numpad8: KeyCode = "Numpad8";
export const Numpad9: KeyCode = "Numpad9";
export const NumpadAdd: KeyCode = "NumpadAdd";
export const NumpadDecimal: KeyCode = "NumpadDecimal";
export const NumpadDivide: KeyCode = "NumpadDivide";
export const NumpadMultiply: KeyCode = "NumpadMultiply";
export const NumpadSubtract: KeyCode = "NumpadSubtract";
export const PageDown: KeyCode = "PageDown";
export const PageUp: KeyCode = "PageUp";
export const Pause: KeyCode = "Pause";
export const Period: KeyCode = "Period";
export const PrintScreen: KeyCode = "PrintScreen";
export const Quote: KeyCode = "Quote";
export const ScrollLock: KeyCode = "ScrollLock";
export const Semicolon: KeyCode = "Semicolon";
export const ShiftLeft: KeyCode = "ShiftLeft";
export const ShiftRight: KeyCode = "ShiftRight";
export const Slash: KeyCode = "Slash";
export const Space: KeyCode = "Space";
export const Tab: KeyCode = "Tab";
