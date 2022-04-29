import { GhostClient } from "../structures/GhostClient";

export interface GhostPluginType {
    name: string;
    run: (client: GhostClient) => Promise<void> | void
}