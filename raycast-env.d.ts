/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API Key - Enter your personal Open AI API Key */
  "apiKey": string,
  /** Stream Completion - Stream the completions of the generated answer */
  "useStream": boolean,
  /** Auto-save Conversation - Auto-save every conversation that you had with the model */
  "isAutoSaveConversation": boolean,
  /** Pause History - Pause the history of the conversation */
  "isHistoryPaused": boolean,
  /** Auto-load Text - Load selected text from your frontmost application to the question bar automatically */
  "isAutoLoadText": boolean,
  /** Use Full Text Input - Use full text input form when asking question for the first time */
  "isAutoFullInput": boolean,
  /** Text-to-Speech - Enable auto TTS everytime you get a generated answer */
  "isAutoTTS": boolean,
  /** Use Proxy - Each request will be passed through the proxy */
  "useProxy": boolean,
  /** Proxy Protocol - Each request will be passed through the proxy */
  "proxyProtocol": "http" | "https" | "socks4" | "socks5",
  /** Proxy Host - Server address of the proxy */
  "proxyHost"?: string,
  /** Proxy Port - Server port of the proxy */
  "proxyPort"?: string,
  /** Proxy Username - Leave empty if doesn't have */
  "proxyUsername"?: string,
  /** Proxy Password - Leave empty if doesn't have */
  "proxyPassword"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `ask` command */
  export type Ask = ExtensionPreferences & {}
  /** Preferences accessible in the `saved` command */
  export type Saved = ExtensionPreferences & {}
  /** Preferences accessible in the `history` command */
  export type History = ExtensionPreferences & {}
  /** Preferences accessible in the `conversation` command */
  export type Conversation = ExtensionPreferences & {}
  /** Preferences accessible in the `model` command */
  export type Model = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `ask` command */
  export type Ask = {}
  /** Arguments passed to the `saved` command */
  export type Saved = {}
  /** Arguments passed to the `history` command */
  export type History = {}
  /** Arguments passed to the `conversation` command */
  export type Conversation = {}
  /** Arguments passed to the `model` command */
  export type Model = {}
}


