pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = "test"
        NETLIFY_AUTH_TOKEN = credentials('test-token')
    }

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
                    test -f dist/index.html
                '''
            }
        }

        stage("Deploy") {
            agent {
                docker {
                    image: 'node:18-alphine'
                    reuseNode true
                }
            }

            steps {
                sh '''
                    npm install netlify-cli -g
                    netlify --version
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
