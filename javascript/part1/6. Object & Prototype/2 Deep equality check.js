function deepEqual(a, b) {
  // step 1: direct equal
  if (a === b) return true;

  // step 2: type check
  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return false;
  }

  // step 3: keys check
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) return false;

  // step 4: recursive check
  for (let key of keysA) {
    if (!keysB.includes(key)) return false;

    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
}