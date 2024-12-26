pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine' // Use a lightweight Node.js 18 Docker image
                    reuseNode true // Reuse the workspace for the build
                }
            }
            steps {
                sh '''
                    ls -la 
                    node --version 
                    npm --version 
                    npm ci 
                    npm run build 
                    ls -la 
                '''
            }
        }

        stage("Test") {
            agent {
                docker {
                    image 'node:18-alpine'
                }
            }

            steps {
                echo 'Test stage'
                sh '''
                    test -f dist/index.html'
                '''
            }
        }
    }
}


// List all files and directories to check the workspace state before and after the build
// ls -la 

// Display the Node.js version to verify the environment
// node --version 

// Display the npm version to ensure compatibility
// npm --version 

// Install dependencies using npm ci, which is optimized for CI/CD
// npm ci 

// Build the project
// npm run build 
