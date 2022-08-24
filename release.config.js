module.exports = {
    debug: true,
    ci: true,
    branch: "main",
    repositoryUrl: "https://github.com/faizanrahman/test-semantic-release.git",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        ["@semantic-release/changelog",{ "changelogFile": "CHANGELOG.md" }],
        // ["@semantic-release/exec", 
        //     {
        //         "prepareCmd": "./prepare.sh ${nextRelease.version} ${options.branch} ${commits.length} ${Date.now()}",
        //         "execCwd": "test-semantic-release"
        //         // "prepare": [
        //         //     {
        //         //         "path": "@semantic-release/exec",
        //         //         "cmd": "./update-version.sh ${nextRelease.version} ${options.branch} ${commits.length} ${Date.now()}"
        //         //     }
        //         // ]
        //     }
        // ],
        ["semantic-release-plugin-update-version-in-files", {
            "files": [
              "version.txt"
            ],
            "placeholder": "/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/gm"
          }
        ],
        [
            "@semantic-release/git",
            {
                // "assets": [{"path": 'CHANGELOG.md'}, {"path": 'version.txt'}]
                "assets": ['CHANGELOG.md', 'version.txt']
            }
        ]
    ],
    dryRun: false,
    tagFormat: '${version}'
}