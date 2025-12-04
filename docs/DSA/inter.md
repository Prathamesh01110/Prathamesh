---
sidebar_position: 3
---
# Intermidate 

### 🔹 1. “At Most k Operations” / “Modify ≤ k Elements”

**Pattern:**  You can change, swap, or skip at most k times to optimize sum or array property.
**Approach:** Loop through 0…k possibilities + greedy or brute for small k.

```cpp
int n,k; cin>>n>>k;
vector<int>a(n); for(int &x:a) cin>>x;
sort(a.begin(),a.end());
int best = a.back()-a.front();
for(int i=0;i<=k;i++){
    if(i>=n) break;
    best = min(best, a[n-1-i]-a[i]);
}
cout<<best;
```

---

### 🔹 2. “Swap or Skip” (Type B pattern)

**Pattern:**  You can either swap one pair or skip an element to make array sorted/beautiful.
**Approach:** Check if already sorted, else test 1–2 swaps manually.

```cpp
vector<int>a(n);
auto b=a; sort(b.begin(),b.end());
int l=-1,r=-1;
for(int i=0;i<n;i++) if(a[i]!=b[i]) { if(l==-1) l=i; r=i; }
if(l==-1) cout<<"YES";
else { reverse(a.begin()+l,a.begin()+r+1); cout<<(a==b?"YES":"NO"); }
```

---

### 🔹 3. “Pair / Subset Condition”

**Pattern:** Check for pair satisfying `ai + aj = x`, `ai < aj`, or similar.
**Approach:** Use map / set for complement look-ups.

```cpp
int n,x; cin>>n>>x;
vector<int>a(n); for(int &v:a) cin>>v;
unordered_set<int> s;
bool ok=false;
for(int v:a){
    if(s.count(x-v)) ok=true;
    s.insert(v);
}
cout<<(ok?"YES":"NO");
```

---

### 🔹 4. “String Character Conditions”

**Pattern:** Strings with ≤ k different letters, remove to make palindrome, etc.
**Approach:** Sliding window + frequency array.

```cpp
string s; int k; cin>>s>>k;
int n=s.size(), l=0, best=0;
vector<int>freq(26);
int distinct=0;
for(int r=0;r<n;r++){
    if(++freq[s[r]-'a']==1) distinct++;
    while(distinct>k){
        if(--freq[s[l]-'a']==0) distinct--;
        l++;
    }
    best=max(best,r-l+1);
}
cout<<best;
```

---

### 🔹 5. “Prefix/Suffix Replacement”

**Pattern:** Make string palindrome or uniform by minimal edits.

```cpp
string s; cin>>s;
int n=s.size(), changes=0;
for(int i=0;i<n/2;i++)
    if(s[i]!=s[n-1-i]) changes++;
cout<<changes;
```

---

### 🔹 6. “Range or Segment Condition”

**Pattern:** Find longest subarray satisfying property (sum≤k, ≤x negatives, etc.)
**Approach:** Two pointers / sliding window.

```cpp
int n,k; cin>>n>>k;
vector<int>a(n); for(int &v:a) cin>>v;
int l=0,sum=0,best=0;
for(int r=0;r<n;r++){
    sum+=a[r];
    while(sum>k) sum-=a[l++];
    best=max(best,r-l+1);
}
cout<<best;
```

---

### 🔹 7. “Equalize / Balance Values”

**Pattern:** Make all elements equal / balance sums with ≤ k ops.

```cpp
int n,k; cin>>n>>k;
vector<int>a(n); for(int &x:a) cin>>x;
int mn=*min_element(a.begin(),a.end());
int cost=0;
for(int x:a) cost+=x-mn;
cout<<(cost<=k?"YES":"NO");
```

---

### 🔹 8. “Sorting + Greedy Choice”

**Pattern:** Sort first, then greedily choose based on cost/value.

```cpp
int n,x; cin>>n>>x;
vector<int>a(n); for(int &v:a) cin>>v;
sort(a.begin(),a.end());
int ans=0;
for(int i=0;i<n;i++)
    if(a[i]<=x){ x-=a[i]; ans++; }
cout<<ans;
```

---

### 🔹 9. “Frequency + Condition”

**Pattern:** Given elements, check counts (like equal freq or unique).

```cpp
int n; cin>>n;
map<int,int>cnt;
for(int i=0;i<n;i++){int x;cin>>x;cnt[x]++;}
bool ok=true;
for(auto [k,v]:cnt) if(v>2) ok=false;
cout<<(ok?"YES":"NO");
```

---

### 🔹 10. “Difference Array / Range Updates”

**Pattern:** Apply many +1/-1 updates efficiently.

```cpp
int n,q; cin>>n>>q;
vector<int>d(n+2,0);
while(q--){
  int l,r; cin>>l>>r;
  d[l]++; d[r+1]--;
}
for(int i=1;i<=n;i++){
  d[i]+=d[i-1];
  cout<<d[i]<<" ";
}
```

---

### 🔹 11. “Math / Inequality Logic”

**Pattern:** Conditions like `ai + aj > l` or `ai < aj`, range count.

```cpp
int n,l; cin>>n>>l;
vector<int>a(n); for(int &x:a) cin>>x;
sort(a.begin(),a.end());
int ans=0;
for(int i=0;i<n;i++){
    int j=upper_bound(a.begin()+i+1,a.end(),l-a[i])-a.begin();
    ans+=n-j;
}
cout<<ans;
```

---

### 🔹 12. “Choose Min/Max Operations”

**Pattern:** Choose best of two actions (swap vs skip, increment vs decrement).

```cpp
int n; cin>>n;
vector<int>a(n); for(int &x:a) cin>>x;
int ops=0;
for(int i=1;i<n;i++){
    if(a[i]<a[i-1]){
        ops += a[i-1]-a[i];
        a[i]=a[i-1];
    }
}
cout<<ops;
```

---

### 🔹 13. “Greedy Pairing / Matching”

**Pattern:** Match smallest with smallest or largest with smallest to minimize cost.

```cpp
int n; cin>>n;
vector<int>a(n),b(n);
for(int &x:a) cin>>x;
for(int &x:b) cin>>x;
sort(a.begin(),a.end());
sort(b.begin(),b.end());
long long ans=0;
for(int i=0;i<n;i++) ans+=abs(a[i]-b[i]);
cout<<ans;
```

---

### 🔹 14. “Count Valid Pairs with Constraints”

**Pattern:** Pairs satisfying `ai*aj <= k`, `ai+aj >= x`, etc.

```cpp
int n,k; cin>>n>>k;
vector<int>a(n); for(int &x:a) cin>>x;
sort(a.begin(),a.end());
long long ans=0;
for(int i=0;i<n;i++){
    int j=upper_bound(a.begin(),a.end(),k/a[i])-a.begin();
    ans += j-(i+1);
}
cout<<ans;
```

---

### 🔹 15. “Simple Simulation / Counting”

**Pattern:** Loop directly simulating described process.

```cpp
int n; cin>>n;
int pos=0,steps=0;
while(n--){
    string s; cin>>s;
    if(s=="LEFT") pos--;
    else if(s=="RIGHT") pos++;
    else { int k; cin>>k; } // e.g., "SAME AS k"
}
cout<<pos;
```

---

### 🔹 16. “Matrix / Grid Movement”

**Pattern:** Move ↕️↔️ and count reachable or visited cells.

```cpp
int n,m; cin>>n>>m;
vector<string>g(n);
for(auto &x:g) cin>>x;
int cnt=0;
for(int i=0;i<n;i++)
 for(int j=0;j<m;j++)
  if(g[i][j]=='.') cnt++;
cout<<cnt;
```

---

### 🔹 17. “Math-based Rounding / Ceiling Logic”

**Pattern:** Minimum days, groups, pages → always use ceil.

```cpp
int n,x; cin>>n>>x;
cout<< (n + x - 1) / x;
```

---

### 🔹 18. “Sort by Custom Condition”

**Pattern:** Sort with pair comparator (e.g., descending second, ascending first).

```cpp
vector<pair<int,int>>v(n);
sort(v.begin(), v.end(), [](auto &p1, auto &p2){
    if(p1.second==p2.second) return p1.first<p2.first;
    return p1.second>p2.second;
});
```

---

### 🔹 19. “Maximize by One-Pass Greedy”

**Pattern:** One pass keeps running max/min, counts or accumulates best.

```cpp
int mx=-1e9, ans=0;
for(int x:a){
    mx=max(mx,x);
    ans+=mx;
}
```

---

### 🔹 20. “Compare Prefix/Suffix Values”

**Pattern:** Balance prefix vs suffix sums.

```cpp
int n; cin>>n;
vector<int>a(n); for(int &x:a) cin>>x;
int pref=0,suff=accumulate(a.begin(),a.end(),0),best=0;
for(int i=0;i<n;i++){
    pref+=a[i]; suff-=a[i];
    best=max(best,abs(pref-suff));
}
cout<<best;
```

---
