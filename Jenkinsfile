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
    }
}
