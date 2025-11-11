---
sidebar_position: 4
---
# Optimization tricks

---

## 1) Fast I/O / minor runtime tuning

**Why:** essential in contests to avoid slow input overhead.

```cpp
#include <bits/stdc++.h>
using namespace std;
int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);            // disable flush on endl
    cout.setf(std::ios::fixed);
    cout<<setprecision(6);
    // ...
}
```

**Also:** reserve vectors to avoid reallocation: `v.reserve(n);`
**Caution:** disabling sync means don't mix `scanf/printf` with `cin/cout`.

---

## 2) Compiler flags & inlining hints

**Why:** let the compiler optimize hot code.

* Use `-O2` or `-O3` for speed, `-Ofast` if you accept aggressive UB-ish optimizations.
* Force inline small functions:

```cpp
inline __attribute__((always_inline)) int add(int a,int b){ return a+b; }
```

**Caution:** too much `always_inline` can increase binary size, hurting cache.

---

## 3) Move semantics & avoid copies

**Why:** avoid expensive copies of big vectors/strings.

```cpp
vector<int> makeVec(){
    vector<int> tmp(1000000);
    // fill
    return tmp; // RVO / move
}
void consume(vector<int>&& v){
    // take ownership
}
int main(){
    vector<int> v = makeVec();
    consume(std::move(v)); // v becomes unspecified
}
```

**Tip:** pass `const &` unless you need ownership.

---

## 4) Small header file hygiene

**Why:** faster compile, fewer ODR issues. Basic header template:

```cpp
// my_utils.h
#pragma once
#include <vector>
#include <algorithm>

namespace cu {    // project namespace
    inline int clamp(int x, int lo, int hi){ return min(max(x,lo),hi); }
}
```

**Guidelines:** use `#pragma once` (or include guards), keep headers idempotent, prefer inline functions/templates for definitions in headers.

---

## 5) Precompiled headers (PCH)

**Why:** reduce rebuild times in big projects. In contests you won't normally use PCH, but good for development setups.

---

## 6) Bit tricks (useful & common)

**Why:** ultra-fast small utilities.

```cpp
int lowest_bit(int x){ return x & -x; }        // isolates lowest set bit
int turn_off_lowest(int x){ return x & (x-1); } // remove lowest set bit
int parity(int x){ return __builtin_parity(x); } // 1 if odd count of ones
int popcnt(int x){ return __builtin_popcount(x); } // count ones
int clz(int x){ return __builtin_clz(x); }       // leading zeros
int floor_log2(int x){ return 31 - __builtin_clz(x); }
long long next_pow2(long long x){ return 1LL<< (64-__builtin_clzll(x-1)); }
```

**Iterate submasks** of mask `m`:

```cpp
for(int s=m; s; s=(s-1)&m){
    // use s
}
```

**Caution:** `__builtin_clz(0)` is undefined — check input.

---

## 7) Branchless tricks (when branch mispredict costly)

**Example:** conditional assign without branching:

```cpp
int cond = (a > b);
int res = cond * a + (1-cond) * b; // but beware multiplication cost
// Better for simple flags:
x = (x & ~mask) | (-cond & mask);
```

**Caution:** rarely faster on modern CPUs; use when hot and measured.

---

## 8) Avoiding undefined behavior (UB) — common traps

* **Signed integer overflow** is UB. Use `long long` or unsigned.
* **Shift by width or more** is UB: `x << 32` if `x` is 32-bit → UB.
* **Dereferencing invalid iterators/pointers** → crash/UB.
* **Data races** in threaded code → UB (see concurrency).
  **Example bug:**

```cpp
int32_t x = -1;
int32_t y = x << 1; // shifting negative signed number => UB
```

Fix: use unsigned or guarantee non-negative.

---

## 9) Memory layout & alignment

**Why:** reduce cache misses; pack small structs cleverly.

```cpp
struct alignas(16) A { int x; long long y; };
// or pack to reduce memory
#pragma pack(push,1)
struct Packed { char a; int b; };
#pragma pack(pop)
```

**Caution:** `#pragma pack(1)` can slow access on some architectures.

---

## 10) Efficient use of STL (avoid hidden costs)

* Prefer `vector` over `list` for locality.
* Use `reserve()` before pushes.
* `emplace_back()` to construct in-place.
* `unordered_map` has high constant; use `gp_hash_table` (PBDS) in some contests or `vector<int>` if keys small.

```cpp
vector<int> v; v.reserve(1000);
v.emplace_back(42);
```

---

## 11) Custom fast hash for unordered_map

**Why:** avoid hacking collisions (CF stress). Simple example:

```cpp
struct FastHash {
    size_t operator()(uint64_t x) const noexcept {
        x += 0x9e3779b97f4a7c15ULL;
        x = (x ^ (x >> 30)) * 0xbf58476d1ce4e5b9ULL;
        x = (x ^ (x >> 27)) * 0x94d049bb133111ebULL;
        return x ^ (x >> 31);
    }
};
unordered_map<long long,int,FastHash> mp;
```

---

## 12) Multithreading basics (std::thread)

**Why:** speed-up independent tasks (not typical in CF, but useful for tools). Minimal example:

```cpp
#include <thread>
#include <vector>
#include <iostream>

void worker(int id){
    // do CPU-bound or I/O task
    std::cout<<"Worker "<<id<<"\n";
}

int main(){
    std::vector<std::thread> ts;
    for(int i=0;i<4;i++) ts.emplace_back(worker, i);
    for(auto &t:ts) if(t.joinable()) t.join();
}
```

**Caution:** threads share memory — protect shared state.

---

## 13) Synchronization primitives

```cpp
#include <mutex>
#include <condition_variable>
std::mutex mu;
std::condition_variable cv;
bool ready = false;

void producer(){
    std::unique_lock<std::mutex> lock(mu);
    ready = true;
    cv.notify_one();
}
void consumer(){
    std::unique_lock<std::mutex> lock(mu);
    cv.wait(lock, []{ return ready; });
    // proceed
}
```

**Tip:** prefer `std::atomic<T>` for simple flags to avoid mutex overhead.

---

## 14) Atomics & lock-free basics

```cpp
#include <atomic>
std::atomic<int> counter(0);
void inc(){ counter.fetch_add(1, std::memory_order_relaxed); }
```

**Caution:** memory ordering is subtle — use `memory_order_seq_cst` by default unless you know what you do.

---

## 15) Thread pool sketch (simple)

```cpp
// minimal conceptual sketch — use libraries in real projects
#include <thread>
#include <vector>
#include <queue>
#include <functional>
#include <mutex>
#include <condition_variable>

class ThreadPool {
    std::vector<std::thread> workers;
    std::queue<std::function<void()>> tasks;
    std::mutex mu;
    std::condition_variable cv;
    bool stop=false;
public:
    ThreadPool(int n): workers(n){
        for(auto &t:workers)
            t = std::thread([this]{ this->run(); });
    }
    ~ThreadPool(){ /* join + stop */ }
    void enqueue(std::function<void()> f){
        { std::lock_guard<std::mutex> g(mu); tasks.push(f); }
        cv.notify_one();
    }
private:
    void run(){
        while(true){
            std::function<void()> task;
            { std::unique_lock<std::mutex> lk(mu);
              cv.wait(lk, [&]{ return stop || !tasks.empty(); });
              if(stop && tasks.empty()) break;
              task = std::move(tasks.front()); tasks.pop();
            }
            task();
        }
    }
};
```

**Use:** for parallel I/O or preprocessing tasks.

---

## 16) Fast integer multiplication modulo large mod (avoid overflow)

**Why:** `a*b%mod` can overflow 64-bit. Use `__int128`.

```cpp
long long mulmod(long long a, long long b, long long mod){
    return (long long)((__int128)a*b % mod);
}
```

---

## 17) Fast powmod & binary exponent

```cpp
long long modpow(long long a, long long e, long long mod){
    long long r=1;
    while(e){
        if(e&1) r = (__int128)r*a % mod;
        a = (__int128)a*a % mod;
        e >>= 1;
    }
    return r;
}
```

---

## 18) Bitset & SIMD-ish tricks

* `std::bitset` for dense boolean vectors with fast bit ops.
* For numeric loops, rely on compiler autovectorization and write simple loops; use `-O3` and check compiler reports.

---

## 19) Debugging weird bit bugs

**Example:** comparing signed and unsigned:

```cpp
int a = -1;
unsigned int b = 1;
if(a > b) // a promoted to unsigned => huge value => condition true unexpectedly
```

**Fix:** avoid implicit signed/unsigned mix; cast explicitly.

**Another:** shifting into sign bit:

```cpp
int x = 1 << 31; // UB for 32-bit signed
```

Use `1u << 31` or `1LL << 31`.

---

## 20) Useful builtins and extensions

* `__builtin_popcount`, `__builtin_clz`, `__builtin_ctz`, `__builtin_expect` (branch hint).
  Example:

```cpp
if(__builtin_expect(x==0, 0)) { /* unlikely */ }
```

**Caution:** compiler-specific; readability cost.

---

## 21) Practical checklist before "micro-optimizing"

1. Profile: measure hot spots.
2. Algorithmic complexity > micro-optimizations.
3. Use efficient algorithms/data-structures first, then micro-opt.
4. Keep code readable: comment non-obvious low-level hacks.

---

### Final note — safety and sanity

Low-level hacks and threading can give big speedups but also subtle bugs (UB, data races, portability). Use them when you need them and test thoroughly.

---

