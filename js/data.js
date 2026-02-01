// Data Source for Peloton Dashboard

const pelotonData = {
    financials: [
        { year: 2017, totalRev: 218.6, subRev: 32.5, hardRev: 186.2, ebitda: null, fcf: null, margin: null },
        { year: 2018, totalRev: 435.0, subRev: 80.3, hardRev: 354.7, ebitda: null, fcf: null, margin: null },
        { year: 2019, totalRev: 915.0, subRev: 181.1, hardRev: 733.9, ebitda: null, fcf: null, margin: null },
        { year: 2020, totalRev: 1825.9, subRev: 363.7, hardRev: 1462.2, ebitda: null, fcf: null, margin: null },
        { year: 2021, totalRev: 4021.8, subRev: 872.2, hardRev: 3149.7, ebitda: 253.7, fcf: -491.9, margin: 36.1 },
        { year: 2022, totalRev: 3149.7, subRev: 1394.7, hardRev: 2187.5, ebitda: -982.7, fcf: -2357.4, margin: 19.5 },
        { year: 2023, totalRev: 2800.2, subRev: 1670.1, hardRev: 1130.2, ebitda: -208.5, fcf: -470.0, margin: 33.0 },
        { year: 2024, totalRev: 2700.5, subRev: 1708.7, hardRev: 991.7, ebitda: 3.5, fcf: -85.8, margin: 44.7 },
        { year: 2025, totalRev: 2490.8, subRev: 1673.7, hardRev: 817.1, ebitda: 403.6, fcf: 323.7, margin: 50.9 }
    ],
    subscribers: [
        { year: 2021, cfSubs: 2330700, appSubs: null, churn: 0.61 },
        { year: 2022, cfSubs: 2913131, appSubs: 979817, churn: 0.96 },
        { year: 2023, cfSubs: 2997928, appSubs: 831065, churn: 1.30 },
        { year: 2024, cfSubs: 2976265, appSubs: 621432, churn: 1.40 },
        { year: 2025, cfSubs: 2799943, appSubs: 552451, churn: 1.60 }
    ],
    operations: [
        { year: 2021, employees: null, retail: 123 },
        { year: 2022, employees: null, retail: 135 },
        { year: 2023, employees: 3584, retail: null }, // Retail data not explicit in source for 23-25, presumed declining
        { year: 2024, employees: 2918, retail: null },
        { year: 2025, employees: 2656, retail: 10 } // 10 microstores mentioned in strategy
    ],
    scorecard: [
        { metric: "Cost Savings (FY25)", target: "$200M+", actual: "Exceeded", status: "green", trend: "up" },
        { metric: "Free Cash Flow (FY25)", target: "$200M", actual: "$324M", status: "green", trend: "up" },
        { metric: "Gross Margin (FY25)", target: "47%", actual: "50.9%", status: "green", trend: "up" },
        { metric: "Ending Subs (FY25)", target: "2.75M", actual: "2.80M", status: "green", trend: "down" },
        { metric: "Revenue Growth", target: "Positive", actual: "-8%", status: "red", trend: "flat" },
        { metric: "New Cust. Acquisition", target: "Growth", actual: "Declining", status: "red", trend: "down" }
    ],
    opportunities: [
        { name: "Content Licensing", probability: 0.8, impact: 0.9, rec: "Monitor as % of sub revenue" },
        { name: "B2B / Commercial", probability: 0.6, impact: 0.8, rec: "Leverage Precor infra" },
        { name: "Int'l Expansion", probability: 0.4, impact: 0.9, rec: "Long-term horizon" },
        { name: "LTV Extension", probability: 0.7, impact: 0.6, rec: "Focus on AI/Engagement" }
    ],
    risks: [
        { name: "Subscriber Erosion", probability: 0.9, impact: 1.0, mitigation: "Retention initiatives (Club, Teams)", status: "red" },
        { name: "Market Saturation", probability: 0.8, impact: 0.9, mitigation: "Shift to wellness/broad market", status: "amber" },
        { name: "Tariff Exposure", probability: 0.5, impact: 0.5, mitigation: "Diversified supply chain", status: "green" }
    ],
    sources: {
        "revenue_turnaround": {
            quote: "Revenue mix transformed from 78% hardware (FY21) to 67% subscription (FY25).",
            source: "Peloton 10-K FY2025",
            section: "Management Discussion & Analysis",
            page: "46"
        },
        "profitability_swing": {
            quote: "Adjusted EBITDA swung $1.4B from FY22 lows (-$983M) to +$404M in FY25. Free Cash Flow improved by $816M.",
            source: "Peloton 10-K FY2025",
            section: "Key Operational Metrics",
            page: "47"
        },
        "restructuring": {
            quote: "Actions pursuant to our 2024 Restructuring Plan... have been substantially completed. Headcount reduced to 2,656.",
            source: "Peloton 10-K FY2025 & Impact Report",
            section: "Restructuring",
            page: "Note 4"
        },
        "credibility": {
            quote: "Management has established a consistent track record of beating guidance... FY25 FCF beat revised target by 62%.",
            source: "Q4 FY2025 Earnings Transcript",
            section: "CFO Commentary",
            page: "Transcript"
        },
        "churn_risk": {
            quote: "Average Net Monthly Paid Connected Fitness Subscription Churn increased to 1.6% in FY25.",
            source: "Peloton 10-K FY2025",
            section: "Operational Metrics",
            page: "47"
        },
        "growth_strategy": {
            quote: "Peter Stern's strategy: 'Empower people to live fit, strong, long, and happy'... Magic formula: Premium equipment + AI software + instructors + community.",
            source: "Q1 FY2026 Earnings Call",
            section: "CEO Opening Remarks",
            page: "Transcript"
        }
    }
};
