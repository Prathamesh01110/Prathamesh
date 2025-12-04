---
sidebar_position: 1
---
# Resources

System Design is about understanding **how large-scale applications work behind the scenes** — how data flows, how systems handle millions of users, and how everything stays fast, secure, and reliable.

This section includes the **best learning resources** and **core techniques** to build that foundation.

---

## 🎥 Recommended Videos

* **FAANG System Design Playlist (Tech Dummies)** — [Watch here](https://youtu.be/IUrQ5_g3XKs?si=fgh24IhdEtz-dsxU)
  Great beginner-friendly breakdowns of popular design questions.

* **Gaurav Sen — System Design Concepts** — [Watch here](https://youtu.be/l3AOubKFB1U?si=8gQ8aI9SL3RtsCNC)
  Deep conceptual explanations with real-world analogies.

* **System Design for Interviews (ByteByteGo)** — [Watch here](https://youtu.be/j84w5VM9GT8?si=EvA_TkrXPXJaRFs6)
  Clean visual diagrams and clear explanation of trade-offs.

---

## 📘 Cheatsheets & Reading

* **Design Gurus Cheat Sheet** — [designgurus.io/blog/system-design-cheat-sheet](https://www.designgurus.io/blog/system-design-cheat-sheet)
  Covers scalability, databases, load balancing, caching, etc.

* **Medium Guide (Java Revisited)** — [System Design Cheatsheet](https://medium.com/javarevisited/system-design-cheatsheet-4607e716db5a)
  Good for quick revision and interview prep.

---

## 🧠 Core Techniques & Concepts

Below are **some of the most common ideas** that appear across all system design problems:

| Concept                            | Description                                                                                         |
| ---------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Load Balancing**                 | Distribute incoming traffic across multiple servers to avoid overload.                              |
| **Caching**                        | Store frequently accessed data in memory (e.g., Redis, Memcached) to reduce latency.                |
| **Database Sharding**              | Split large databases into smaller pieces (shards) to improve performance.                          |
| **Replication**                    | Keep copies of data across servers to ensure reliability and faster reads.                          |
| **Message Queues**                 | Use systems like Kafka or RabbitMQ to handle asynchronous communication.                            |
| **CDN (Content Delivery Network)** | Serve static files (images, CSS, JS) from the nearest geographical servers.                         |
| **Rate Limiting**                  | Control how many requests a user/system can make to prevent abuse or overload.                      |
| **Microservices**                  | Split large applications into smaller independent services that communicate via APIs.               |
| **API Gateway**                    | Central entry point that manages requests, authentication, and routing.                             |
| **CAP Theorem**                    | In distributed systems, only two of Consistency, Availability, and Partition Tolerance can coexist. |
| **Consistency Models**             | Understand Strong vs Eventual Consistency trade-offs in distributed databases.                      |
| **Data Partitioning**              | Separate data logically (by user ID, region, etc.) to scale horizontally.                           |
| **Monitoring & Logging**           | Track performance and detect failures (Prometheus, Grafana, ELK).                                   |
| **Fault Tolerance**                | Design systems that keep running even when parts fail.                                              |

---

