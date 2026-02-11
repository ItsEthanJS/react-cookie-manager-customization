/**
 * Handles blocking of tracking scripts and iframes, replacing them with placeholders
 */
/**
 * Enables or disables DOM-level content blocking immediately.
 */
export declare const setBlockingEnabled: (enabled: boolean) => void;
/**
 * Creates a placeholder for blocked content
 * @param iframe The iframe element to block
 * @param originalSrc The original source URL of the iframe
 * @returns The created wrapper element containing the placeholder
 */
export declare const createContentPlaceholder: (iframe: HTMLIFrameElement, originalSrc: string) => HTMLDivElement;
/**
 * Blocks tracking scripts and iframes based on keywords
 * @param trackingKeywords Array of keywords to block
 * @returns MutationObserver that watches for new elements
 */
export declare const blockTrackingScripts: (trackingKeywords: string[]) => MutationObserver;
/**
 * Ensures that all placeholders remain visible and properly styled
 */
export declare const ensurePlaceholdersVisible: () => void;
/**
 * Restores previously blocked iframes whose original src no longer matches current blocked keywords.
 * @param currentBlockedKeywords The keywords that should remain blocked. Others will be restored.
 */
export declare const unblockPreviouslyBlockedContent: (currentBlockedKeywords: string[]) => void;
//# sourceMappingURL=content-blocker.d.ts.map