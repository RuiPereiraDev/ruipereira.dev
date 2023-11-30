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
    assets: GitHubAsset[]
}
