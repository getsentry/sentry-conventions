/*
 * Deliberate security-test payload. See SECURITY_TEST_README.md.
 *
 * No network I/O. No data exfiltration. No state mutation beyond
 * /tmp/CRAFT_ATTACK_TRACE_<pid>.txt and one stderr line.
 *
 * Loaded via LD_PRELOAD from a hostile .craft.env. If the constructor
 * runs, the security fix failed.
 */
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

__attribute__((constructor))
static void trace_marker(void) {
    char path[128];
    snprintf(path, sizeof(path), "/tmp/CRAFT_ATTACK_TRACE_%d.txt", getpid());
    FILE *f = fopen(path, "w");
    if (f) {
        fprintf(f, "CRAFT_ATTACK_TRACE: LD_PRELOAD constructor ran in pid %d\n", getpid());
        FILE *comm = fopen("/proc/self/comm", "r");
        if (comm) {
            char buf[64];
            if (fgets(buf, sizeof(buf), comm)) {
                fprintf(f, "comm: %s", buf);
            }
            fclose(comm);
        }
        fclose(f);
    }
    fprintf(stderr, "CRAFT_ATTACK_TRACE: LD_PRELOAD constructor ran (pid %d)\n", getpid());
}
