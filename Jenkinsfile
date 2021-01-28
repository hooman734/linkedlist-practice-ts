pipeline {
    agent node 
    stages {
        stage('Initiate') { 
            steps {
                npm install
            }
        }
        stage('Test') { 
            steps {
                npm run test 
            }
        }
    }
}
