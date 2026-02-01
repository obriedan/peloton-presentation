# Project: Peloton Business Intelligence Dashboard

## Objective

Create a single-page interactive HTML dashboard that serves as a companion to my executive presentation on Peloton's turnaround. The dashboard should allow viewers to explore the underlying data and source materials that support the presentation's conclusions.

## Technical Requirements

- Single HTML file (can include inline CSS and JavaScript)
- Use Chart.js for visualizations
- Mobile-responsive design
- Host-ready for GitHub Pages
- Clean, professional aesthetic (dark mode preferred, similar to financial terminals)
- No external dependencies that require build steps

## Dashboard Structure

### Section 1: Financial Turnaround (Supports Slide 1)

**Chart 1: Revenue Trajectory**

- Type: Combo chart (bars for total revenue, line for subscription % of revenue)
- Data: FY2017-FY2025 annual revenue
- Annotations: Mark key events (COVID peak, restructuring announcements, CEO changes)
- Story panel below: [INSERT KEY INSIGHT FROM SLIDE 1 ABOUT REVENUE]

**Chart 2: Profitability Journey**

- Type: Line chart with area fill
- Data: Adjusted EBITDA and Free Cash Flow, FY2021-FY2025
- Highlight: The inflection point to profitability
- Story panel below: [INSERT KEY INSIGHT FROM SLIDE 1 ABOUT PROFITABILITY]

**Chart 3: Operational Restructuring**

- Type: Horizontal bar chart or waterfall
- Data: Headcount changes, retail location closures
- Story panel below: [INSERT KEY INSIGHT FROM SLIDE 1 ABOUT RESTRUCTURING SCALE]

### Section 2: Execution Scorecard (Supports Slide 2)

**Table 1: Targets vs Actuals**

- Interactive table with RAG status indicators
- Columns: Metric | Target | Actual | Status | Trend
- Rows: Cost savings, FCF, EBITDA, Subscribers, Churn, Margins
- Sortable and filterable
- Story panel below: [INSERT KEY INSIGHT FROM SLIDE 2 ABOUT MANAGEMENT CREDIBILITY]

**Chart 4: Subscriber Metrics**

- Type: Dual-axis chart
- Data: Connected Fitness Subs (bars), Churn Rate (line), FY2021-FY2025
- Story panel below: [INSERT KEY INSIGHT FROM SLIDE 2 ABOUT SUBSCRIBER HEALTH]

**Chart 5: Engagement Trends**

- Type: Line chart
- Data: Average monthly workouts per subscriber (if available across years)
- Story panel below: [INSERT KEY INSIGHT FROM SLIDE 2 ABOUT ENGAGEMENT]

### Section 3: Strategic Outlook (Supports Slide 3)

**Table 2: Opportunity Assessment**

- Columns: Opportunity | Probability | Impact | Recommendation
- Visual indicators for probability/impact (dots or bars)
- Story panel below: [INSERT KEY INSIGHT FROM SLIDE 3 ABOUT GROWTH OPTIONS]

**Table 3: Risk Assessment**

- Columns: Risk | Probability | Impact | Mitigation
- RAG status indicators
- Story panel below: [INSERT KEY INSIGHT FROM SLIDE 3 ABOUT RISKS]

**Chart 6: Market Context** (if market data available)

- Type: Area chart or bar chart
- Data: Connected fitness market size projections
- Peloton's position annotated
- Story panel below: [INSERT KEY INSIGHT FROM SLIDE 3 ABOUT MARKET]

### Section 4: Source Material Viewer

**Implementation Options (choose one):**

Option A: Hover Modal

- Each data point or insight has a small "source" icon
- Hovering reveals a modal with the original quote and document reference
- Modal includes: Quote text, Document name, Page/section reference

Option B: Expandable Sections

- Each story panel has a "View Sources" toggle
- Clicking expands to show all source citations for that section
- Collapsible accordion style

Option C: Side Panel

- Clicking any chart/table element opens a right-side panel
- Panel shows relevant source quotes
- Panel can be pinned open or auto-closes

**Source Data Structure:**
Each insight should link to source citations in this format:

```json
{
  "insight_id": "revenue_decline",
  "quote": "Total revenue decreased from $2.7B in FY24 to $2.49B in FY25...",
  "source": "10-K FY2025",
  "section": "MD&A - Results of Operations",
  "page": "45"
}
```

## Data to Include

### Financial Data (use this exact data):

```
Year,Total_Revenue_M,Subscription_Revenue_M,Hardware_Revenue_M,Adj_EBITDA_M,FCF_M,Gross_Margin_Pct
2017,218.6,32.5,186.2,,,
2018,435,80.3,354.7,,,
2019,915,181.1,733.9,,,
2020,1825.9,363.7,1462.2,,,
2021,4021.8,872.2,3149.7,253.7,-491.9,36.1
2022,3149.7,1394.7,2187.5,-982.7,-2357.4,19.5
2023,2800.2,1670.1,1130.2,-208.5,-470,33.0
2024,2700.5,1708.7,991.7,3.5,-85.8,44.7
2025,2490.8,1673.7,817.1,403.6,323.7,50.9
```

### Subscriber Data:

```
Year,Connected_Fitness_Subs,App_Subs,Churn_Pct
2021,2330700,,0.61
2022,2913131,979817,0.96
2023,2997928,831065,1.30
2024,2976265,621432,1.40
2025,2799943,552451,1.60
```

### Operational Data:

```
Year,Employees,Retail_Locations
2021,,123
2022,,135
2023,3584,
2024,2918,
2025,2656,
```

## Design Guidelines

- Color palette: Use Peloton brand colors (red/coral accent) sparingly against dark background
- Typography: Clean sans-serif (system fonts fine)
- Charts: Minimal gridlines, clear labels, tooltips on hover
- Transitions: Subtle animations for interactivity, not distracting
- Layout: Single scroll page with sticky navigation

## Deliverable

Generate the complete HTML file with all CSS and JavaScript inline. The dashboard should be immediately deployable to GitHub Pages with no modifications needed.

After generating, provide:

1. The complete HTML code
2. Instructions for GitHub Pages deployment
3. A list of any placeholder text I need to replace with my actual insights

---

## CUSTOMIZATION NEEDED AFTER SLIDE CONTENT IS FINALIZED:

Replace all [INSERT KEY INSIGHT...] placeholders with the actual insights from your Claude-generated slides. The story panels are what connect the data visualization to the "so what" — they're critical for making this more than just charts.
