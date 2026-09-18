const cv = {
  name: "SiThu",
  role: "Java Backend Developer",
  location: "Prague, Czech Republic",
  email: "ccthu784@gmail.com",
  phone: "+420 721 013 852",
  github: "https://github.com/CThu01",
  intro:
    "Backend-focused developer transitioning from 3+ years in network engineering into Java software development. I build practical backend systems with Java, Spring Boot, REST APIs, relational databases, Docker, and Linux.",
  summary:
    "Since May 2024, I have focused on Java backend development through personal and group projects. My work includes a custom Java database system with a SQL parser, storage engine, and B+Tree indexing, plus a PHP user-management REST API built without a framework. I am studying Informatics at CZU in Prague and looking for a role where I can contribute, deepen my backend skills, and continue learning technologies such as Go and Microsoft SQL Server.",
  focus: ["Java & Spring Boot", "RESTful APIs", "SQL & data modelling", "Docker & Linux"],
  experience: [
    { role: "Senior NOC Engineer", company: "MyanmarLink (ISP)", period: "Dec 2020 — Aug 2022", highlights: ["Worked in a production ISP environment focused on operational reliability and network service continuity.", "Developed a practical foundation in incident handling, troubleshooting, and cross-team technical communication."] },
    { role: "L1 Technical Support Engineer", company: "AGB Communication (ISP)", period: "Aug 2022 — Mar 2024", highlights: ["Delivered first-line technical support and assisted with diagnosing service and connectivity issues.", "Built customer-focused communication and structured problem-solving skills transferable to backend engineering teams."] },
  ],
  education: [
    { school: "Czech University of Life Sciences Prague (CZU)", degree: "Informatics", period: "Nov 2025 — Present", location: "Prague, Czech Republic" },
    { school: "Technological University (Hmawbi)", degree: "Third year, Information Technology", period: "2018 — 2020", location: "Myanmar" },
  ],
  skillGroups: [
    { label: "Backend", skills: ["Java", "Spring Boot", "REST APIs", "PHP"] },
    { label: "Data", skills: ["MySQL", "Relational databases", "B+Tree indexing", "SQL"] },
    { label: "Platform", skills: ["Docker", "Linux", "Git", "GitHub"] },
    { label: "Networking", skills: ["CCNA", "CCNP Routing & Switching", "CCNP Security"] },
  ],
  projects: [
    { name: "C2DB — Custom Database Management System", category: "Java · Systems programming", featured: true, description: "A database system built from scratch in Java to explore how data moves from a SQL query to durable, indexed storage.", highlights: ["Built a SQL query parser and query engine.", "Implemented a storage engine, table management, page-based storage, and .tbl files.", "Added B+Tree indexing for efficient data access."], stack: ["Java", "SQL parser", "Storage engine", "B+Tree"], link: "https://github.com/CThu01/C2-Custom-DB" },
    { name: "Food Ordering System", category: "Group project · Backend services", featured: true, description: "A containerised food-ordering application developed as a group project with a modern Java backend stack.", highlights: ["Worked with create, read, and delete operations in the application flow.", "Collaborated in a service-oriented stack using Spring Boot, Redis, and gRPC."], stack: ["React", "Spring Boot", "MySQL", "Redis", "gRPC", "Docker"], link: "https://github.com/one-project-one-month/food-ordering-system-java" },
    { name: "User Management System (RBAC)", category: "PHP · REST API", featured: false, description: "A framework-free user-management REST API built to understand web fundamentals and application structure from the ground up.", highlights: ["Developed the REST API in pure PHP without a framework.", "Implemented a custom HTTP router and standardised API responses."], stack: ["PHP", "REST API", "Custom router", "RBAC"], link: "https://github.com/CThu01/userManagement_in_pure_php" },
    { name: "Corporate Banking System", category: "Group project · In progress", featured: false, description: "An in-progress group project exploring a distributed banking architecture and enterprise backend tooling.", highlights: ["Working in a stack spanning Quarkus, Oracle, Keycloak, Kafka, Consul, and gRPC.", "Contributing to a containerised project with a React frontend and backend services."], stack: ["React", "Quarkus", "Oracle", "Keycloak", "Kafka", "Consul", "Docker"], link: "https://github.com/fly-pay/corporate-banking-backend/tree/dev/app" },
  ],
};

export default cv;
