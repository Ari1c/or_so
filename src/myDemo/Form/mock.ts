const test: { port: string; maxReq: number }[] = [];

for (let i = 0; i < 9; i++) {
  test.push({
    port: `800${i}`,
    maxReq: i,
  });
}

export { test };
