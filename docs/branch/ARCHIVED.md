# Archived Branches

This document contains references to development branches that are not pushed to GitHub but are used during the internal development process.

---

## develop
The main development branch where all features are integrated before preparing a release.

---

## features
Branches dedicated to the development of specific features and functionalities.

| **Branch**                                | **Description**                                                                                                                   |
|-------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| **1.x**                                   | Represents the main development branch where all features and fixes are integrated. This branch is the most stable version of the code and is often deployed for production. |
| **develop**                               | This branch is used for ongoing development and contains the latest features that are in progress. It is where new code is merged before being considered stable enough for the `main` branch. |
| **feature/frontend/components**           | Contains the Vue.js components and elements used for the frontend UI. These components are modular and reusable, such as buttons, input fields, modals, and cards. It focuses on providing consistent UI elements. |
| **feature/frontend/design**               | Handles the setup of the design system, including color palette, typography, spacing, and more. It ensures consistency in design across the frontend by establishing reusable design standards. |
| **main**                                  | The main branch where the final version of the code lives, typically used for production releases. Once a feature or bug fix is tested and reviewed, it is merged into the `main` branch for deployment. |

---

## hotfix
| Branch              | Description                                |
|---------------------|--------------------------------------------|

---

## General Notes
- All branches listed here exist only locally or as internal development references.
- Only production-ready branches such as `main` and `release/*` are pushed to GitHub.
- Use this file to document the purpose and context of local or temporary branches.