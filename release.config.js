module.exports = {
    debug: true,
    ci: true,
    branch: "main",
    repositoryUrl: "https://git.kcura.com/scm/raw/relativityautomatedworkflows.git",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        // "@semantic-release/npm",
        ["@semantic-release/changelog",{ "changelogFile": "CHANGELOG.md" }],
        [
            "@semantic-release/git",
            {
                "assets": [{"path": 'CHANGELOG.md'}]
            }
        ]
    ],
    dryRun: false,
    // tagFormat: '${version}'
}