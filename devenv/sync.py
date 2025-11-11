from devenv.lib import config, uv

from devenv import constants


def main(context: dict[str, str]) -> int:
    reporoot = context["reporoot"]
    cfg = config.get_repo(reporoot)

    uv.install(
        cfg["uv"]["version"],
        cfg["uv"][constants.SYSTEM_MACHINE],
        cfg["uv"][f"{constants.SYSTEM_MACHINE}_sha256"],
        reporoot,
    )

    return 0
