pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
                
            }
            steps {
                sh '''
                    ls -la // then we can see what is inside the workplace before start and what is at the end
                    node --version
                    npm --version
                    npm ci // this is designed for CI/CD server(instead of npm i)
                    npm run build
                    ls -la
                '''
            }
        }
    }
}