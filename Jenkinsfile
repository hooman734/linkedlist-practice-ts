pipeline {
    agent node 
    stages {
        stage('Initiate') { 
            steps {
                npm install
                echo "npm version = $(npm -v)"
            }
        }
        stage('Test') { 
            steps {
                npm run test 
            }
        }
    }
}
