# Consolidated Learning Syllabus

## Overview
This document consolidates all learning syllabi into a single reference guide organized by category. Each category contains the topics, priority levels, and actionable steps.

---

## Table of Contents
1. [Data Structures & Algorithms (DSA)](#dsa)
2. [System Design](#system-design)
3. [Web Development (React, Next.js, APIs)](#web-development)
4. [JavaScript Fundamentals](#javascript-fundamentals)

---

## DSA

| Order | Topic / Concept | Priority | What to Do (Exactly) |
|-------|-----------------|----------|----------------------|
| 1 | Big-O notation, time & space complexity estimation | Most important | Revisit; be able to estimate for your solutions in 30 secs. |
| 2 | Arrays & easy operations (max/min, rotation, etc.) | Most important | Done. You're good here. |
| 3 | Strings (anagrams, substrings, frequency) | Most important | Easy → medium bridging; 3–5 problems to warm up from arrays. |
| 4 | Prefix Sum pattern (range sums, subarrays) | Most important | CRITICAL. Start here for medium bridging. 5–7 LC mediums on this alone. |
| 5 | Sliding Window pattern (max/min in window, substrings) | Most important | CORE. Next after prefix sum; 8–10 LC mediums dedicated to this. |
| 6 | Two-pointers pattern (sorted arrays, pair sums) | Most important | After sliding window; bridges to hash map next. |
| 7 | Hash map / hash set operations | Most important | Use for frequency problems, seen logic; 6–8 mediums. |
| 8 | Monotonic Stack pattern (next greater, temp extremes) | Important | Often surprises candidates; 4–5 medium problems, then skip for now. |
| 9 | Stack & Queue basics (balanced parens, BFS/DFS prep) | Most important | Foundational; 3–4 easy-mediums, then link to graph traversal. |
| 10 | Binary Search (on array + answer space) | Most important | Very common medium; 5–7 problems. Practice timing yourself on these. |
| 11 | Linked list basics | Important | Reverse, cycle, merge; 3–4 mediums. Not as common in Japan tech interviews. |
| 12 | Recursion & DFS fundamentals | Most important | Prerequisite for trees/graphs; 2–3 simple DFS problems first. |
| 13 | Binary Trees – traversals (pre/in/post, level order) | Most important | Master all 4; 5–6 mediums, then practice iterative versions too. |
| 14 | Trees – Binary Search Trees (BST logic, LCA) | Important | 3–4 mediums; understand insert/search/delete flow. |
| 15 | Graph representation & DFS/BFS (islands, components) | Most important | 6–8 mediums mixing DFS & BFS; critical graph foundation. |
| 16 | Topological sort & directed graph cycles | Important | 3–4 mediums; course schedule style problems. |
| 17 | DP 1D – simple recurrence (climbing stairs, house robber) | Most important | MOST IMPORTANT DP. 5–7 mediums; focus on "how to form recurrence". |
| 18 | DP 2D – grid problems (unique paths, min path sum) | Important | 4–5 mediums after solidifying 1D. |
| 19 | DP – subsequences (LIS, LCS basics) | Important | 2–3 mediums; lower priority than grid DP. |
| 20 | Heap / Priority Queue (K-largest, merge K lists) | Important | 3–4 mediums; very practical, ties into interviews. |
| 21 | Intervals pattern (merge, overlap, insert) | Important | 3–5 mediums; common in scheduling/booking problems. |
| 22 | Design questions – LRU, LFU cache | Important | Bridges DSA & system design; 2–3 medium problems on this. |
| 23 | Bit manipulation basics | Optional | Skip for now; lower ROI for Japan interviews. |
| 24 | Union-Find (DSU) | Optional | Skip for now; can pick up if you see it in a problem. |
| 25 | Shortest paths (Dijkstra, basic only) | Optional | Conceptual understanding enough; skip implementation. |
| 26 | Advanced DP, segment trees, string algos | Optional | SKIP completely. |

---

## System Design

| Order | Topic / Concept | Priority | What to Do (Exactly) |
|-------|-----------------|----------|----------------------|
| 1 | NFRs clarification framework (latency, throughput, HA, etc) | Most important | START HERE. 1–2 hours. Practice asking: "How many users? Peak QPS? Reads/writes ratio?" |
| 2 | Back-of-envelope estimation (QPS, storage, bandwidth) | Most important | 2–3 hours; practice: "Design Twitter → estimate tweets/sec → storage → bandwidth" |
| 3 | Basic networking (HTTP, REST, DNS, load balancers) | Most important | 1–2 hours; you know this; crystallize explanations. |
| 4 | Data modeling & schema design (ER, normalization) | Most important | 2–3 hours; design schemas for: User, Post, Order, Payment, Vehicle. |
| 5 | SQL vs NoSQL tradeoffs (when to use which) | Most important | 1–2 hours; Postgres vs MongoDB decision tree. |
| 6 | Replication & sharding concepts | Important | 2–3 hours; understand leader/follower, read replicas, sharding keys, hotspots. |
| 7 | CAP theorem & consistency models (strong vs eventual) | Important | 1–2 hours; intuitive explanations tied to real systems. |
| 8 | Caching layers (CDN, in-memory cache, DB cache, strategies) | Most important | 2–3 hours; cache-aside, write-through, invalidation patterns. |
| 9 | Message queues & pub/sub (SQS/SNS patterns, Kafka-style) | Most important | 2–3 hours; your SQS/SNS expertise. Explain idempotency + retries + DLQ. |
| 10 | Microservices & service boundaries | Most important | 2–3 hours; your existing experience. Talk about your 3–4 real projects. |
| 11 | Service-to-service communication (REST, gRPC, async queues) | Most important | 1–2 hours; draw flow diagrams. |
| 12 | API design for scale (versioning, pagination, rate limits) | Most important | 1–2 hours; you did "60% API performance improvement"; explain deeply. |
| 13 | Authentication & authorization (OAuth2, OpenID, JWT) | Most important | 2–3 hours; fraud/biometric projects are gold here. Deep dive with examples. |
| 14 | Web security in distributed systems (XSS, CSRF, DDoS mitigation) | Important | 1–2 hours; enterprise clients care. |
| 15 | Idempotency, retries, rate limiting in APIs | Most important | 2–3 hours; design with: "What if a request retries 5 times?" |
| 16 | System Design Problem: URL Shortener | Most important | 3–4 hours mock; sketch → explain → discuss tradeoffs. (Your roadmap already has this) |
| 17 | System Design Problem: Rate Limiter | Most important | 3–4 hours mock; token bucket, sliding window, Redis impl. (Your roadmap) |
| 18 | System Design Problem: Notification System | Most important | 4–5 hours mock; this is where you'll jump from 4→7. Multi-channel, user prefs, retries, observability. |
| 19 | System Design Problem: Chat System (1:1 + online status) | Important | 4–5 hours mock; WebSocket, pub/sub, consistency. |
| 20 | System Design Problem: Payment / Checkout System | Most important | 4–5 hours mock; perfect for your domain. Idempotency, audit, security. |
| 21 | Observability (logs, metrics, tracing, alerting) | Most important | 2–3 hours; your production war-room experience shines. Talk MTTR, SLOs. |
| 22 | Fault tolerance (circuit breakers, timeouts, bulkheads) | Important | 1–2 hours; "How does the system survive if service X goes down?" |
| 23 | File storage & CDN (S3, signed URLs) | Important | 1–2 hours; Next.js + S3 integration patterns. |
| 24 | Search basics (high-level Elasticsearch concepts) | Optional | Skip for now unless a job asks for it. |
| 25 | Multi-region deployments & disaster recovery | Important | 1–2 hours; RTO/RPO, active-active setups. |
| 26 | Event-driven architectures & eventual consistency flows | Important | 2–3 hours; order lifecycle, saga pattern basics. |
| 27 | Mock Interview Structure (how to conduct one) | Most important | 1 hour study; then practice 1–2 mock interviews with friend/colleague. |
| 28 | RBAC/ABAC & multi-tenant design | Optional | Skip unless targeting SaaS (PayPay, Money Forward). |
| 29 | CQRS & Event Sourcing | Optional | Skip; not critical for Japan roles. |
| 30 | Specialized storage (time-series, graph DBs) | Optional | Skip. |

---

## Web Development

### React, Next.js & APIs

| Order | Topic / Concept | Priority | What to Do (Exactly) |
|-------|-----------------|----------|----------------------|
| 1 | TypeScript – core (interfaces, generics, utility types) | Most important | 2–3 hours deep dive; focus on React component typing. |
| 2 | React 19 Server Components & 'use client'/'use server' | Most important | 2–3 hours; huge shift from React 18. Practice building a simple SSR app. |
| 3 | React 19 Actions & form handling (useActionState) | Most important | 1–2 hours; understand how forms work in RSC world. |
| 4 | React 19 useOptimistic hook | Important | 1 hour; practice on a "like" button or todo optimistic update. |
| 5 | React 19 Metadata & document head management | Important | 1 hour; tie into Next.js / SEO setup. |
| 6 | React 19 Async components & async/await in components | Most important | 1–2 hours; critical for Next.js server components. |
| 7 | React 19 Ref improvements (no more forwardRef) | Important | 30 mins; nice quality-of-life improvement. |
| 8 | React core (hooks: useState, useEffect, useReducer) | Most important | Revisit in depth; make sure you can explain hook lifecycle & edge cases. |
| 9 | Custom hooks pattern & reusable logic | Most important | 1 hour; practice writing 2–3 custom hooks (useFetch, useLocalStorage, etc). |
| 10 | React Query / SWR (data fetching & caching) | Most important | 2 hours; pick one, know it well. Japan jobs mention these often. |
| 11 | State management (Zustand vs Redux Toolkit) | Important | 1 hour; you know Zustand; just compare tradeoffs vs Redux. |
| 12 | Next.js app directory (vs pages; routing; layouts) | Most important | 2–3 hours; align with React 19 Server Components. |
| 13 | Next.js rendering modes (SSR vs SSG vs ISR vs CSR) | Most important | 2 hours; be able to design per-route rendering strategy. |
| 14 | Next.js middleware & edge functions | Important | 1 hour; basic auth/logging use cases. |
| 15 | Next.js API routes (shifting to /app/api routes) | Most important | 1 hour; tie into Actions where possible. |
| 16 | REST API design (resource modeling, status codes, pagination) | Most important | 1–2 hours; design 2–3 simple APIs (User, Todo, Post CRUD). |
| 17 | Authentication (OAuth2, OpenID Connect, JWT refresh tokens) | Most important | 2–3 hours; your fraud/biometric expertise shines here. Prepare stories. |
| 18 | Node.js fundamentals (event loop, async I/O, modules) | Important | 1–2 hours; big-picture understanding, not deep. |
| 19 | Express/NestJS basics (middleware, routing, DI) | Important | 1–2 hours; clarify NestJS patterns vs Express simplicity. |
| 20 | Web security (XSS, CSRF, SQLi, CORS, secure cookies) | Most important | 1–2 hours; Japan enterprise is security-heavy. Prepare examples. |
| 21 | Testing – unit tests (Jest, Vitest, React Testing Library) | Most important | 3–4 hours. Go from 10% → 25% of your time. Write tests for React components. |
| 22 | Testing – e2e (Cypress / Playwright) | Important | 2–3 hours; build a full Next.js app + write 3–5 e2e tests end-to-end. |
| 23 | MongoDB (CRUD, indexes, aggregation basics) | Most important | 1–2 hours; you use it; be ready for schema design questions. |
| 24 | PostgreSQL (schema, joins, indexes, transactions) | Most important | 1–2 hours; many Japan roles use Postgres. Practice a complex query or two. |
| 25 | Redis caching (key-value, TTL, cache-aside, design patterns) | Most important | 1–2 hours; you use it in fraud projects; explain failure scenarios & refreshes. |
| 26 | Docker (Dockerfile, docker-compose, local dev) | Most important | 1–2 hours; be able to containerize a Next.js app + Node backend. |
| 27 | AWS basics (EC2, S3, SQS/SNS, Secrets Manager, IAM) | Most important | 2–3 hours; connect to your production experience. |
| 28 | Git workflows (feature branches, PRs, code review, CI/CD) | Most important | 1 hour; you do this; prepare to talk about pipeline design. |
| 29 | Frontend performance (bundle size, code splitting, lazy loading) | Important | 1–2 hours; practice optimizing a slow Next.js page. |
| 30 | WebSockets & real-time (Socket.io, SSE) | Important | 1–2 hours; tie into system design chat/notification scenarios. |
| 31 | GraphQL basics (schema, resolvers, N+1, caching) | Optional | Skip for now; not required for most Japan roles. |
| 32 | Another framework (Vue, Angular) | Optional | SKIP. No time. |

---

## JavaScript Fundamentals

| Order | Topic / Concept | Priority | Time Estimate + Notes |
|-------|-----------------|----------|----------------------|
| 1 | Hoisting (var/let/const, function declarations vs expressions, TDZ) | Most important | 1–1.5 hours; understand why var hoists to undefined vs let throws ReferenceError. Common puzzle questions. |
| 2 | Lexical scope, scope chain, global vs local scope | Most important | 1 hour; be able to trace variable lookups through nested functions. Foundation for closures. |
| 3 | Closures (definition, practical patterns, memory implications) | Most important | 2–3 hours; implement: once(), memoize(), private state, module pattern. Very common interview scenarios. |
| 4 | this binding (default, implicit, explicit with call/apply/bind, new, arrow functions) | Most important | 2–3 hours; practice: method on object vs global context vs constructor vs arrow in method. Common puzzle questions. |
| 5 | Event loop, call stack, task queue, microtask queue (promises vs timers) | Most important | 2–3 hours; trace execution order in complex async scenarios. Do 3–5 ordering puzzles (promise + setTimeout combinations). |
| 6 | Prototype chain, __proto__, Object.create, inheritance | Most important | 2–3 hours; understand prototype lookup, why Array.prototype.push is accessible on array instances. Contrast with class syntax. |
| 7 | Constructor functions, new keyword mechanics | Most important | 1–1.5 hours; understand: creates new object, sets prototype, binds this, returns object. Compare to class constructors. |
| 8 | ES6 class syntax, extends, super, inheritance patterns | Important | 1.5–2 hours; syntactic sugar over prototypes; understand super() calls and method overriding. |
| 9 | Promises: states (pending, resolved, rejected), chaining, .then/.catch/.finally | Most important | 2–3 hours; implement: error propagation, Promise.all/race/allSettled/any, and common pitfalls. |
| 10 | async/await: syntax, error handling, parallel vs sequential awaits | Most important | 2–3 hours; practice: converting promise chains to async/await, error handling with try/catch, await in loops (performance implications). |
| 11 | Microtask ordering (promises in microtask queue vs setTimeout in macrotask queue) | Most important | 1–2 hours; trace execution: setTimeout vs promise.then() vs queueMicrotask(). Do 4–5 ordering puzzles. |
| 12 | Generators (function*, yield), iteration, generator delegation | Optional | 1–1.5 hours; conceptual understanding sufficient; rarely asked in depth, but useful for understanding async/await internally. |
| 13 | var vs let vs const, block scoping, temporal dead zone (TDZ) | Most important | 1 hour; understand block scope in loops (for(let i) behaves differently than for(var i)). |
| 14 | Value vs reference types (primitives vs objects), copying semantics | Most important | 1 hour; understand why {a:1} === {a:1} is false but let x = {a:1}; let y = x; y === x is true. |
| 15 | Deep clone vs shallow copy patterns, Object.assign, spread operator | Important | 1.5–2 hours; implement: JSON.parse/stringify method, recursive clone, nested object scenarios. |
| 16 | Array methods (map, filter, reduce, find, some, every, flat, flatMap) | Most important | 2–3 hours; use in 10+ algorithm scenarios; understand time complexity and common pitfalls. |
| 17 | Destructuring (arrays, objects, nested, rest patterns) | Important | 1 hour; practice extracting values in function params and variable assignments. |
| 18 | Rest/spread operator (...) in arrays, objects, function params | Important | 1 hour; understand difference in function params (rest) vs literals (spread). |
| 19 | Arrow functions, lexical this, implicit return, when NOT to use arrow functions | Important | 1 hour; practice: method on object (use regular function, not arrow), constructor (use regular function). |
| 20 | Function declarations vs expressions, named function expressions | Important | 1 hour; understand hoisting differences and when to use each. |
| 21 | Default parameters, parameter validation patterns | Important | 1 hour; edge cases: undefined vs null vs falsy values triggering defaults. |
| 22 | call, apply, bind methods (explicit this binding) | Most important | 1.5–2 hours; practice: borrowing methods (Array.prototype.slice.call), partial application with bind. |
| 23 | Object property descriptors, Object.defineProperty, getters/setters | Optional | 1–1.5 hours; understanding: enumerable, configurable, writable, custom getters/setters logic. |
| 24 | typeof vs instanceof, checking types accurately (object, array, null edge cases) | Important | 1 hour; understand: typeof null === 'object', why instanceof checks prototype chain. |
| 25 | DOM basics (query, create, update, remove, append, text vs innerHTML) | Important | 1–1.5 hours; XSS pitfall with innerHTML; use textContent for text, innerHTML for safe HTML. |
| 26 | Event propagation (capturing, bubbling, target vs currentTarget), stopPropagation, preventDefault | Most important | 1.5–2 hours; practice: event delegation, understanding phase, preventing defaults (form submission, clicks). |
| 27 | addEventListener options (capture, once, passive), event object | Important | 1 hour; understand when to use capture phase vs bubbling; passive for scroll performance. |
| 28 | Debounce & throttle implementation patterns | Most important | 2–3 hours; implement both from scratch, understand tradeoffs, use cases (search, resize, scroll). |
| 29 | setTimeout, setInterval, clearing timers (clearTimeout, clearInterval) | Important | 1 hour; understand: millisecond precision isn't guaranteed, relation to event loop. |
| 30 | try/catch/finally with async (async/await error handling) | Most important | 1–1.5 hours; practice: catching promise rejections, async function errors, finally for cleanup. |
| 31 | Custom errors, error propagation in async chains | Important | 1–1.5 hours; creating custom error classes, re-throwing, distinguishing error types. |
| 32 | JSON.parse/JSON.stringify, limitations (functions, Dates, circular references) | Important | 1 hour; understand: replacer/reviver params, Map/Set not serializable, deep clone with JSON method. |
| 33 | Modules: ES modules (import/export), CommonJS (require/module.exports) | Important | 1.5–2 hours; understand: static vs dynamic imports, default vs named exports, circular dependency edge cases. |
| 34 | Strict mode ('use strict'), impact on this, eval, function calls | Optional | 30 mins; understand: disables implicit globals, safer this binding, generally good to enable. |
| 35 | Polyfills & transpilation basics (Babel, what's converted from ES6+ to ES5) | Optional | 1 hour; conceptual understanding sufficient for interviews. |
| 36 | Symbol, Map, Set basics (when to use vs plain objects/arrays) | Optional | 1 hour; understand: Symbol for unique keys, Map for key-value with non-string keys, Set for unique values. |
| 37 | WeakMap, WeakSet (memory, garbage collection) | Optional | 30 mins; conceptual only; rarely used in typical apps. |
| 38 | Proxy & Reflect (meta-programming) | Optional | 1.5 hours; advanced; only if you enjoy deep JS. |
| 39 | this in classes, method binding in React/callbacks | Important | 1.5–2 hours; understand: this in class methods, arrow methods vs regular methods, common pitfalls in React. |
| 40 | Template literals, tagged template functions | Optional | 1 hour; nice syntax feature, tagged templates are rarely asked. |

---

## Summary Statistics

| Category | Total Topics | Most Important | Important | Optional |
|----------|--------------|----------------|-----------|----------|
| DSA | 26 | 14 | 9 | 3 |
| System Design | 30 | 17 | 8 | 5 |
| Web Development | 32 | 18 | 9 | 5 |
| JavaScript Fundamentals | 40 | 20 | 13 | 7 |
| **TOTAL** | **128** | **69** | **39** | **20** |

---

## Study Strategy Recommendations

### High-Impact Topics (Highest ROI)
1. **DSA**: Prefix Sum, Sliding Window, Binary Search, Trees/Graphs, DP 1D
2. **System Design**: NFRs, Estimation, Caching, Microservices, Auth, Problem Scenarios
3. **Web Dev**: TypeScript, React 19 + Server Components, Next.js, Testing, Security
4. **JavaScript**: Event Loop, Closures, Promises/async-await, this binding, Prototypes

### Recommended Study Order
1. **Week 1-2**: JavaScript Fundamentals (Event Loop, Closures, Promises)
2. **Week 3-4**: DSA Core Patterns (Prefix Sum, Sliding Window, Binary Search)
3. **Week 5-6**: Web Dev Foundations (TypeScript, React, Next.js)
4. **Week 7-8**: System Design Concepts (NFRs, Estimation, Caching)
5. **Week 9-10**: Integration & Practice (Build projects combining everything)
6. **Week 11-12**: Problem-Solving & Mock Interviews

---

*Last Updated: December 23, 2025*
