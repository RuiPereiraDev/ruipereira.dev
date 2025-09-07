interface SpigotStats {
    downloads: string
}

interface SpigotPlugin {
    stats: SpigotStats
}

interface HangarStats {
    downloads: number
}

interface HangarPlugin {
    stats: HangarStats
}

interface ModrinthProject {
    downloads: number
}

interface GitHubAsset {
    download_count: number
}

interface GitHubRelease {
    name: string
    assets: GitHubAsset[]
}

interface DiscordGuild {
    presence_count: number
}
