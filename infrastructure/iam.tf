data "aws_iam_role" "ecs_task_execution" {
  name = var.execution_role_name
}

data "aws_iam_role" "ecs_task" {
  name = var.task_role_name
}
