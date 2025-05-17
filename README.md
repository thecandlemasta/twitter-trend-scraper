# Twitter Trend Scraper

Scrape current Twitter trends from [trends24.in](https://trends24.in) using Puppeteer.

## Features
- Get trending hashtags worldwide
- Automatic duplicate removal
- Docker support
- Country-specific trends (modify URL)

## Installation

### Prerequisites
- Node.js 18+
- Chromium dependencies (auto-installed with Docker)

### Without Docker
```bash
git clone https://github.com/thecandlemasta/twitter-trend-scraper.git
cd twitter-trend-scraper
npm install
node index.js
