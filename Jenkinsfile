pipeline {
    agent any

    environment {
        IMAGE_NAME = "cloud-app"
        CONTAINER_NAME = "cloud-app-container"
        APP_PORT = "3000"
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/GaneshNarale/cloud-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME:$BUILD_NUMBER .'
                sh 'docker tag $IMAGE_NAME:$BUILD_NUMBER $IMAGE_NAME:latest'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                    docker run -d \
                      --name $CONTAINER_NAME \
                      -p $APP_PORT:3000 \
                      --restart always \
                      $IMAGE_NAME:latest
                '''
            }
        }
    }

    post {
        success {
            echo 'Build and deployment successful'
        }
        failure {
            echo 'Pipeline failed'
        }
    }
}
