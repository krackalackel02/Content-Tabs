let textContent = {
    History:
      "Solar Roadways is an engineering project that originated in the early 2000s with the vision of revolutionizing transportation infrastructure. Conceived by Scott and Julie Brusaw, the project aimed to integrate solar panels into road surfaces, transforming them into sustainable energy sources. The idea gained traction as the couple envisioned a future where roads could generate clean and renewable energy while providing enhanced safety and functionality.",
    Vision:
      "The vision of Solar Roadways was to create a network of roads that could address energy and environmental challenges. By replacing traditional road surfaces with solar panels, the project sought to harness the vast surface area of roads for solar energy generation, reducing reliance on fossil fuels and combating climate change. Additionally, Solar Roadways aimed to incorporate advanced technologies to enhance road safety and provide real-time information to drivers.",
    Goals:
      "The primary goal of Solar Roadways was to demonstrate the feasibility and viability of integrating solar panels into road surfaces. Through research and development, the project aimed to design durable solar panels capable of withstanding vehicular weight, offering good traction, and efficiently converting sunlight into electricity. Furthermore, Solar Roadways sought to optimize energy production to not only power the road infrastructure but also nearby communities and electric vehicles, promoting sustainable energy usage."
  };
  
  let paraText = document.querySelector(".paragraph-text");
  let paraHeader = document.querySelector(".paragraph-header");
  
  let buttonBox = document.getElementsByClassName("buttons")[0];
  for (const tab in textContent) {
    let button = document.createElement("button");
    button.classList.add("btn");
    button.onclick = changeContent;
    button.innerText = tab;
    buttonBox.appendChild(button);
  }
  
  function changeContent(e) {
    let button = e.target;
    paraText.innerText = textContent[button.innerText];
    paraHeader.innerText = button.innerText;
  }
  