
document.addEventListener("DOMContentLoaded", () => {
    const proPlan = document.querySelector(".pro-plan");
  
    // Add and remove the highlight effect repeatedly
    setInterval(() => {
      proPlan.classList.toggle("animate-highlight");
    }, 3000); // Every 3 seconds
  });
  