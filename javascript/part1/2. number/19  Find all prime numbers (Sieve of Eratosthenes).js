function sieve(n) {
    const isPrime = new Array(n + 1).fill(true);

    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    const primes = [];

    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) primes.push(i);
    }

    return primes;
}

console.log(sieve(20));