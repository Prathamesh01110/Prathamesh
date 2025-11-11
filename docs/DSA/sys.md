---
sidebar_position: 4
---
# Optimized & Low-Level

A practical guide to writing fast, efficient C++ code with real-world examples.

## 1. Understanding Hexadecimal & Bit Patterns {#hex-and-bits}

### Why use hex in low-level code?

Hex is compact and maps directly to bits. Each hex digit = 4 bits.

```cpp
// Example: Command dispatching with bit patterns
switch (command & 0xF000) {  // Mask top 4 bits (top hex digit)
    case 0x9000:
        // Commands 0x9000-0x9FFF: Display operations
        drawMessage(getMessageText(command), screenBuffer);
        break;
        
    case 0xA000:
    case 0xB000:
        // Commands 0xA000-0xBFFF: Handler functions
        return commandTable[command & 0x0FFF]();  // Use bottom 12 bits as index
        
    case 0xF000:
        // Commands 0xF000-0xFFFF: Special system calls
        handleSystemCall(command);
        break;
}
```

### Breaking down bit patterns

```cpp
// Let's decode 0xA3F7
// Binary: 1010 0011 1111 0111
//         ^^^^ ^^^^ ^^^^ ^^^^
//          A    3    F    7

uint16_t cmd = 0xA3F7;

// Extract parts using bit masks
uint8_t category = (cmd & 0xF000) >> 12;  // Top 4 bits → 0xA
uint8_t subcmd   = (cmd & 0x0F00) >> 8;   // Next 4 bits → 0x3
uint8_t param    = (cmd & 0x00FF);        // Bottom 8 bits → 0xF7

printf("Category: 0x%X, Subcmd: 0x%X, Param: 0x%X\n", 
       category, subcmd, param);
// Output: Category: 0xA, Subcmd: 0x3, Param: 0xF7
```

### Common bit masks explained

```cpp
// Isolate specific bits
uint32_t flags = 0x12345678;

flags & 0xFF;        // Get last byte:  0x78
flags & 0xFF00;      // Get 2nd byte:   0x5600
flags & 0xF000;      // Get top nibble: 0x2000

// Set/clear specific bits
flags |= 0x0001;     // Set bit 0 (turn ON)
flags &= ~0x0001;    // Clear bit 0 (turn OFF)
flags ^= 0x0001;     // Toggle bit 0 (flip)

// Check if bit is set
if (flags & 0x0001) {
    // Bit 0 is ON
}
```

---

## 2. Header Files & Namespaces Done Right {#headers-namespaces}

### Good header structure

**my_utils.hpp:**
```cpp
#pragma once  // Simpler than include guards

#include <cstdint>
#include <string>

// Your project namespace - prevents name collisions
namespace myproject {

// Constants in anonymous namespace (internal linkage)
namespace {
    constexpr int MAX_BUFFER = 1024;
    constexpr uint32_t MAGIC_NUMBER = 0xDEADBEEF;
}

// Inline functions can be defined in headers
inline uint32_t extractCommand(uint32_t fullCmd) {
    return (fullCmd & 0xF000) >> 12;
}

// Template functions must be in headers
template<typename T>
inline T clamp(T value, T min, T max) {
    return (value < min) ? min : (value > max) ? max : value;
}

// Forward declarations for classes
class MessageHandler;
class CommandProcessor;

} // namespace myproject
```

**my_utils.cpp:**
```cpp
#include "my_utils.hpp"
#include <iostream>

namespace myproject {

// Implementation of non-inline functions
void MessageHandler::process(const std::string& msg) {
    std::cout << "Processing: " << msg << std::endl;
}

} // namespace myproject
```

### Namespace best practices

```cpp
// BAD: Don't pollute global namespace
using namespace std;  // Never in headers!

// GOOD: Use specific imports in .cpp files
using std::string;
using std::vector;

// GOOD: Namespace aliases for long names
namespace fs = std::filesystem;
namespace chrono = std::chrono;

// Usage
fs::path p = "/home/user/file.txt";
auto now = chrono::steady_clock::now();

// In your code
namespace mp = myproject;  // Short alias
mp::MessageHandler handler;
```

### Real example: Command system

**command_system.hpp:**
```cpp
#pragma once
#include <cstdint>
#include <functional>
#include <unordered_map>

namespace game {

enum class CommandType : uint8_t {
    Display = 0x9,
    Action  = 0xA,
    System  = 0xF
};

class CommandDispatcher {
public:
    using Handler = std::function<void(uint16_t)>;
    
    void registerHandler(uint16_t pattern, Handler handler);
    void dispatch(uint16_t command);
    
private:
    std::unordered_map<uint16_t, Handler> handlers;
    
    inline CommandType getType(uint16_t cmd) const {
        return static_cast<CommandType>((cmd & 0xF000) >> 12);
    }
};

} // namespace game
```

---

## 3. Bit Manipulation Tricks {#bit-tricks}

### Essential bit operations

```cpp
#include <cstdint>

// Check if number is power of 2
inline bool isPowerOf2(uint32_t n) {
    return n && !(n & (n - 1));
}

// Round up to next power of 2
inline uint32_t nextPowerOf2(uint32_t n) {
    n--;
    n |= n >> 1;
    n |= n >> 2;
    n |= n >> 4;
    n |= n >> 8;
    n |= n >> 16;
    return n + 1;
}

// Count set bits (population count)
inline int countBits(uint32_t n) {
    return __builtin_popcount(n);  // GCC/Clang builtin
}

// Find position of lowest set bit
inline int lowestBitPos(uint32_t n) {
    return __builtin_ctz(n);  // Count trailing zeros
}

// Isolate lowest set bit
inline uint32_t lowestBit(uint32_t n) {
    return n & -n;  // Magic trick: -n flips all bits after lowest 1
}

// Example usage
uint32_t flags = 0b10110100;
printf("Has %d bits set\n", countBits(flags));  // 4
printf("Lowest bit at position %d\n", lowestBitPos(flags));  // 2
printf("Lowest bit value: 0x%X\n", lowestBit(flags));  // 0x4
```

### Practical example: Permissions system

```cpp
namespace security {

enum Permission : uint32_t {
    READ    = 1 << 0,  // 0x0001
    WRITE   = 1 << 1,  // 0x0002
    EXECUTE = 1 << 2,  // 0x0004
    DELETE  = 1 << 3,  // 0x0008
    ADMIN   = 1 << 4   // 0x0010
};

class PermissionSet {
    uint32_t perms = 0;
    
public:
    void grant(Permission p) { perms |= p; }
    void revoke(Permission p) { perms &= ~p; }
    bool has(Permission p) const { return perms & p; }
    
    // Grant multiple permissions at once
    void grantMultiple(uint32_t mask) { perms |= mask; }
    
    // Check if has ALL of the permissions
    bool hasAll(uint32_t mask) const { 
        return (perms & mask) == mask; 
    }
    
    // Check if has ANY of the permissions
    bool hasAny(uint32_t mask) const { 
        return (perms & mask) != 0; 
    }
};

// Usage
PermissionSet user;
user.grant(READ);
user.grant(WRITE);

if (user.has(WRITE)) {
    // Allow write operation
}

// Check multiple
if (user.hasAll(READ | WRITE)) {
    // User can read AND write
}

} // namespace security
```

---

## 4. Memory & Performance {#memory-performance}

### Fast I/O for competitive programming

```cpp
// Speed up cin/cout
void setupFastIO() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(nullptr);
}

// Use this at start of main()
int main() {
    setupFastIO();
    
    int n;
    std::cin >> n;  // Now much faster
}
```

### Memory alignment matters

```cpp
// CPU reads memory in chunks (cache lines)
// Aligning data reduces cache misses

// BAD: Straddling cache lines
struct BadLayout {
    char a;      // 1 byte
    int64_t b;   // 8 bytes, but misaligned!
    char c;      // 1 byte
}; // Size: ~17 bytes with padding

// GOOD: Aligned layout
struct GoodLayout {
    int64_t b;   // 8 bytes, aligned
    char a;      // 1 byte
    char c;      // 1 byte
}; // Size: 16 bytes, better aligned

// Force alignment
struct alignas(64) CacheLineAligned {
    int data[16];  // Fits in one cache line
};
```

### Avoid allocations in hot loops

```cpp
// BAD: Allocates every iteration
void processBad(const std::vector<int>& input) {
    for (int x : input) {
        std::vector<int> temp;  // NEW ALLOCATION!
        temp.push_back(x * 2);
        // ...
    }
}

// GOOD: Reuse buffer
void processGood(const std::vector<int>& input) {
    std::vector<int> temp;
    temp.reserve(100);  // Preallocate
    
    for (int x : input) {
        temp.clear();  // Reuse memory
        temp.push_back(x * 2);
        // ...
    }
}
```

---

## 5. Multithreading Explained {#multithreading}

### When to use threads

- **YES:** Independent tasks (file processing, parallel calculations)
- **NO:** Tasks that need heavy synchronization (defeats the purpose)

### Basic thread example

```cpp
#include <thread>
#include <iostream>
#include <vector>

// Function that runs in separate thread
void worker(int id, int workAmount) {
    std::cout << "Thread " << id << " starting\n";
    
    // Simulate work
    int sum = 0;
    for (int i = 0; i < workAmount; i++) {
        sum += i;
    }
    
    std::cout << "Thread " << id << " finished: " << sum << "\n";
}

int main() {
    const int numThreads = 4;
    std::vector<std::thread> threads;
    
    // Launch threads
    for (int i = 0; i < numThreads; i++) {
        threads.emplace_back(worker, i, 1000000);
    }
    
    // Wait for all to complete
    for (auto& t : threads) {
        t.join();
    }
    
    std::cout << "All threads completed\n";
    return 0;
}
```

### Thread-safe counter with mutex

```cpp
#include <thread>
#include <mutex>
#include <vector>

class ThreadSafeCounter {
    int count = 0;
    std::mutex mtx;  // Protects count
    
public:
    void increment() {
        std::lock_guard<std::mutex> lock(mtx);  // Auto-locks, auto-unlocks
        count++;
    }
    
    int get() {
        std::lock_guard<std::mutex> lock(mtx);
        return count;
    }
};

// Usage
ThreadSafeCounter counter;

void workerThread(int iterations) {
    for (int i = 0; i < iterations; i++) {
        counter.increment();
    }
}

int main() {
    std::vector<std::thread> threads;
    
    // 4 threads, each incrementing 10000 times
    for (int i = 0; i < 4; i++) {
        threads.emplace_back(workerThread, 10000);
    }
    
    for (auto& t : threads) {
        t.join();
    }
    
    std::cout << "Final count: " << counter.get() << "\n";  // 40000
    return 0;
}
```

### Using atomics (faster than mutex for simple operations)

```cpp
#include <atomic>
#include <thread>
#include <vector>

std::atomic<int> atomicCounter(0);

void fastWorker(int iterations) {
    for (int i = 0; i < iterations; i++) {
        atomicCounter.fetch_add(1, std::memory_order_relaxed);
        // Much faster than mutex for simple increments
    }
}

int main() {
    std::vector<std::thread> threads;
    
    for (int i = 0; i < 4; i++) {
        threads.emplace_back(fastWorker, 10000);
    }
    
    for (auto& t : threads) {
        t.join();
    }
    
    std::cout << "Final count: " << atomicCounter.load() << "\n";
    return 0;
}
```

### Parallel array processing

```cpp
#include <thread>
#include <vector>
#include <algorithm>

// Process array chunk in parallel
void processChunk(std::vector<int>& data, size_t start, size_t end) {
    for (size_t i = start; i < end; i++) {
        data[i] = data[i] * data[i];  // Square each element
    }
}

void parallelProcess(std::vector<int>& data) {
    const int numThreads = 4;
    std::vector<std::thread> threads;
    size_t chunkSize = data.size() / numThreads;
    
    for (int i = 0; i < numThreads; i++) {
        size_t start = i * chunkSize;
        size_t end = (i == numThreads - 1) ? data.size() : (i + 1) * chunkSize;
        threads.emplace_back(processChunk, std::ref(data), start, end);
    }
    
    for (auto& t : threads) {
        t.join();
    }
}
```

---

## 6. Real-World Optimization Patterns {#optimization-patterns}

### Fast integer operations

```cpp
// Multiply by power of 2 - use shift
int multiplyBy8(int x) {
    return x << 3;  // Faster than x * 8
}

// Divide by power of 2 - use shift (for positive numbers)
int divideBy4(int x) {
    return x >> 2;  // Faster than x / 4
}

// Check if even/odd
bool isEven(int x) {
    return !(x & 1);  // Faster than x % 2 == 0
}

// Swap without temporary variable
void swap(int& a, int& b) {
    a ^= b;
    b ^= a;
    a ^= b;
}
```

### Avoid expensive operations in loops

```cpp
// BAD: Recalculating every iteration
for (int i = 0; i < n; i++) {
    double result = sqrt(x) * sqrt(y);  // sqrt is slow!
    // ...
}

// GOOD: Calculate once
double sqrtX = sqrt(x);
double sqrtY = sqrt(y);
for (int i = 0; i < n; i++) {
    double result = sqrtX * sqrtY;
    // ...
}
```

### Smart use of lookup tables

```cpp
// Precompute expensive operations
namespace lookup {
    constexpr int MAX = 1000;
    int squares[MAX];
    
    void initialize() {
        for (int i = 0; i < MAX; i++) {
            squares[i] = i * i;
        }
    }
    
    inline int getSquare(int x) {
        return (x < MAX) ? squares[x] : x * x;
    }
}
```

### Profile before optimizing

```cpp
#include <chrono>

// Simple timer class
class Timer {
    std::chrono::time_point<std::chrono::high_resolution_clock> start;
    
public:
    Timer() : start(std::chrono::high_resolution_clock::now()) {}
    
    double elapsed() {
        auto end = std::chrono::high_resolution_clock::now();
        return std::chrono::duration<double>(end - start).count();
    }
};

// Usage
Timer timer;
expensiveOperation();
std::cout << "Took " << timer.elapsed() << " seconds\n";
```

---

## Quick Reference Card

### Bit Operations
- `x & (x-1)` → Remove lowest bit
- `x & -x` → Isolate lowest bit
- `x | (x+1)` → Set lowest zero bit
- `~x & (x+1)` → Isolate lowest zero bit

### Hex Masks
- `0xF` → 4 bits (1 hex digit)
- `0xFF` → 8 bits (1 byte)
- `0xFFFF` → 16 bits (2 bytes)
- `0xFFFFFFFF` → 32 bits (4 bytes)

### Thread Safety Rules
1. **Mutex:** Slow but safe for complex operations
2. **Atomic:** Fast for simple types (int, bool, pointers)
3. **Lock-free:** Hard to get right, benchmark first

---

## Final Tips

1. **Measure first, optimize second** - Don't guess where the bottleneck is
2. **Algorithm > micro-optimization** - O(n log n) with clean code beats O(n²) with bit tricks
3. **Readable code wins** - Comment your clever bit hacks
4. **Test threading thoroughly** - Race conditions are evil

---