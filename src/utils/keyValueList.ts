//

export interface KeyValues {
  // Modifier keys
  Alt: string;
  AltGraph: string;
  CapsLock: string;
  Control: string;
  Fn: string;
  FnLock: string;
  Hyper: string;
  Meta: string;
  NumLock: string;
  ScrollLock: string;
  Shift: string;
  Super: string;
  Symbol: string;
  SymbolLock: string;

  // Whitespace keys
  Enter: string;
  Tab: string;
  Space: string;

  // Navigation keys
  ArrowDown: string;
  ArrowLeft: string;
  ArrowRight: string;
  ArrowUp: string;
  End: string;
  Home: string;
  PageDown: string;
  PageUp: string;

  // Editing keys
  Backspace: string;
  Clear: string;
  Copy: string;
  CrSel: string;
  Cut: string;
  Delete: string;
  EraseEof: string;
  ExSel: string;
  Insert: string;
  Paste: string;
  Redo: string;
  Undo: string;

  // UI keys
  Accept: string;
  Again: string;
  Attn: string;
  Cancel: string;
  ContextMenu: string;
  Escape: string;
  Execute: string;
  Find: string;
  Finish: string;
  Help: string;
  Pause: string;
  Play: string;
  Props: string;
  Select: string;
  ZoomIn: string;
  ZoomOut: string;

  // Device keys
  BrightnessDown: string;
  BrightnessUp: string;
  Eject: string;
  LogOff: string;
  Power: string;
  PowerOff: string;
  PrintScreen: string;
  Hibernate: string;
  Standby: string;
  WakeUp: string;

  // Common IME keys
  AllCandidates: string;
  Alphanumeric: string;
  CodeInput: string;
  Compose: string;
  Convert: string;
  Dead: string;
  FinalMode: string;
  GroupFirst: string;
  GroupLast: string;
  GroupNext: string;
  GroupPrevious: string;
  ModeChange: string;
  NextCandidate: string;
  NonConvert: string;
  PreviousCandidate: string;
  Process: string;
  SingleCandidate: string;

  // Korean keyboards only
  HangulMode: string;
  HanjaMode: string;
  JunjaMode: string;

  // Japanese keyboards only
  Eisu: string;
  Hankaku: string;
  Hiragana: string;
  HiraganaKatakana: string;
  KanaMode: string;
  Kana: string;
  KanjiMode: string;
  Katakana: string;
  Romaji: string;
  Zenkaku: string;
  ZenkakuHanaku: string;

  // Function keys
  F1: string;
  F2: string;
  F3: string;
  F4: string;
  F5: string;
  F6: string;
  F7: string;
  F8: string;
  F9: string;
  F10: string;
  F11: string;
  F12: string;
  F13: string;
  F14: string;
  F15: string;
  F16: string;
  F17: string;
  F18: string;
  F19: string;
  F20: string;
  F21: string;
  F22: string;
  F23: string;
  F24: string;

  // Alphabetical characters
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;
  h: string;
  i: string;
  j: string;
  k: string;
  l: string;
  m: string;
  n: string;
  o: string;
  p: string;
  q: string;
  r: string;
  s: string;
  t: string;
  u: string;
  v: string;
  w: string;
  x: string;
  y: string;
  z: string;

  A: string;
  B: string;
  C: string;
  D: string;
  E: string;
  F: string;
  G: string;
  H: string;
  I: string;
  J: string;
  K: string;
  L: string;
  M: string;
  N: string;
  O: string;
  P: string;
  Q: string;
  R: string;
  S: string;
  T: string;
  U: string;
  V: string;
  W: string;
  X: string;
  Y: string;
  Z: string;

  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
  "6": string;
  "7": string;
  "8": string;
  "9": string;
  "0": string;

  "!": string;
  "@": string;
  "#": string;
  $: string;
  "%": string;
  "&": string;
  "*": string;
  "(": string;
  ")": string;
  "-": string;
  "+": string;
  _: string;
  "=": string;
  "[": string;
  "]": string;
  "{": string;
  "}": string;
  ";": string;
  ":": string;
  '"': string;
  "'": string;
  "<": string;
  ">": string;
  "?": string;
  "/": string;
  "\\": string;
  "`": string;
  "~": string;

  // Document keys
  Close: string;
  MailForward: string;
  MailReply: string;
  MailSend: string;
  MediaPlayPause: string;
  MediaSelect: string;
  MediaStop: string;
  MediaTrackNext: string;
  MediaTrackPrevious: string;
  New: string;
  Open: string;
  Print: string;
  Save: string;
  SpellCheck: string;
  VolumeDown: string;
  VolumeMute: string;
  VolumeUp: string;

  // device specific
  AirplaneMode: string;
  Bluetooth: string;
  BrightnessCycle: string;
  Camera: string;
  DisplayBrightnessIncrement: string;
  DisplayBrightnessDecrement: string;
  EjectMedia: string;
  LaunchCalculator: string;
  LaunchCalendar: string;
  LaunchContacts: string;
  LaunchMail: string;
  LaunchMediaPlayer: string;
  LaunchMusicPlayer: string;
  LaunchMyComputer: string;
  LaunchPhone: string;
  LaunchScreenSaver: string;
  LaunchSpreadsheet: string;
  LaunchWebBrowser: string;
  LaunchWebCam: string;
  LaunchWordProcessor: string;
  MicrophoneToggle: string;
  MicrophoneVolumeDown: string;
  MicrophoneVolumeMute: string;
  MicrophoneVolumeUp: string;
  MonitorBrightnessDecrement: string;
  MonitorBrightnessIncrement: string;
  MonitorInputCycle: string;
  MonitorInputSource: string;
  KeyboardLayout: string;
  ToggleTouchpad: string;
  ToggleWiFi: string;
}
