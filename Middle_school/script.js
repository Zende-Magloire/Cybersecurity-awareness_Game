const questions = {
  passwords: [
    {
      question: "What is a strong password?",
      options: ["123456", "Password123", "P@ssw0rd!", "mypassword"],
      answer: "P@ssw0rd!",
    },
    {
      question:
        "Why is it important to use different passwords for different accounts?",
      options: [
        "To confuse hackers",
        "To make it easier to remember",
        "To prevent all accounts from being compromised if one password is stolen",
        "To increase security for each account",
      ],
      answer:
        "To prevent all accounts from being compromised if one password is stolen",
    },
    {
      question: "Which of the following is NOT a good password practice?",
      options: [
        "Using a combination of letters, numbers, and special characters",
        "Using the same password for multiple accounts",
        "Changing passwords regularly",
        "Avoiding common words or phrases",
      ],
      answer: "Using the same password for multiple accounts",
    },
    {
      question:
        "What should you do if you suspect someone knows your password?",
      options: [
        "Wait and see if anything happens",
        "Immediately change your password",
        "Ignore it and hope for the best",
        "Tell your friends about it",
      ],
      answer: "Immediately change your password",
    },
  ],
  socialEngineering: [
    {
      question: "What is a common social engineering tactic?",
      options: [
        "Sending malicious links in emails",
        "Updating software regularly",
        "Using strong passwords",
        "None of the above",
      ],
      answer: "Sending malicious links in emails",
    },
    {
      question: "What is pretexting?",
      options: [
        "Creating a false scenario to obtain sensitive information",
        "Updating software to the latest version",
        "Sharing personal information on social media",
        "Using encryption to protect data",
      ],
      answer: "Creating a false scenario to obtain sensitive information",
    },
    {
      question:
        "What should you do if someone you don't know asks for your personal information online?",
      options: [
        "Give them your information",
        "Ask for their information first",
        "Ignore the request",
        "Report and block the person",
      ],
      answer: "Report and block the person",
    },
    {
      question:
        "Why is it important to verify the identity of someone asking for your personal information?",
      options: [
        "To waste their time",
        "To make sure they're not a robot",
        "To protect yourself from scams",
        "To make friends",
      ],
      answer: "To protect yourself from scams",
    },
  ],
  malware: [
    {
      question: "What is malware?",
      options: [
        "A type of computer hardware",
        "A software designed to harm your computer",
        "A tool used by hackers to make your computer faster",
        "A program that fixes computer bugs",
      ],
      answer: "A software designed to harm your computer",
    },
    {
      question: "How can malware infect your computer?",
      options: [
        "By clicking on suspicious links",
        "By turning off your computer",
        "By updating your antivirus software",
        "By restarting your computer",
      ],
      answer: "By clicking on suspicious links",
    },
    {
      question: "What should you do if you think your computer has malware?",
      options: [
        "Buy a new computer",
        "Ignore it and hope for the best",
        "Run a full antivirus scan",
        "Tell your friends about it",
      ],
      answer: "Run a full antivirus scan",
    },
    {
      question:
        "Why is it important to keep your antivirus software up to date?",
      options: [
        "To make your computer run faster",
        "To keep your computer safe from malware",
        "To improve your computer's performance",
        "To impress your friends",
      ],
      answer: "To keep your computer safe from malware",
    },
  ],
  phishing: [
    {
      question: "What is phishing?",
      options: [
        "Fishing for compliments",
        "A type of malware",
        "A scam to steal your personal information",
        "A type of computer bug",
      ],
      answer: "A scam to steal your personal information",
    },
    {
      question: "How can you recognize a phishing email?",
      options: [
        "It's from a friend",
        "It asks for your personal information",
        "It's written in all capital letters",
        "It's sent from a legitimate company",
      ],
      answer: "It asks for your personal information",
    },
    {
      question: "What should you do if you receive a phishing email?",
      options: [
        "Reply with your personal information",
        "Click on the links in the email",
        "Forward it to your friends",
        "Delete it and report it as phishing",
      ],
      answer: "Delete it and report it as phishing",
    },
    {
      question:
        "Why is it important to be cautious when clicking on links in emails?",
      options: [
        "To avoid wasting time",
        "To make sure the links work",
        "To protect yourself from phishing scams",
        "To show off your computer skills",
      ],
      answer: "To protect yourself from phishing scams",
    },
  ],
  onlinePrivacy: [
    {
      question: "What is online privacy?",
      options: [
        "Sharing all your personal information online",
        "Keeping your personal information private and secure",
        "Making friends online",
        "Using the internet without any security measures",
      ],
      answer: "Keeping your personal information private and secure",
    },
    {
      question: "Why is it important to protect your online privacy?",
      options: [
        "To make more friends online",
        "To keep your personal information safe from hackers",
        "To share more personal information online",
        "To improve your online experience",
      ],
      answer: "To keep your personal information safe from hackers",
    },
    {
      question: "What are some ways to protect your online privacy?",
      options: [
        "Share your passwords with friends",
        "Use public Wi-Fi for online banking",
        "Use strong and unique passwords",
        "Share your personal information on social media",
      ],
      answer: "Use strong and unique passwords",
    },
    {
      question:
        "What should you do if you accidentally share personal information online?",
      options: [
        "Ignore it and hope for the best",
        "Tell your friends about it",
        "Delete the information and adjust your privacy settings",
        "Share more personal information to distract from the mistake",
      ],
      answer: "Delete the information and adjust your privacy settings",
    },
  ],
  secureWebBrowsing: [
    {
      question: "What is secure web browsing?",
      options: [
        "Browsing the web without any security measures",
        "Using a secure browser",
        "Making sure websites are secure before entering personal information",
        "Downloading files from unknown sources",
      ],
      answer:
        "Making sure websites are secure before entering personal information",
    },
    {
      question: "How can you tell if a website is secure?",
      options: [
        "It has a lot of ads",
        "It asks for your personal information",
        "It has a padlock icon in the address bar",
        "It doesn't have an SSL certificate",
      ],
      answer: "It has a padlock icon in the address bar",
    },
    {
      question:
        "What should you do if you encounter a website that asks for personal information but doesn't seem secure?",
      options: [
        "Enter your personal information anyway",
        "Ignore the warning signs and proceed",
        "Close the website and report it",
        "Ask your friends for advice",
      ],
      answer: "Close the website and report it",
    },
    {
      question:
        "Why is it important to use secure websites for online transactions?",
      options: [
        "To waste your time",
        "To protect your personal and financial information",
        "To make the website more popular",
        "To impress your friends",
      ],
      answer: "To protect your personal and financial information",
    },
  ],
  softwareUpdates: [
    {
      question: "Why is it important to keep your software up to date?",
      options: [
        "To make your computer run slower",
        "To keep your computer safe from malware and security vulnerabilities",
        "To avoid getting new features",
        "To show off your computer skills",
      ],
      answer:
        "To keep your computer safe from malware and security vulnerabilities",
    },
    {
      question: "How often should you check for software updates?",
      options: [
        "Once a year",
        "Every few years",
        "Never",
        "Regularly and as soon as they are available",
      ],
      answer: "Regularly and as soon as they are available",
    },
    {
      question:
        "What should you do if you receive a notification for a software update?",
      options: [
        "Ignore it",
        "Install it immediately",
        "Wait for a few weeks before installing",
        "Ask your friends for advice",
      ],
      answer: "Install it immediately",
    },
    {
      question: "What can happen if you don't update your software regularly?",
      options: [
        "Nothing, it's fine to ignore updates",
        "Your computer will run faster",
        "Your computer may become vulnerable to security threats",
        "Your computer will stop working",
      ],
      answer: "Your computer may become vulnerable to security threats",
    },
  ],
  secureOnlineCommunication: [
    {
      question: "What is secure online communication?",
      options: [
        "Communicating online without any security measures",
        "Using encryption to protect your messages",
        "Sharing personal information online",
        "Ignoring online messages",
      ],
      answer: "Using encryption to protect your messages",
    },
    {
      question: "How can you ensure secure online communication?",
      options: [
        "Using strong and unique passwords",
        "Sharing your passwords with friends",
        "Using encryption software",
        "Posting your messages on social media",
      ],
      answer: "Using encryption software",
    },
    {
      question:
        "Why is it important to use encryption for online communication?",
      options: [
        "To make your messages easier to read",
        "To protect your messages from being intercepted",
        "To share your messages with more people",
        "To make your messages more interesting",
      ],
      answer: "To protect your messages from being intercepted",
    },
    {
      question:
        "What should you do if you receive a suspicious message online?",
      options: [
        "Reply with your personal information",
        "Share the message with your friends",
        "Ignore it and hope for the best",
        "Report and block the sender",
      ],
      answer: "Report and block the sender",
    },
  ],
  privacySettings: [
    {
      question: "What are privacy settings?",
      options: [
        "Settings that keep your personal information private",
        "Settings that share your personal information with everyone",
        "Settings that make your computer faster",
        "Settings that prevent you from using the internet",
      ],
      answer: "Settings that keep your personal information private",
    },
    {
      question:
        "Why is it important to review and adjust your privacy settings?",
      options: [
        "To make it easier for hackers to access your personal information",
        "To share your personal information with everyone",
        "To keep your personal information private and secure",
        "To improve your online experience",
      ],
      answer: "To keep your personal information private and secure",
    },
    {
      question: "What are some common privacy settings you can adjust?",
      options: [
        "Password settings",
        "Sharing settings",
        "Location settings",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question:
        "What should you do if you're not sure how to adjust your privacy settings?",
      options: [
        "Ignore it and hope for the best",
        "Share your personal information with everyone",
        "Ask for help from a trusted adult",
        "Delete your account",
      ],
      answer: "Ask for help from a trusted adult",
    },
  ],
};

let currentQuestionIndex = -1;
let correctAnswers = 0;

function getRandomQuestion() {
  let topicKeys = Object.keys(questions);
  let randomTopicIndex = Math.floor(Math.random() * topicKeys.length);
  let randomTopic = topicKeys[randomTopicIndex];
  let topicQuestions = questions[randomTopic];

  let randomQuestionIndex = Math.floor(Math.random() * topicQuestions.length);
  return topicQuestions[randomQuestionIndex];
}

function displayNextQuestion() {
  currentQuestionIndex++;
  const randomQuestion = getRandomQuestion();
  document.getElementById("question").innerText = randomQuestion.question; // Display the question
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  document.getElementById("feedback").innerText = ""; // Clear previous feedback message
  randomQuestion.options.forEach((option, index) => {
    const optionElement = document.createElement("button");
    optionElement.classList.add("btn", "btn-secondary", "mb-2", "d-block", "w-100");
    optionElement.innerText = option;
    optionElement.addEventListener("click", () => {
      // Check the answer and provide feedback
      if (option === randomQuestion.answer) {
        optionElement.classList.add("bg-success");
        correctAnswers++;
        // Move to the next question
        if (currentQuestionIndex < 9) {
          displayNextQuestion();
        } else {
          showResult();
        }
      } else {
        optionElement.classList.add("bg-danger");
        document.getElementById("feedback").innerText = "Try again!";
      }
    });
    optionsContainer.appendChild(optionElement);
  });

  // Update progress bar
  const progressBar = document.getElementById("progressBar");
  const progress = ((currentQuestionIndex + 1) / 10) * 100;
  progressBar.style.width = `${progress}%`;
}

function showResult() {
  document.getElementById("question").innerHTML = "<div class='congrats-message'>Congratulations! You completed the quiz and answered all questions correctly. You have a great understanding of cybersecurity!</div>";
  document.getElementById("options").innerHTML = "";
  document.getElementById("feedback").style.display = "none"; // Hide the feedback message
  document.querySelector(".progress").style.display = "none"; // Hide the progress bar
}

displayNextQuestion();