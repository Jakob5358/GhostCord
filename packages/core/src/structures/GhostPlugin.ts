import { GhostPluginType } from "../types/GhostPlugin";

export class GhostPluginManager {
    public activePlugins: Set<string> = new Set();
    public plugins: Map<string, GhostPluginType> = new Map()

    public constructor() {
        this.loadPlugins();
    }

    private loadPlugins() {
        for (const plugin of this.plugins.values()) {
            this.activePlugins.add(plugin.name);
        }
    }

    public get getActivePlugins() {
        return this.activePlugins;
    }
}