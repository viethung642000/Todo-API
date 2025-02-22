# Todo API Setup

## Cấu trúc thư mục

```
src/
├── application/             # Chứa các logic nghiệp vụ chính
│   ├── common/              # Các module dùng chung (response, exception, constants...)
│   │   ├── apiResponse.ts   # Định nghĩa cấu trúc phản hồi chung của API
│   │   ├── constants.ts     # Chứa các hằng số dùng trong toàn bộ ứng dụng
│   │   ├── validationException.ts  # Xử lý ngoại lệ validation
│   ├── dtos/                # Định nghĩa các Data Transfer Objects (DTOs) để validate dữ liệu request
│   │   ├── createTaskDto.ts  # DTO cho việc tạo Task
│   ├── repositories.interface/  # Khai báo interface cho các repository
│   │   ├── taskRepository.interface.ts  # Interface cho Task Repository
│   ├── usecases/            # Các trường hợp sử dụng (Use Cases) của ứng dụng
│   │   ├── createTaskUseCase.ts  # Xử lý tạo Task
│   │   ├── getTasksUseCase.ts   # Xử lý lấy danh sách Task
│
├── config/                  # Cấu hình ứng dụng (Swagger, môi trường, v.v.)
│   ├── swagger.ts           # Cấu hình tài liệu API Swagger
│
├── domain/                  # Lớp miền (Domain Layer)
│   ├── entities/            # Định nghĩa các entity (Task, User...)
│   │   ├── taskEntity.ts    # Định nghĩa entity Task
│
├── infrastructure/          # Lớp hạ tầng (Infrastructure Layer)
│   ├── database/            # Cấu hình kết nối database (TypeORM)
│   │   ├── dataSource.ts    # Cấu hình SQLite với TypeORM
│   ├── mappers/             # Sử dụng thư viện mapper để ánh xạ giữa DTO và entity
│   │   ├── taskMapper.ts    # Mapper cho Task
│   ├── repositories/        # Triển khai repository theo interface
│   │   ├── taskRepository.ts  # Cài đặt Task Repository
│
├── presentation/            # Lớp trình bày (Presentation Layer)
│   ├── controllers/         # Xử lý yêu cầu từ client và gọi use case phù hợp
│   │   ├── taskController.ts  # Controller cho Task
│   ├── routes/              # Định nghĩa các endpoint API
│   │   ├── taskRoutes.ts    # Router cho Task
│
├── tests/                   # Chứa các file kiểm thử bằng Jest & Supertest
│   ├── task.test.ts         # Kiểm thử API cho Task
│
├── app.ts                   # Cấu hình Express app
├── server.ts                # Điểm khởi chạy ứng dụng
├── package.json             # Khai báo các dependency và script
├── tsconfig.json            # Cấu hình TypeScript
├── Dockerfile               # Dockerfile để đóng gói ứng dụng
├── docker-compose.yml       # Cấu hình Docker Compose
└── .dockerignore            # Ignore các file không cần thiết khi build Docker
```

## Cài đặt

```sh
# Khởi tạo project
npm init
```

## Chạy ứng dụng

```sh
npm run build
npm start
```

## Kiểm thử API

```sh
npm test
```

## Sử dụng Docker

### Build và chạy container
```sh
docker-compose up --build
```

### Chạy kiểm thử trong Docker
```sh
docker-compose exec app npm test
```

Docker setup cho Jest & Supertest đã được cập nhật! Bạn có thể chạy `npm run test:docker` để kiểm tra API trong Docker.

