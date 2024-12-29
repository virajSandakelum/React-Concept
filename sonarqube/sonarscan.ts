const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "sqp_1f07ef62ec5e4f711bdffc1234e6d5eb44cc722a",
        options: {
            'sonar.projectName': 'fintech-hub-chatbot-frontend',
            'sonar.projectDescription': 'code checker for chatbot',
            'sonar.projectKey': 'fintech-hub-chatbot-frontend',
            'sonar.projectVersion': '0.0.4',
            'sonar.exclusions': '**/node_modules/**',
            'sonar.sourceEncoding': 'UTF-8',
            'sonar.login': 'sqp_1f07ef62ec5e4f711bdffc1234e6d5eb44cc722a',
        }
    },
    () => process.exit()
);

// run the sonarQube.
// run the following commands.

// step - 1 => "docker compose up"
// step - 2 => "node ./sonarqube/sonarscan.js"

