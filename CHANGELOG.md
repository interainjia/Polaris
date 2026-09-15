# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed

- Replaced the Polaris logo mark and wordmark in the top-left sidebar brand
  with the Crown Bioscience assets (`src/frontend/src/assets/favicon.svg`,
  `src/frontend/src/assets/cblogo.svg`).
- Replaced the browser tab favicon with `src/frontend/src/assets/favicon.svg`
  and updated the page title to "Crownbio · 自动 AI 科研平台".
- Renamed the "PolarisBuddy" assistant to "CrownbioBuddy" across UI text,
  tooltips, and internal comments, and swapped its icon (empty state, panel
  header, sidebar toggle, turn status) from the Polaris mark to
  `src/frontend/src/assets/favicon.svg` via a new `BuddyIcon` component that
  preserves the busy/idle status dot.
