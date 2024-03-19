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
    {
        id: 11,
        topic: "Data Breach Response",
        description: "Your company has experienced a data breach. What is the first step you should take?",
        correctChoice: 3,
        choices: [
          "Notify the media",
          "Ignore the breach and continue operations",
          "Contain the breach and assess the damage"
        ]
      },
      {
        id: 12,
        topic: "Cybersecurity Policy",
        description: "Your company is updating its cybersecurity policy. What should be included in the policy?",
        correctChoice: 1,
        choices: [
          "Regular security training for employees",
          "Sharing passwords with coworkers",
          "Using the same password for all accounts"
        ]
      },
      {
        id: 13,
        topic: "Malware Protection",
        description: "Your company's computers are being infected by malware. What is the best way to prevent malware infections?",
        correctChoice: 3,
        choices: [
          "Disable antivirus software",
          "Click on links in suspicious emails",
          "Regularly update antivirus software"
        ]
      },
      {
        id: 14,
        topic: "Password Security",
        description: "Your company requires employees to change their passwords regularly. What is a good practice for creating strong passwords?",
        correctChoice: 2,
        choices: [
          "Use the same password for multiple accounts",
          "Include a mix of letters, numbers, and symbols",
          "Write passwords down and keep them in a visible location"
        ]
      },
      {
        id: 15,
        topic: "Two-Factor Authentication",
        description: "Your company is implementing two-factor authentication. What is the purpose of two-factor authentication?",
        correctChoice: 1,
        choices: [
          "Adds an extra layer of security",
          "Decreases security by making it easier to access accounts",
          "Slows down productivity"
        ]
      },
      {
        id: 16,
        topic: "Phishing Awareness",
        description: "Employees are receiving emails that appear to be from a legitimate source but are actually phishing attempts. What should employees do to avoid falling for phishing scams?",
        correctChoice: 2,
        choices: [
          "Click on links in the email",
          "Verify the sender's email address",
          "Download attachments from the email"
        ]
      },
      {
        id: 17,
        topic: "Social Engineering",
        description: "An attacker is attempting to gain access to your company's network by pretending to be an employee. What is this type of attack called?",
        correctChoice: 3,
        choices: [
          "Phishing",
          "Malware",
          "Impersonation"
        ]
      },
      {
        id: 18,
        topic: "Firewall Configuration",
        description: "Your company is setting up a new firewall. What is the purpose of a firewall?",
        correctChoice: 2,
        choices: [
          "Creating strong passwords",
          "Filtering incoming and outgoing network traffic",
          "Regularly updating antivirus software"
        ]
      },
      {
        id: 19,
        topic: "Secure File Sharing",
        description: "Your company needs to share sensitive files with a partner organization. What is a secure way to share files?",
        correctChoice: 1,
        choices: [
          "Using a secure file sharing service",
          "Sending files via unencrypted email",
          "Posting files on a public website"
        ]
      },
      {
        id: 20,
        topic: "Employee Training",
        description: "Your company is conducting cybersecurity training for employees. What should be included in the training?",
        correctChoice: 3,
        choices: [
          "Sharing passwords with coworkers",
          "Ignoring suspicious emails",
          "Recognizing phishing attempts"
        ]
    },
    {
        id: 21,
        topic: "Security Awareness Training",
        description: "Your company is conducting a security awareness training session. What topics should be covered?",
        correctChoice: 2,
        choices: [
          "Sharing passwords with colleagues",
          "Identifying phishing emails",
          "Leaving computers unlocked when away from the desk"
        ]
      },
      {
        id: 22,
        topic: "Data Backup",
        description: "Your company needs to back up its data to prevent loss. What is the best way to back up data?",
        correctChoice: 3,
        choices: [
          "Back up data to a local drive only",
          "Back up data to a shared network drive",
          "Use cloud storage for data backup"
        ]
      },
      {
        id: 23,
        topic: "Mobile Device Security",
        description: "Employees use mobile devices for work. What security measures should be implemented on these devices?",
        correctChoice: 1,
        choices: [
          "Enable device encryption",
          "Disable automatic updates",
          "Root or jailbreak the device"
        ]
      },
      {
        id: 24,
        topic: "Patch Management",
        description: "Your company is updating its software to fix security vulnerabilities. What is the purpose of patch management?",
        correctChoice: 2,
        choices: [
          "Improve system performance",
          "Fix security vulnerabilities",
          "Increase network speed"
        ]
      },
      {
        id: 25,
        topic: "Physical Security",
        description: "Your company's servers are located in a data center. What physical security measures should be in place to protect the servers?",
        correctChoice: 3,
        choices: [
          "Use simple locks on server racks",
          "Allow unescorted access to the data center",
          "Implement biometric access controls"
        ]
      },
      {
        id: 26,
        topic: "Cloud Security",
        description: "Your company is migrating data to the cloud. What security considerations should be taken into account?",
        correctChoice: 1,
        choices: [
          "Encrypt data before uploading to the cloud",
          "Store data in plain text on the cloud",
          "Share cloud credentials with colleagues"
        ]
      },
      {
        id: 27,
        topic: "Internet of Things (IoT) Security",
        description: "Your company is deploying IoT devices in the workplace. What security measures should be implemented for these devices?",
        correctChoice: 2,
        choices: [
          "Disable security features on IoT devices",
          "Change default passwords on IoT devices",
          "Connect IoT devices to unsecured networks"
        ]
      },
      {
        id: 28,
        topic: "Social Media Security",
        description: "Employees use social media for work-related activities. What security practices should be followed when using social media?",
        correctChoice: 1,
        choices: [
          "Avoid sharing sensitive information on social media",
          "Share passwords on social media profiles",
          "Accept friend requests from unknown individuals"
        ]
      },
      {
        id: 29,
        topic: "Third-Party Risk Management",
        description: "Your company relies on third-party vendors for services. What security measures should be taken to manage third-party risks?",
        correctChoice: 3,
        choices: [
          "Limit security audits on third-party vendors",
          "Share sensitive information with third-party vendors",
          "Regularly assess third-party vendor security practices"
        ]
      },
      {
        id: 30,
        topic: "Security Incident Response Plan",
        description: "Your company is developing a security incident response plan. What should be included in the plan?",
        correctChoice: 2,
        choices: [
          "Ignore security incidents to avoid panic",
          "Establish roles and responsibilities for incident response",
          "Share incident details on public forums"
        ]
      }      
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
    if (totalQuestions === 0) {
      document.getElementById('game-over').innerText = "Game Over! Final Score: " + score;
      document.getElementById('replay-btn').style.display = 'block';
    } else {
      const nextChallenge = getRandomChallenge();
      displayChallenge(nextChallenge);
    }
  }
   
  
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
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

function getRandomChallenge() {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * challenges.length);
    } while (randomIndex === currentChallengeIndex);
    currentChallengeIndex = randomIndex;
    return challenges[randomIndex];
  }
  
const firstChallenge = getRandomChallenge();
displayChallenge(firstChallenge);