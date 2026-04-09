function generatePattern() {
      let n = document.getElementById("pattern").value;
      let result = "";
      for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
          result += j;
        }
        result += "\n";
      }
      document.getElementById("output").textContent = result;
    }
