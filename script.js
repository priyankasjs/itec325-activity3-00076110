(function () {
  const btn = document.getElementById("demoBtn");
  const status = document.getElementById("status");

  btn.addEventListener("click", () => {
    const time = new Date().toLocaleTimeString();
    status.textContent = "Status: clicked at " + time;
    console.log("Button clicked at", time);
  });

  window.fakeApi = {
    ping(message) {
      return {
        ok: true,
        echo: message,
        timestamp: new Date().toISOString()
      };
    }
  };
})();
