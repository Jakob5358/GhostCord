/**
 * The global configuration for GhostCord.
 * @since 1.0.0
 */
export interface GhostGlobalConfig {
    /**
     * If debug mode is enabled.
     * @default false
     * @since 1.0.0
     */
    debug?: boolean;
    /**
     * An Array of Id's which have access to the bot's owner permission level.
     * @since 1.0.0
     */
    bot_owners?: Array<string>;
    /**
     * An Array of Id's which have access to the bot's admin permission level.
     * @since 1.0.0
     **/
    bot_supporters?: Array<string>;
    /**
     * An Array of Id's which bypass the cooldown inhibitor.
     */
    bot_cooldown_bypass?: {
        users: Array<string>;
        roles: Array<string>;
        channels: Array<string>;
    };
}