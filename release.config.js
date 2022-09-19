module.exports = {
    debug: true,
    ci: true,
    branch: "main",
    repositoryUrl: "https://github.com/faizanrahman/test-semantic-release.git",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        ["@semantic-release/changelog",{ "changelogFile": "CHANGELOG.md" }],
        [
            "@google/semantic-release-replace-plugin",
            {
              "replacements": [
                {
                  "files": ["version.txt"],
                  "from": /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/,
                  "to": "${nextRelease.version}",
                  "countMatches": true
                }
              ]
            }
          ],
        [
            "@semantic-release/git",
            {
                "assets": ['CHANGELOG.md', 'package.json', 'version.txt']
            }
        ]
    ],
    dryRun: false,
    tagFormat: '${version}'
}