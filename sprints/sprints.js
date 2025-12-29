// 📌 OVERALL DELIVERY PLAN

//npx vite build

// Total Duration: ~10–12 weeks
// Sprint Length: 2 weeks
// Total Sprints: 6 Sprints

// Reason: Widget SDK + Bot + Live Agent + Admin + Analytics = medium–large SaaS

// 🧭 SPRINT BREAKDOWN (HIGH LEVEL)
// Sprint	Goal
// Sprint 0	Foundation & Infra
// Sprint 1	Chat Widget SDK (Client Side)
// Sprint 2	Bot Engine (FAQs Flow)
// Sprint 3	Admin Panel (Bot + Agent Mgmt)
// Sprint 4	Live Agent Chat System
// Sprint 5	Hardening, Analytics & Release
// 🔹 SPRINT 0 – FOUNDATION & SETUP (1 week)
// 🎯 Sprint Goal

// Project ko production-ready foundation par lana

// Epics
// E0.1 – Architecture & Repo Setup
// E0.2 – Infrastructure Setup
// E0.3 – Security & Multi-Tenancy Base
// 📘 User Stories & Tasks
// Story: Repo & Project Setup

// As a dev team, we want clean repo structure so future scaling is easy.

// Tasks

// Monorepo setup (apps/api, apps/socket, apps/admin, packages/widget)

// ESLint, Prettier, Husky

// ENV config strategy

// Story: Database Initialization

// As a system, we need base schemas for multi-tenant support.

// Tasks

// PostgreSQL schema design

// Migrations setup

// Seed scripts

// Story: Infra Setup

// As a platform, system should run consistently across envs.

// Tasks

// Docker Compose

// Redis integration

// Nginx base config

// PM2 ecosystem file

// 🔹 SPRINT 1 – CHAT WIDGET SDK
// 🎯 Sprint Goal

// Client product me plug & play chatbot widget

// Epics
// E1.1 – Widget UI & UX
// E1.2 – Widget SDK Build
// E1.3 – Session Management
// 📘 Stories & Tasks
// Story: Floating Chat Widget

// As an end user, I want easy access to support chat.

// Tasks

// Floating button UI

// Open / close animation

// Responsive layout

// Theme support

// Story: Embed SDK

// As a client, I want one script to embed chatbot.

// Tasks

// Global config loader

// Widget bootstrap

// Shadow DOM isolation

// Build as UMD bundle

// Story: Session Persistence

// As a user, my chat shouldn’t reset on refresh.

// Tasks

// LocalStorage session

// Session ID sync with backend

// Restore messages on reload

// 🔹 SPRINT 2 – BOT ENGINE (FAQ SYSTEM)
// 🎯 Sprint Goal

// Rule-based bot with hierarchical questions

// Epics
// E2.1 – FAQ APIs
// E2.2 – Bot Flow Engine
// E2.3 – Escalation Trigger
// 📘 Stories & Tasks
// Story: FAQ Retrieval

// As a bot, I need structured FAQs.

// Tasks

// Category API

// Question API

// Answer API

// Caching via Redis

// Story: Bot Conversation Flow

// As a user, I want guided problem solving.

// Tasks

// Step-based question rendering

// Button based replies

// Fallback logic

// Story: Escalation Option

// As a user, I want to connect to agent if unresolved.

// Tasks

// “Not Helpful” tracking

// Escalation threshold logic

// Connect to Agent CTA

// 🔹 SPRINT 3 – ADMIN PANEL
// 🎯 Sprint Goal

// Client can manage bot & agents independently

// Epics
// E3.1 – Auth & Roles
// E3.2 – FAQ Management
// E3.3 – Agent Management
// 📘 Stories & Tasks
// Story: Admin Authentication

// As an admin, I need secure access.

// Tasks

// JWT auth

// Role-based access

// Password policies

// Story: FAQ CRUD

// As an admin, I want to manage bot content.

// Tasks

// Category CRUD

// Question CRUD

// Rich text answers

// Publish/unpublish

// Story: Agent Management

// As an admin, I want to manage agents.

// Tasks

// Create / disable agents

// Online/offline status

// Agent capacity config

// 🔹 SPRINT 4 – LIVE AGENT CHAT
// 🎯 Sprint Goal

// Real-time human chat escalation

// Epics
// E4.1 – Socket Infrastructure
// E4.2 – Agent Assignment
// E4.3 – Live Chat UI
// 📘 Stories & Tasks
// Story: Real-time Messaging

// As a user, I want instant replies from agent.

// Tasks

// Socket rooms

// Message events

// Typing indicators

// Read receipts

// Story: Agent Assignment

// As a system, chats should auto-assign fairly.

// Tasks

// Redis agent availability

// Load balancing logic

// Reassignment on disconnect

// Story: Agent Dashboard

// As an agent, I want to handle chats efficiently.

// Tasks

// Incoming chat list

// Active chat window

// End chat flow

// 🔹 SPRINT 5 – HARDENING & RELEASE
// 🎯 Sprint Goal

// Production launch ready system

// Epics
// E5.1 – Analytics
// E5.2 – Security & Stability
// E5.3 – Deployment & Docs
// 📘 Stories & Tasks
// Story: Chat Analytics

// As a client, I want insights.

// Tasks

// Bot resolution rate

// Agent response time

// Escalation metrics

// Story: Security Hardening

// As a platform, system must be secure.

// Tasks

// Rate limiting

// XSS protection

// Input sanitization

// Audit logs

// Story: Release Readiness

// As a business, system should be deployable.

// Tasks

// Prod env configs

// Backup strategy

// Client onboarding doc

// SLA checklist