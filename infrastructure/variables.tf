variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Name of the project"
  type        = string
  default     = "shopsmart"
}

variable "environment" {
  description = "Environment name"
  type        = string
  default     = "prod"
}

variable "container_port" {
  description = "Port exposed by the container"
  type        = number
  default     = 5001
}

variable "app_count" {
  description = "Number of ECS tasks to run"
  type        = number
  default     = 2
}

variable "fargate_cpu" {
  description = "Fargate instance CPU units"
  type        = string
  default     = "256"
}

variable "fargate_memory" {
  description = "Fargate instance memory"
  type        = string
  default     = "512"
}

variable "execution_role_name" {
  description = "Name of existing IAM role for ECS task execution"
  type        = string
  default     = "LabRole"
}

variable "task_role_name" {
  description = "Name of existing IAM role for ECS tasks"
  type        = string
  default     = "LabRole"
}
