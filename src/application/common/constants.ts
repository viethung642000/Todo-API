export const ERROR_MESSAGES = {
  TASK_NAME_REQUIRED: "Task name is required",
  TASK_NAME_STRING: "Task name must be a string",
  TASK_NAME_MAX_LENGTH: "Task name cannot exceed 80 characters",
  START_DATE_INVALID: "Start date must be a valid date (YYYY-MM-DD)",
  END_DATE_INVALID: "End date must be a valid date (YYYY-MM-DD)",
  END_DATE_REQUIRES_START_DATE: "End date requires a start date",
  INTERNAL_SERVER_ERROR: "Internal server error",
};

export const SUCCESS_MESSAGES = {
  TASK_CREATED: "Task created successfully",
  TASK_UPDATED: "Task updated successfully",
  TASK_DELETED: "Task deleted successfully",
};

export const HTTP_STATUS_CODES = {
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
  CREATED: 201,
  OK: 200,
  NO_CONTENT: 204,
};
