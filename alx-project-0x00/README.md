# alx-project-0x00

Scaffolded Next.js + TypeScript project with Tailwind CSS, ESLint, and alias config.

## Setup

To start the dev server:

```bash
npm run dev -- -p 3000


## Components

### Pill

A reusable UI component to display short tags or labels (e.g., "Top Villa", "Self Check-In").

**Props:**

- `title` (string): The text displayed inside the pill.

**Example usage:**

```jsx
<Pill title="Top Villa" />

## Components

### Pill

A reusable UI component to display short tags or labels (e.g., "Top Villa", "Self Check-In").

**Props:**

- `title` (string): The text displayed inside the pill.

**Example usage:**

```jsx
<Pill title="Top Villa" />

## 🔘 Advanced Task - Custom Button Component

### 📌 Objective
Create a reusable Button component that accepts title and style props. Showcase it on the `/landing` page.

### 📁 Files
- `interfaces/index.tsx` → Defines `ButtonProps` interface
- `components/Button.tsx` → Reusable Button component
- `pages/landing.tsx` → Displays different button styles

### ⚙️ Features
- Accepts `title`, `size` (`small`, `medium`, `large`), and `shape` (`rounded-sm`, `rounded-md`, `rounded-full`)
- Responsive Tailwind classes

### 🧪 Preview on `/landing`
- ✅ Small Rounded-sm Button
- ✅ Medium Rounded-md Button
- ✅ Large Rounded-full Button
