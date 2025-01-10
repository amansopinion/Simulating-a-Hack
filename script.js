const terminal = document.getElementById("terminal");
const commands = [
  "Initializing breach protocol...",
  "Bypassing firewall...",
  "Establishing backdoor connection...",
  "Accessing root privileges...",
  "Accessing /etc/passwd...",
  "Decrypting sensitive files...",
  "File retrieved: confidential_plans.pdf...",
  "Uploading ransomware payload...",
  "Locking target system...",
  "User: Administrator...",
  "Password: cannotbehacked007!...",
  "IP Address: 192.168.1.101...",
  "Deleting files...",
  "Hack complete...",
  "System fully controlled...",
  "Welcome to your new overlord. Call me AMANSOPINION...",
  "Exiting...",
];

function typeCommand(command, speed) {
  return new Promise((resolve) => {
    let index = 0;
    const interval = setInterval(() => {
      terminal.textContent += command[index];
      index++;
      if (index === command.length) {
        clearInterval(interval);
        terminal.textContent += "\n";
        resolve();
      }
    }, speed);
  });
}

async function runCommands() {
  for (let command of commands) {
    await typeCommand("> " + command, 50);
    if (command === "Bypassing firewall..." && "Uploading ransomware payload...") {
      createProgressBar();
      await simulateProgress();
    }
  }
}

function createProgressBar() {
  const progressBar = document.createElement("div");
  progressBar.className = "progress-bar";

  const fill = document.createElement("div");
  fill.className = "progress-bar-fill"

  progressBar.appendChild(fill);
  terminal.appendChild(progressBar);
}

function simulateProgress() {
    return new Promise((resolve) => {
        const fill = document.querySelector(".progress-bar-fill");
        let width = 0;
        const interval = setInterval(() => {
            width += 5;
            fill.style.width = width + "%";
            if (width >= 100) {
                clearInterval(interval);
                resolve();
            }
        }, 100);
        });
    }
    // Run the simulation
    runCommands();
