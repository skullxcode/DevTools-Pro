# 🚀 DevUnit Pro: Multi-Purpose Developer Utility

**DevUnit Pro** is a centralized hub for common developer conversions, focusing on mathematical accuracy, real-time data binding, and a professional user interface. Built as a Single Page Application (SPA), it allows users to switch between specialized tools seamlessly without page reloads.

## 🛠 Features

* **REM ↔ PX Converter**: A bidirectional tool for frontend developers to synchronize CSS units with pixel-perfect precision using floating-point math.
* **Decimal ↔ Binary Converter**: A logic-based tool designed to visualize base conversions, utilizing base-2 parsing algorithms.
* **HEX ↔ RGB Converter**: A color-processing utility that handles Base-16 string parsing and provides instant data transformation.
* **Dynamic UI Toggling**: An architecture that manages independent DOM sections and logic sets based on the active user context.
* **Modern Developer UI**: Optimized for high-resolution displays (like the MacBook Pro M4) with a Slate/Sky-Blue dark theme and glassmorphism elements.

## 🧠 Technical Highlights

* **Bi-directional Data Binding**: Engineered event-driven logic where two independent input fields update each other simultaneously while preventing infinite execution loops.
* **String & Base Manipulation**: Utilized advanced JavaScript methods including `.toString(16)`, `parseInt(n, 2)`, and `.toFixed()` for high-precision data transformation.
* **Optimized DOM Performance**: Implemented a "Container-Swapping" approach to handle multiple application states within a single HTML file.
* **CSS Masking**: Managed icon assets using CSS masks and SVG data-URIs to reduce external HTTP requests and improve load performance.

## 📂 Project Structure
```text
├── index.html   # Main structural framework and containers
├── script.js    # Logic controllers for UI switching and math formulas
└── style.css    # Responsive dark-theme styling and flexbox layouts
