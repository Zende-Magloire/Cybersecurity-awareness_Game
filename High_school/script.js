// Define an array of challenges
const challenges = [
    {
      id: 1,
      topic: "Network Security",
      description: "You are tasked with securing a company's network infrastructure. Which of the following actions should you prioritize?",
      correctChoice: 2,
      choices: [
        "Implementing a new firewall",
        "Conducting a network vulnerability assessment",
        "Upgrading server hardware"
      ]
    },
    {
      id: 2,
      topic: "Encryption",
      description: "A company wants to protect its sensitive data in transit. Which encryption protocol should be used?",
      correctChoice: 3,
      choices: [
        "MD5",
        "SHA-1",
        "AES-256"
      ]
    },
    {
      id: 3,
      topic: "Secure Coding Practices",
      description: "You are reviewing the security of a web application. Which of the following is a common vulnerability that you should look for?",
      correctChoice: 1,
      choices: [
        "SQL injection",
        "Cross-site scripting (XSS)",
        "Buffer overflow"
      ]
    },
    {
      id: 4,
      topic: "Incident Response",
      description: "A data breach has occurred in your organization. What is the first step in the incident response process?",
      correctChoice: 3,
      choices: [
        "Notifying affected individuals",
        "Contacting law enforcement",
        "Containing the breach"
      ]
    },
    // Add more challenges here...
    {
      id: 5,
      topic: "Phishing",
      description: "Employees are receiving suspicious emails asking for sensitive information. What should you advise them to do?",
      correctChoice: 2,
      choices: [
        "Forward the email to their personal email accounts",
        "Report the email to IT security",
        "Respond to the email with the requested information"
      ]
    },
    {
      id: 6,
      topic: "Access Control",
      description: "A new employee needs access to sensitive company data. What is the best practice for granting access?",
      correctChoice: 1,
      choices: [
        "Grant the minimum permissions necessary for the employee's role",
        "Give full access to all data",
        "Require the employee to request access from the CEO"
      ]
    },
    {
      id: 7,
      topic: "Social Engineering",
      description: "An attacker is trying to gain access to a secure facility by impersonating a delivery person. What is this type of attack called?",
      correctChoice: 2,
      choices: [
        "Phishing",
        "Tailgating",
        "Shoulder surfing"
      ]
    },
    {
      id: 8,
      topic: "Data Loss Prevention",
      description: "How can companies prevent accidental data loss?",
      correctChoice: 3,
      choices: [
        "Allow employees to use personal USB drives",
        "Disable encryption on company devices",
        "Implement data loss prevention software"
      ]
    },
    {
      id: 9,
      topic: "Mobile Device Security",
      description: "What is a common security measure for securing mobile devices?",
      correctChoice: 1,
      choices: [
        "Enabling device encryption",
        "Disabling all security features",
        "Rooting or jailbreaking the device"
      ]
    },
    {
      id: 10,
      topic: "Firewalls",
      description: "Which of the following is a function of a firewall?",
      correctChoice: 2,
      choices: [
        "Creating secure passwords",
        "Filtering incoming network traffic",
        "Scanning for malware"
      ]
    },
    // Add more challenges here...
  ];
  
  let currentChallengeIndex = -1;
let score = 0;
let totalQuestions = 10;

function getRandomChallenge() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * challenges.length);
  } while (randomIndex === currentChallengeIndex);
  currentChallengeIndex = randomIndex;
  return challenges[randomIndex];
}

function displayChallenge(challenge) {
  document.getElementById('challenge-topic').innerText = challenge.topic;
  document.getElementById('challenge-description').innerText = challenge.description;
  const choicesSelect = document.getElementById('choices');
  choicesSelect.innerHTML = '<option>Select...</option>';
  challenge.choices.forEach((choice, index) => {
    const option = document.createElement('option');
    option.value = index + 1;
    option.text = choice;
    choicesSelect.appendChild(option);
  });
}

function checkAnswer(selectedChoice) {
  const challenge = challenges[currentChallengeIndex];
  if (selectedChoice === challenge.correctChoice) {
    score++;
    document.getElementById('result').innerText = "Correct! Your score is: " + score;
  } else {
    document.getElementById('result').innerText = "Incorrect. Your score is: " + score;
  }

  totalQuestions--;
  if (totalQuestions > 0) {
    const nextChallenge = getRandomChallenge();
    displayChallenge(nextChallenge);
  } else {
    document.getElementById('game-over').innerText = "Game Over! Final Score: " + score;
    document.getElementById('replay-btn').style.display = 'block';
  }
}

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const selectedChoice = parseInt(document.getElementById('choices').value);
  checkAnswer(selectedChoice);
});

document.getElementById('replay-btn').addEventListener('click', function() {
  totalQuestions = 10;
  score = 0;
  document.getElementById('game-over').innerText = "";
  document.getElementById('replay-btn').style.display = 'none';
  const firstChallenge = getRandomChallenge();
  displayChallenge(firstChallenge);
});

// Start the game
const firstChallenge = getRandomChallenge();
displayChallenge(firstChallenge);