module.exports = {
    board_env: "STM32F103RE_creality",
    min_version: "2.1.2",
    meta: {
        stable_name: "ghost5_4.2.2-{{marlin_version}}-default-{{uid}}",
        nightly_name: "ghost5_3_4.2.2-{{current_date}}-default-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/DHD2280/flyingbear_ghost_marlin/",
        path: "/SourceCode/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    }
};
