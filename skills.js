new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Python", "Java", "C#", "C++", "HTML/CSS/JS"],
      datasets: [
        {
          label: "Languages",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [100,90,90,80,70]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
  });