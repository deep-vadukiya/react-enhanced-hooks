import { RefObject } from 'react';

/**
 * Accepts the pair of key and value pair.
 *
 * It supports strings, number, boolean or object
 *
 * ⚠️ Note that it will consider true/false as a boolean no matter if it's string or boolean
 */
declare function useLocalStorage(key: string, initialValue: string | number | any[] | any): any[];

/**
 * This hooks will return the boolean value as per user's internet availability.
 *
 * It uses Navigator online API to define whether browser has active internet connection or not.
 *
 * ⚠️ Note: If the browser doesn't support navigator.online it will return true by default.
 *
 * @returns boolean value which represents if the internet is available or not
 */
declare function useOnlineStatus(): boolean;

/**
 * Attach the HTML reference to the ref to the element you want to track for hover events. Use the isHovered value in your component to display whether the element is currently being hovered over.
 *
 * Refer official doc [useHover](https://github.com/deeppatel06/react-enhanced-hooks#3-useHover) for more information.
 *
 * @returns [ref, isHovered]
 * ref - a ref to attach to the HTML element.
 * isHovered - boolean value if hovers or not.
 */
declare function useHover<T extends HTMLElement>(): [
    RefObject<T>,
    boolean
];

/**
 * this hook can be use to check if the page has scrolled desired pixels of not.
 *
 * ⚠️ Note: make sure if you don't pass any values to hook, it will consider 100 as a default value.
 *
 * @param top the number of pixels from top. if the page has scrolled that much pixels the hook will return true or else false
 *
 * @returns it will return boolean value if browser is scrolled that much pixels or not.
 */
declare function useOffSetTop(top: number): boolean;

interface KeyValues {
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
    Enter: string;
    Tab: string;
    Space: string;
    ArrowDown: string;
    ArrowLeft: string;
    ArrowRight: string;
    ArrowUp: string;
    End: string;
    Home: string;
    PageDown: string;
    PageUp: string;
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
    HangulMode: string;
    HanjaMode: string;
    JunjaMode: string;
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

/**
 * this hook can be used to track the key events to perform certain actions.
 *
 * For instance:
 *
 * - when user press the "/", you want to open the searchBar
 * - when user press the "Escape", you want to discard changes
 *
 * @param targetKey the Key values for keyboard events. see the full list of key values [here](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values).
 *
 * @returns returns the boolean value which indicates if the desired key is pressed or not
 */
declare function useKeyPress(targetKey: keyof KeyValues): boolean;

/**
 *
 * pass the document title as a string on different pages to update the current documents title
 *
 * @param title title string which needs to be displayed on the document's title
 */
declare function useDocumentTitle(title: string): void;

/**
 *
 * This hook can be used to copy the any string value to users clipboard.
 *
 * isCopied(boolean): returns if the value is copied to clipboard.
 *
 * copyToClipboard(method): takes the string value and copies it to clipboard.
 *
 * @returns returns the object with the properties of copy status and function which can be used to pass the string values which need to be copy.
 */
declare function useCopyToClipBoard(): any;

/**
 * This hook can be used to check the browsers focused or blur events.
 *
 * For instance:
 *
 * 1. You want to call the API and hydrate the response data to the ui whenever user focuses to the browsers tab.
 * 2. You want to run the timer when user is focused on the browsers tab, when user blurs the browser tab you want timer to stop.
 *
 * this hook will return the boolean as per the browsers current state(focused or not).
 *
 * @param callback a callback function which will be called when the tab is gets focused
 * @returns boolean whether the tab is focused or not
 */
declare function useTabFocusEffect(callback: () => void): any;

export { useCopyToClipBoard, useDocumentTitle, useHover, useKeyPress, useLocalStorage, useOffSetTop, useOnlineStatus, useTabFocusEffect };
