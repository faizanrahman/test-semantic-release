module.exports = {
    debug: true,
    ci: true,
    branch: "main",
    repositoryUrl: "https://github.com/faizanrahman/test-semantic-release.git",
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