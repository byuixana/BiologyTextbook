/**
 * Shared Components Library Entry Point
 * 
 * This file serves as the main entry point for the shared-components library.
 * It exports all public components, contexts, and utilities.
 * 
 * Import from this file when using shared-components as a library:
 * import { Header, SectionMenu, ContentWindow, useSelectionContext } from 'shared-components/lib-entry';
 */

// Components
export { default as Header } from './lib/Header.js';
export { default as SectionMenu } from './lib/SectionMenu.js';
export { default as SectionMenuImprove } from './lib/SectionMenuImprove.js';
export { default as SectionTreeView } from './lib/SectionTreeView.js';
export { default as SectionTreeItem } from './lib/SectionTreeItem.js';
export { default as ContentWindow } from './lib/ContentWindow.js';
export { default as ImgWindow } from './lib/ImgWindow.js';
export { default as VideoPlayer } from './lib/VideoPlayer.js';
export { default as Lecture } from './lib/Lecture.js';

// Context
export { default as SelectionContextProvider, useSelectionContext } from './context/SelectionContext.js';
