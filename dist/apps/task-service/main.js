/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskServiceModule = void 0;
const common_1 = __webpack_require__(3);
const task_service_controller_1 = __webpack_require__(4);
const task_service_service_1 = __webpack_require__(5);
const config_1 = __webpack_require__(15);
const typeorm_1 = __webpack_require__(7);
const typeorm_config_1 = __webpack_require__(16);
const config_2 = __webpack_require__(17);
const microservices_1 = __webpack_require__(6);
const task_entity_1 = __webpack_require__(10);
let TaskServiceModule = class TaskServiceModule {
};
exports.TaskServiceModule = TaskServiceModule;
exports.TaskServiceModule = TaskServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([task_entity_1.Task]),
            microservices_1.ClientsModule.register([
                {
                    name: 'USER_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: 3002,
                    },
                },
            ]),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [config_2.default],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: typeorm_config_1.typeOrmConfig,
            }),
        ],
        controllers: [task_service_controller_1.TaskServiceController],
        providers: [task_service_service_1.TaskServiceService],
    })
], TaskServiceModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskServiceController = void 0;
const common_1 = __webpack_require__(3);
const task_service_service_1 = __webpack_require__(5);
const microservices_1 = __webpack_require__(6);
const task_dto_1 = __webpack_require__(12);
let TaskServiceController = class TaskServiceController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    create(createTaskDto) {
        return this.taskService.createTask(createTaskDto);
    }
    findAll() {
        return this.taskService.findAllTasks();
    }
    findAllByPage(data) {
        const { page, limit } = data;
        return this.taskService.findAllTasksByPage(page, limit);
    }
    findOne(id) {
        return this.taskService.findOneTask(id);
    }
    update(payload) {
        const { id, updateTaskDto } = payload;
        return this.taskService.updateTask(id, updateTaskDto);
    }
    remove(id) {
        return this.taskService.removeTask(id);
    }
};
exports.TaskServiceController = TaskServiceController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_task' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof task_dto_1.CreateTaskDto !== "undefined" && task_dto_1.CreateTaskDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], TaskServiceController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_tasks' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskServiceController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_tasks_by_page' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TaskServiceController.prototype, "findAllByPage", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_task' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TaskServiceController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_task' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TaskServiceController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'remove_task' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TaskServiceController.prototype, "remove", null);
exports.TaskServiceController = TaskServiceController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof task_service_service_1.TaskServiceService !== "undefined" && task_service_service_1.TaskServiceService) === "function" ? _a : Object])
], TaskServiceController);


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskServiceService = void 0;
const common_1 = __webpack_require__(3);
const microservices_1 = __webpack_require__(6);
const typeorm_1 = __webpack_require__(7);
const rxjs_1 = __webpack_require__(8);
const typeorm_2 = __webpack_require__(9);
const task_entity_1 = __webpack_require__(10);
let TaskServiceService = class TaskServiceService {
    constructor(taskRepository, userServiceClient) {
        this.taskRepository = taskRepository;
        this.userServiceClient = userServiceClient;
    }
    async createTask(createTaskDto) {
        try {
            const existUser = await (0, rxjs_1.lastValueFrom)(this.userServiceClient.send({ cmd: 'get_user' }, createTaskDto.userId));
            if (!existUser) {
                throw new microservices_1.RpcException({
                    statusCode: 404,
                    message: `El usuario con el id ${createTaskDto.userId} no existe.`,
                });
            }
            const newTask = await this.taskRepository.save(createTaskDto);
            return {
                task: newTask,
                userObject: existUser,
            };
        }
        catch (error) {
            console.log(error);
            throw new microservices_1.RpcException({
                statusCode: error.statusCode || 500,
                message: error.message || `Ocurrio un error al crear la tarea`,
            });
        }
    }
    findAllTasks() {
        return this.taskRepository.find();
    }
    async findAllTasksByPage(page, limit) {
        const [result, total] = await this.taskRepository.findAndCount({
            skip: (page - 1) * limit,
            take: limit,
        });
        return {
            data: result,
            total,
        };
    }
    async findOneTask(id) {
        const existingTask = await this.taskRepository.findOne({
            where: { id: id },
        });
        if (!existingTask) {
            throw new microservices_1.RpcException({
                statusCode: 404,
                message: 'La tarea no existe.',
            });
        }
        return existingTask;
    }
    async updateTask(id, updateTaskDto) {
        const existingTask = await this.taskRepository.findOne({
            where: { id: id },
        });
        if (!existingTask) {
            throw new microservices_1.RpcException({
                statusCode: 404,
                message: 'La tarea no existe.',
            });
        }
        this.taskRepository.merge(existingTask, updateTaskDto);
        await this.taskRepository.save(existingTask);
        return existingTask;
    }
    async removeTask(id) {
        const task = await this.taskRepository.findOne({ where: { id: id } });
        if (!task) {
            throw new microservices_1.RpcException({
                statusCode: 404,
                message: 'La tarea no existe.',
            });
        }
        return await this.taskRepository.delete(id);
    }
};
exports.TaskServiceService = TaskServiceService;
exports.TaskServiceService = TaskServiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __param(1, (0, common_1.Inject)('USER_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object])
], TaskServiceService);


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Task = void 0;
const typeorm_1 = __webpack_require__(9);
const task_enum_1 = __webpack_require__(11);
let Task = class Task {
};
exports.Task = Task;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Task.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Task.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Task.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: task_enum_1.TaskStatus,
    }),
    __metadata("design:type", typeof (_a = typeof task_enum_1.TaskStatus !== "undefined" && task_enum_1.TaskStatus) === "function" ? _a : Object)
], Task.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Task.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Task.prototype, "updated_at", void 0);
exports.Task = Task = __decorate([
    (0, typeorm_1.Entity)()
], Task);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskStatus = void 0;
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["PENDING"] = "Pendiente";
    TaskStatus["IN_PROGRESS"] = "En curso";
    TaskStatus["COMPLETED"] = "Completada";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ByPageOptionsDto = exports.UpdateTaskDto = exports.CreateTaskDto = void 0;
const mapped_types_1 = __webpack_require__(13);
const task_enum_1 = __webpack_require__(11);
const class_validator_1 = __webpack_require__(14);
class CreateTaskDto {
}
exports.CreateTaskDto = CreateTaskDto;
__decorate([
    (0, class_validator_1.IsInt)({ message: 'El userId debe de ser un valor entero' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El userId es obligatorio' }),
    __metadata("design:type", Number)
], CreateTaskDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTaskDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(task_enum_1.TaskStatus),
    __metadata("design:type", typeof (_a = typeof task_enum_1.TaskStatus !== "undefined" && task_enum_1.TaskStatus) === "function" ? _a : Object)
], CreateTaskDto.prototype, "status", void 0);
class UpdateTaskDto extends (0, mapped_types_1.PartialType)(CreateTaskDto) {
}
exports.UpdateTaskDto = UpdateTaskDto;
class ByPageOptionsDto {
    constructor() {
        this.page = 1;
        this.limit = 10;
    }
}
exports.ByPageOptionsDto = ByPageOptionsDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ByPageOptionsDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ByPageOptionsDto.prototype, "limit", void 0);


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 15 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.typeOrmConfig = typeOrmConfig;
const task_entity_1 = __webpack_require__(10);
async function typeOrmConfig() {
    return {
        type: 'mysql',
        host: process.env.TASK_DB_HOST,
        port: parseInt(process.env.TASK_DB_PORT),
        username: process.env.TASK_DB_USERNAME,
        password: process.env.TASK_DB_PASSWORD,
        database: process.env.TASK_DB_NAME,
        autoLoadEntities: true,
        logging: false,
        entities: [task_entity_1.Task],
        synchronize: true,
    };
}


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = () => ({
    TASK_DB_HOST: process.env.TASK_DB_HOST,
    TASK_DB_PORT: parseInt(process.env.TASK_DB_PORT),
    TASK_DB_USERNAME: process.env.TASK_DB_USERNAME,
    TASK_DB_PASSWORD: process.env.TASK_DB_PASSWORD,
    TASK_DB_NAME: process.env.TASK_DB_NAME,
});


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const task_service_module_1 = __webpack_require__(2);
const microservices_1 = __webpack_require__(6);
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(15);
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(task_service_module_1.TaskServiceModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            host: 'localhost',
            port: 3001,
        },
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        forbidUnknownValues: true,
        exceptionFactory: (errors) => {
            return new microservices_1.RpcException({
                statusCode: 400,
                message: 'Validacion de datos fallo',
                errors: errors.map((error) => ({
                    property: error.property,
                    constraints: error.constraints,
                })),
            });
        },
    }));
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('TASK_SERVICE_PORT') || 3001;
    console.log(`Microservice task-service is running on: tcp://localhost:${port}`);
    await app.listen();
}
bootstrap();

})();

/******/ })()
;