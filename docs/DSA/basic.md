---
sidebar_position: 2
---
# Basics

### 🔹 1. Even / Odd & Modulo Operation

**Concept:**
Use `%` (modulus) to find remainder — helps in parity checks, divisibility, etc.

🌀 *Visual Idea (GIF):* Number line showing remainder cycles →
`0 → even`, `1 → odd`.

```cpp
int n; cin >> n;
if (n % 2 == 0)
    cout << "Even\n";
else
    cout << "Odd\n";
```

**Used in:** parity-based operations, team splits, toggles.

---

### 🔹 2. Linear Search

**Concept:**
Scan elements one by one until you find the target.

🌀 *Visual GIF:* highlight moves from left→right over array boxes.

```cpp
int n, x; cin >> n >> x;
vector<int> a(n);
for (int &v : a) cin >> v;

bool found = false;
for (int i = 0; i < n; i++) {
    if (a[i] == x) { found = true; break; }
}
cout << (found ? "Found" : "Not Found");
```

**Used in:** small-n problems (≤ 100), or checking existence.

---

### 🔹 3. Binary Search

**Concept:**
Check middle element and halve the range each time (works on **sorted** data).

🌀 *GIF:* arrows shrinking interval between low–mid–high.

```cpp
int n, x; cin >> n >> x;
vector<int> a(n);
for (int &v : a) cin >> v;
sort(a.begin(), a.end());

int l = 0, r = n - 1;
bool ok = false;
while (l <= r) {
    int mid = (l + r) / 2;
    if (a[mid] == x) { ok = true; break; }
    else if (a[mid] < x) l = mid + 1;
    else r = mid - 1;
}
cout << (ok ? "Yes" : "No");
```

**Used in:** “find smallest/largest satisfying condition”.

---

### 🔹 4. Bubble Sort

**Concept:**
Repeatedly swap adjacent elements if they’re out of order.

🌀 *GIF:* bubbles rising as larger elements move to end.

```cpp
vector<int> a = {5, 2, 4, 1, 3};
int n = a.size();
for (int i = 0; i < n - 1; i++) {
    for (int j = 0; j < n - i - 1; j++) {
        if (a[j] > a[j + 1])
            swap(a[j], a[j + 1]);
    }
}
```

**Used in:** learning sort logic; not used in contests, but helps understand swaps.

---

### 🔹 5. Selection Sort

**Concept:**
Pick smallest each time and move it to front.

🌀 *GIF:* arrows marking current min being swapped forward.

```cpp
for (int i = 0; i < n - 1; i++) {
    int min_idx = i;
    for (int j = i + 1; j < n; j++)
        if (a[j] < a[min_idx]) min_idx = j;
    swap(a[i], a[min_idx]);
}
```

**Used in:** understanding min selection; sometimes seen in hand-crafted sorting tasks.

---

### 🔹 6. Insertion Sort

**Concept:**
Insert each element into correct place among the sorted ones before it.

🌀 *GIF:* cards being inserted one by one into sorted hand.

```cpp
for (int i = 1; i < n; i++) {
    int key = a[i], j = i - 1;
    while (j >= 0 && a[j] > key) {
        a[j + 1] = a[j];
        j--;
    }
    a[j + 1] = key;
}
```

---

### 🔹 7. Merge Sort

**Concept:**
Divide array into halves, sort each half, merge them.

🌀 *GIF:* split-merge tree animation, merging sorted halves.

```cpp
void mergeSort(vector<int>& a) {
    if (a.size() <= 1) return;
    int mid = a.size() / 2;
    vector<int> left(a.begin(), a.begin() + mid);
    vector<int> right(a.begin() + mid, a.end());
    mergeSort(left);
    mergeSort(right);
    merge(a.begin(), a.end(), left.begin(), left.end(), right.begin(), right.end());
}
```

**Used in:** understanding divide-and-conquer.

---

### 🔹 8. Prefix Sum

**Concept:**
Store cumulative sums so range queries are O(1).

🌀 *GIF:* running sum line moving through array.

```cpp
vector<int> pref(n+1, 0);
for (int i = 1; i <= n; i++)
    pref[i] = pref[i-1] + a[i-1];

// sum of range [l, r]
int sum = pref[r] - pref[l-1];
```

**Used in:** subarray sum, differences, and “range add” problems.

---

### 🔹 9. GCD / LCM & Modular Arithmetic

**Concept:**
GCD = greatest common divisor; used in fractions, ratios, simplifying steps.

🌀 *GIF:* Euclid’s algorithm (remainder division loop).

```cpp
int gcd(int a, int b) { return b == 0 ? a : gcd(b, a % b); }
int lcm(int a, int b) { return a / gcd(a,b) * b; }

cout << gcd(24, 16) << " " << lcm(24,16);
```

**Used in:** “Make all numbers equal”, “Find step size”, modular inverse.

---

### 🔹 10. Bitwise Basics

**Concept:**
Operate directly on binary bits — fast for parity, toggles, masks.

🌀 *GIF:* 0101 & 0110 → 0100 highlight logic.

```cpp
int a = 5, b = 6;
cout << (a & b) << " "; // AND
cout << (a | b) << " "; // OR
cout << (a ^ b) << " "; // XOR
cout << (a << 1);       // shift left = multiply by 2
```

**Used in:** subset enumeration, toggling, fast math.

---

### 🔹 11. Frequency Count

**Concept:**
Track how many times each value appears.

🌀 *GIF:* boxes filling counts in an array or map.

```cpp
map<int,int> freq;
for (int x : a) freq[x]++;
for (auto [num, cnt] : freq)
    cout << num << " appears " << cnt << " times\n";
```

**Used in:** counting characters, duplicates, element conditions.

---

### 🔹 12. Simple Math Patterns

**Concept:**
Know small formulas that often appear in implementation/math problems.

| Concept                    | Formula                     | Example                   |
| -------------------------- | --------------------------- | ------------------------- |
| Sum of n natural numbers   | n × (n + 1)/2               | sum(1…5) = 15             |
| Sum of first n odd numbers | n²                          | 1+3+5 = 9                 |
| n C 2 (pairs)              | n × (n – 1)/2               | count of all unique pairs |
| Mod property               | (a + b)%m = ((a%m)+(b%m))%m | modular addition          |

🌀 *GIF:* animated formula boxes popping.
