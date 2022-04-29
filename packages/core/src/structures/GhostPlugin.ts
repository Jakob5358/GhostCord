import { GhostPluginType } from "../types/GhostPlugin";

export class GhostPluginManager {
    public activePlugins: Set<string> = new Set();
    public plugins: Map<string, GhostPluginType> = new Map()

    public get getActivePlugins() {
        return this.activePlugins;
    }
}