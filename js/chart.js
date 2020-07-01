new Chart(document.getElementById("myfirstchart1"),
    {
        "type": "bar", "data": {
            "labels": ["January", "February", "March", "April", "May", "June", "July"],
            "datasets": [{
                "label": "DR. X", "data": [65, 59, 90, 81, 56, 55, 40],
                "fill": true,
                "backgroundColor": "rgba(255, 99, 132, 0.5)",
                "borderColor": "rgb(255, 99, 132)",
                "pointBackgroundColor": "rgb(255, 99, 132)",
                "pointBorderColor": "#fff",
                "pointHoverBackgroundColor": "#fff",
                "pointHoverBorderColor": "rgb(255, 99, 132)"
            },

            {
                "label": "DR. Y",
                "data": [28, 48, 40, 19, 96, 27, 100],
                "fill": true,
                "backgroundColor": "rgba(54, 162, 235, 0.5)",
                "borderColor": "rgb(54, 162, 235)",
                "pointBackgroundColor": "rgb(54, 162, 235)",
                "pointBorderColor": "#fff",
                "pointHoverBackgroundColor": "#fff",
                "pointHoverBorderColor": "rgb(54, 162, 235)"
            }]
        },
        "options": { "elements": { "line": { "tension": 0, "borderWidth": 3 } } }
    });


new Chart(document.getElementById("myfirstchart2"),
    {
        "type": "line", "data": {
            "labels": ["January", "February", "March", "April", "May", "June", "July"],
            "datasets": [{
                "label": "2019", "data": [28, 48, 40, 19, 55, 27, 100],
                "fill": true,
                "backgroundColor": "rgba(255, 99, 132, 0.2)",
                "borderColor": "rgb(255, 99, 132)",
                "pointBackgroundColor": "rgb(255, 99, 132)",
                "pointBorderColor": "#fff",
                "pointHoverBackgroundColor": "#fff",
                "pointHoverBorderColor": "rgb(255, 99, 132)"
            },

            {
                "label": "2020",
                "data": [65, 59, 90, 81, 56, 95, 40],
                "fill": true,
                "backgroundColor": "rgba(54, 162, 235, 0.2)",
                "borderColor": "rgb(54, 162, 235)",
                "pointBackgroundColor": "rgb(54, 162, 235)",
                "pointBorderColor": "#fff",
                "pointHoverBackgroundColor": "#fff",
                "pointHoverBorderColor": "rgb(54, 162, 235)"
            }]
        },
        "options": { "elements": { "line": { "tension": 0, "borderWidth": 3 } } }
    });

new Chart(document.getElementById("myfirstchart3"),
    {
        "type": "polarArea", "data": {
            "labels": ["Cardiology", "Neurology", "Obstetrics and gynaecology"],
            "datasets": [{
                "label": "My First Dataset", "data": [300, 50, 100],
                "backgroundColor": ["rgb(255, 99, 132)",
                    "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
            }]
        }
    });

new Chart(document.getElementById("myfirstchart4"),
    {
        "type": "doughnut", "data": {
            "labels": ["Gynaecology", "Cardiology", "Neurology"],
            "datasets": [{
                "label": "My First Dataset", "data": [60, 50, 30],
                "backgroundColor": ["rgb(255, 99, 132)",
                    "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
            }]
        }
    });

new Chart(document.getElementById("myfirstchart5"),
    {
        "type": "radar", "data": {
            "labels": ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            "datasets": [{
                "label": "My First Dataset", "data": [65, 59, 90, 81, 56, 55, 40],
                "fill": true,
                "backgroundColor": "rgba(255, 99, 132, 0.2)",
                "borderColor": "rgb(255, 99, 132)",
                "pointBackgroundColor": "rgb(255, 99, 132)",
                "pointBorderColor": "#fff",
                "pointHoverBackgroundColor": "#fff",
                "pointHoverBorderColor": "rgb(255, 99, 132)"
            },

            {
                "label": "My Second Dataset",
                "data": [28, 48, 40, 19, 96, 27, 100],
                "fill": true,
                "backgroundColor": "rgba(54, 162, 235, 0.2)",
                "borderColor": "rgb(54, 162, 235)",
                "pointBackgroundColor": "rgb(54, 162, 235)",
                "pointBorderColor": "#fff",
                "pointHoverBackgroundColor": "#fff",
                "pointHoverBorderColor": "rgb(54, 162, 235)"
            },

            {
                "label": "My Third Dataset",
                "data": [15, 20, 30, 25, 50, 35, 40],
                "fill": true,
                "backgroundColor": "rgb(90, 40, 140, 0.2)",
                "borderColor": "rgb(54, 162, 235)",
                "pointBackgroundColor": "rgb(54, 162, 235)",
                "pointBorderColor": "#fff",
                "pointHoverBackgroundColor": "#fff",
                "pointHoverBorderColor": "rgb(54, 162, 235)"
            }]
        },
        "options": { "elements": { "line": { "tension": 0, "borderWidth": 3 } } }
    });

new Chart(document.getElementById("myfirstchart6"),
    {
        "type": "pie", "data": {
            "labels": ["Red", "Blue", "Yellow", "Blue", "Yellow", "Blue", "Yellow"],
            "datasets": [{
                "label": "My First Dataset", "data": [300, 50, 100, 50, 100, 50, 100, 50, 100, 50, 100],
                "backgroundColor": ["rgb(255, 99, 132)",
                    "rgb(54, 162, 235)", "rgb(255, 205, 86)", "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)", "rgb(255, 205, 86)", "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)", "rgb(255, 205, 86)", "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
            }]
        }
    });
