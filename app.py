from __future__ import annotations

from flask import Flask, jsonify, send_file

app = Flask(__name__)

PROJECT_LIBRARY = [
    {
        "name": "Enterprise AI Memory Engine",
        "category": "AI Infrastructure",
        "description": "Local-first memory architecture for enterprise knowledge retrieval, persistent context storage, and offline AI workflows.",
        "status": "Production-ready",
        "tags": ["FastAPI", "Ollama", "Qdrant", "RAG"],
    },
    {
        "name": "AI Market Intelligence Platform",
        "category": "Market Intelligence",
        "description": "Sentiment, anomaly, and forecasting workflows for financial signal discovery across market and risk data streams.",
        "status": "Signal pipeline",
        "tags": ["Forecasting", "Analytics", "Dashboards", "AI"],
    },
    {
        "name": "Multi-Agent Job Automation Engine",
        "category": "Workflow Automation",
        "description": "Autonomous hiring automation system that scrapes, scores, and prioritizes opportunities using AI-driven decision tooling.",
        "status": "Automation engine",
        "tags": ["Python", "Selenium", "LLM", "Automation"],
    },
    {
        "name": "IPSHOPY Social AI Engine",
        "category": "AI Product Systems",
        "description": "A social AI system designed for workflow orchestration, policy-aware automation, and structured digital operations.",
        "status": "System design",
        "tags": ["Architecture", "Automation", "AI", "Platform"],
    },
    {
        "name": "NeuroGrowthAI",
        "category": "Growth Intelligence",
        "description": "AI-driven experimentation and growth intelligence workflows built to support operational insight and strategic optimization.",
        "status": "Prototype",
        "tags": ["Growth", "Analytics", "AI"],
    },
    {
        "name": "TitanAI Vision",
        "category": "AI Strategy",
        "description": "The future-facing foundation for secure AI adoption, autonomous defense layers, and enterprise AI consulting for high-stakes organizations.",
        "status": "Concept",
        "tags": ["Security", "Advisory", "AI Strategy", "Governance"],
    },
]


def discover_projects() -> list[dict]:
    return PROJECT_LIBRARY


@app.get("/")
def index():
    return send_file("index.html")


@app.get("/api/projects")
def api_projects():
    return jsonify({
        "brand": "TITANAI",
        "headline": "AI Systems, Security & Automation for Ambitious Businesses",
        "projects": discover_projects(),
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False, threaded=True)
