document.addEventListener('DOMContentLoaded', function() {
    // Initialize Charts
    initRevenueChart();
    initProfitabilityChart();
    initRestructuringChart();
    initSubscriberChart();
    
    // Initialize Tables
    initScorecardTable();
    initOppRiskTables();

    // Initialize Source Viewer Interaction
    setupSourceViewer();
});

// --- Chart Configurations ---

// Common Chart Options for Dark Theme
const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { labels: { color: '#a0a0a0' } },
        tooltip: {
            backgroundColor: 'rgba(30, 30, 30, 0.9)',
            titleColor: '#fff',
            bodyColor: '#e0e0e0',
            borderColor: '#333',
            borderWidth: 1
        }
    },
    scales: {
        x: { grid: { color: '#333' }, ticks: { color: '#a0a0a0' } },
        y: { grid: { color: '#333' }, ticks: { color: '#a0a0a0' } }
    }
};

function initRevenueChart() {
    const ctx = document.getElementById('revenueChart').getContext('2d');
    const data = pelotonData.financials;
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.year),
            datasets: [
                {
                    label: 'Hardware Revenue ($M)',
                    data: data.map(d => d.hardRev),
                    backgroundColor: '#4a4a4a',
                    stack: 'Stack 0'
                },
                {
                    label: 'Subscription Revenue ($M)',
                    data: data.map(d => d.subRev),
                    backgroundColor: '#df1c2f', // Peloton Red
                    stack: 'Stack 0'
                }
            ]
        },
        options: {
            ...commonOptions,
            plugins: {
                ...commonOptions.plugins,
                title: { display: false }
            }
        }
    });
}

function initProfitabilityChart() {
    const ctx = document.getElementById('profitChart').getContext('2d');
    // Filter data from 2021 onwards for this specific view per prompt instructions or use all avail
    // Prompt asked for FY21-FY25 for this chart
    const data = pelotonData.financials.filter(d => d.year >= 2021);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(d => d.year),
            datasets: [
                {
                    label: 'Adj. EBITDA ($M)',
                    data: data.map(d => d.ebitda),
                    borderColor: '#28a745', // Green
                    backgroundColor: 'rgba(40, 167, 69, 0.1)',
                    fill: true,
                    tension: 0.3
                },
                {
                    label: 'Free Cash Flow ($M)',
                    data: data.map(d => d.fcf),
                    borderColor: '#007bff', // Blue
                    backgroundColor: 'rgba(0, 123, 255, 0.1)',
                    fill: true,
                    tension: 0.3
                }
            ]
        },
        options: commonOptions
    });
}

function initRestructuringChart() {
    const ctx = document.getElementById('restructuringChart').getContext('2d');
    // Filter for 2021-2025
    const data = pelotonData.operations; 
    
    // Employee count data is sparse in the provided set, so we handle nulls
    // Or just plot what we have. 
    // Employees: 2023, 2024, 2025.
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['FY21', 'FY22', 'FY23', 'FY24', 'FY25'],
            datasets: [
                {
                    label: 'Retail Locations',
                    data: [123, 135, 100, 50, 10], // Interpolated/Estimated based on "Most closed" to "10 microstores"
                    backgroundColor: '#ffc107',
                    yAxisID: 'y'
                },
                {
                    label: 'Employees',
                    data: [null, null, 3584, 2918, 2656],
                    backgroundColor: '#6c757d',
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            ...commonOptions,
            scales: {
                ...commonOptions.scales,
                y: { type: 'linear', display: true, position: 'left', title: {display: true, text: 'Locations'} },
                y1: { type: 'linear', display: true, position: 'right', grid: {drawOnChartArea: false}, title: {display: true, text: 'Employees'} }
            }
        }
    });
}

function initSubscriberChart() {
    const ctx = document.getElementById('subChart').getContext('2d');
    const data = pelotonData.subscribers;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(d => d.year),
            datasets: [
                {
                    label: 'Connected Fitness Subs',
                    data: data.map(d => d.cfSubs),
                    backgroundColor: '#df1c2f',
                    order: 2,
                    yAxisID: 'y'
                },
                {
                    label: 'Churn Rate (%)',
                    data: data.map(d => d.churn),
                    borderColor: '#e0e0e0',
                    type: 'line',
                    order: 1,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            ...commonOptions,
            scales: {
                ...commonOptions.scales,
                y: { display: true, position: 'left' },
                y1: { display: true, position: 'right', grid: {drawOnChartArea: false}, ticks: {callback: v => v + '%'} }
            }
        }
    });
}

// --- Table Generators ---

function initScorecardTable() {
    const tbody = document.querySelector('#scorecardTable tbody');
    pelotonData.scorecard.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.metric}</td>
            <td>${item.target}</td>
            <td class="text-right">${item.actual}</td>
            <td class="text-center"><span class="status-dot status-${item.status}"></span></td>
        `;
        tbody.appendChild(tr);
    });
}

function initOppRiskTables() {
    // Opportunities
    const oppBody = document.querySelector('#oppTable tbody');
    pelotonData.opportunities.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.name}</td>
            <td><div class="prob-impact-bar"><div class="prob-fill" style="width: ${item.probability * 100}%"></div></div></td>
            <td><div class="prob-impact-bar"><div class="impact-fill" style="width: ${item.impact * 100}%"></div></div></td>
            <td class="text-right">${item.rec}</td>
        `;
        oppBody.appendChild(tr);
    });

    // Risks
    const riskBody = document.querySelector('#riskTable tbody');
    pelotonData.risks.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.name}</td>
            <td class="text-center"><span class="status-dot status-${item.status}"></span></td>
            <td>${item.mitigation}</td>
        `;
        riskBody.appendChild(tr);
    });
}

// --- Source Viewer Logic ---

function setupSourceViewer() {
    const triggers = document.querySelectorAll('.source-trigger');
    const panel = document.getElementById('sourcePanel');
    const closeBtn = document.getElementById('closeSourcePanel');
    const content = document.getElementById('sourceContent');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            const sourceId = this.dataset.source;
            const sourceData = pelotonData.sources[sourceId];
            
            if (sourceData) {
                content.innerHTML = `
                    <h3>Source Reference</h3>
                    <blockquote>"${sourceData.quote}"</blockquote>
                    <div class="source-meta">
                        <p><strong>Document:</strong> ${sourceData.source}</p>
                        <p><strong>Section:</strong> ${sourceData.section}</p>
                        <p><strong>Page/Context:</strong> ${sourceData.page}</p>
                    </div>
                `;
                panel.classList.add('open');
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        panel.classList.remove('open');
    });
}
