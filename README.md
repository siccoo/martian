# Login Form SPA

A small, production-minded login form built as a single-page application.

## Goals

This project intentionally avoids UI component libraries to focus on:
- Accessibility fundamentals
- Clear async state handling
- Thoughtful UX details
- Clean, maintainable CSS

## Features

- Email + password authentication (mocked)
- Client-side validation
- Loading, error, and success states
- Keyboard navigation and focus management
- Accessible labels and live regions
- Minimal, readable styling without abstractions

## Tech Stack

- React
- TypeScript
- Vite
- Plain CSS

## Authentication Logic

Authentication is simulated using a mocked `fetch`-like function with artificial latency to reflect real-world network behavior.

**Demo credentials:**

- Email: `user@example.com`
- Password: `password123`

## Accessibility Notes

- All inputs use explicit `<label>` elements
- Focus styles are preserved and visible
- Async feedback is announced via `aria-live`
- Focus is programmatically managed after successful login

## Tradeoffs & Decisions

- No backend: keeps the scope focused on frontend UX
- No UI libraries: allows full control over semantics and styling
- Minimal animation: motion is used only to reinforce state changes

## Deployment

Deployed via GitHub Pages using a static build from Vite.
