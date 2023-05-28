/**
 * @param {string} message - The message to check links from.
 * @param {boolean} scanSuspiciousDomains - Whether to also check for suspicious domains. Default is `false`
 * @returns {Promise<boolean>} Whether this message contains a link.
 */
export declare async function checkMessage(message: string, scanSuspiciousDomains: boolean = false): Promise<boolean>;

/**
 * Returns all phising domains.
 * @returns {Promise<string[]>} An array of links.
 */
export declare async function listPhishingDomains(): Promise<string[]>;

/**
 * Returns all suspicious domains.
 * @returns {Promise<string[]>} An array of links.
 */
export declare async function listSuspiciousDomains(): Promise<string[]>;

/**
 * Returns all confirmed and suspicious domains.
 * @returns {Promise<string[]>} An array of links.
 */
export declare async function listAllDomains(): Promise<string[]>;

/**
 * Returns the total amount of detected phising domains.
 * @returns {Promise<number>} The number of detected domains
 */
export declare async function phishingDomainCount(): Promise<number>;

/**
 * Returns the total amount of suspicious domains.
 * @returns {Promise<number>} The number of suspicious domains
 */
export declare async function suspiciousDomainCount(): Promise<number>;

/**
 * Returns the total amount of confirmed and suspicious domains.
 * @returns {Promise<number>} The number of confirmed and suspicious domains.
 */
export declare async function domainCount(): Promise<number>;