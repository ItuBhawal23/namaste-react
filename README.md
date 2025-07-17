# Namaste React 🚀

# Parcel

## A build tool (A ZERO config bundler)

- Creates dev & prod build
- Generates a local server - default (localhost:1234)
- Automatically updates/reloads the UI using HRM
- HRM - Hot Module Replacement
- File Watching Algorithm - written in C++ (to track file changes)
- Faster builds - Cache the changes
- Image Optimization
- Code transpilation
- Minification
- Tree Shaking - removes unused/dead code
- Bundle files
- compress the files - highly optimized
- Consistent Hashing
- Code splitting
- Differential bundling - supports different browsers
- Diagnostic - better error visualization in terminal & browser
- Error Handling
- HTTPs
- Lazy loading
- Code splitting
- makes app fast, performant, highly optimized that browser can load easily

# Components Breakdown

/\*\*

- AppLayout
- - Header
- - Logo
- - Nav Items
-      - Home, About Us, Contact Us, Cart
- - Body
- - Search
- - Restaurant Container
-      - Restaurant card (list of cards)
-        - Res name
-        - Cuisine desc
-        - Rating, time,
- - Footer
- - copyright
- - links
- - address, ...
    \*/

# Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path"

- Named Export/Import

export const Component
import {Component} from "path"
