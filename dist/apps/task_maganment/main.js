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
exports.AppModule = void 0;
const common_1 = __webpack_require__(3);
const app_controller_1 = __webpack_require__(4);
const app_service_1 = __webpack_require__(5);
const microservices_1 = __webpack_require__(6);
const task_controller_1 = __webpack_require__(7);
const user_controller_1 = __webpack_require__(13);
const config_1 = __webpack_require__(15);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            microservices_1.ClientsModule.register([
                {
                    name: 'TASK_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: 3001,
                    },
                },
                {
                    name: 'USER_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: 'localhost',
                        port: 3002,
                    },
                },
            ]),
        ],
        controllers: [app_controller_1.AppController, task_controller_1.TaskController, user_controller_1.UserController],
        providers: [app_service_1.AppService],
    })
], AppModule);


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(3);
const app_service_1 = __webpack_require__(5);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(3);
let AppService = class AppService {
    getHello() {
        return `Hello World!`;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 7 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskController = void 0;
const common_1 = __webpack_require__(3);
const app_service_1 = __webpack_require__(5);
const microservices_1 = __webpack_require__(6);
const rxjs_1 = __webpack_require__(8);
const task_dto_1 = __webpack_require__(9);
let TaskController = class TaskController {
    constructor(appService, taskServiceClient) {
        this.appService = appService;
        this.taskServiceClient = taskServiceClient;
    }
    getTasks() {
        return this.taskServiceClient.send({ cmd: 'get_tasks' }, {});
    }
    async createTask(createTaskDto) {
        return this.taskServiceClient
            .send({ cmd: 'create_task' }, createTaskDto)
            .pipe((0, rxjs_1.catchError)((err) => {
            const { statusCode, message, errors } = err;
            if (statusCode) {
                console.error('Error específico del microservicio:', err);
                throw new common_1.HttpException({
                    status: statusCode,
                    message: message || 'Error en la comunicación con el microservicio.',
                    error: errors || null,
                }, statusCode);
            }
            else {
                console.error('Error genérico:', err);
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Ocurrió un error inesperado.',
                    errors: err,
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }));
    }
    async updateTask(id, updateTaskDto) {
        const requestTask = {
            id,
            updateTaskDto: updateTaskDto,
        };
        return this.taskServiceClient
            .send({ cmd: 'update_task' }, requestTask)
            .pipe((0, rxjs_1.catchError)((err) => {
            const { statusCode, message, errors } = err;
            if (statusCode) {
                console.error('Error específico del microservicio:', err);
                throw new common_1.HttpException({
                    status: statusCode,
                    message: message || 'Error en la comunicación con el microservicio.',
                    error: errors || null,
                }, statusCode);
            }
            else {
                console.error('Error genérico:', err);
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Ocurrió un error inesperado.',
                    errors: err,
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }));
    }
    getAllTasks(query) {
        return this.taskServiceClient.send({ cmd: 'get_tasks_by_page' }, query);
    }
    getTaskById(id) {
        return this.taskServiceClient.send({ cmd: 'get_task' }, id).pipe((0, rxjs_1.catchError)((err) => {
            const { statusCode, message, errors } = err;
            if (err) {
                console.error('Error específico del microservicio:', err);
                throw new common_1.HttpException({
                    status: statusCode,
                    message: message || 'Error en la comunicación con el microservicio.',
                    error: errors,
                }, statusCode);
            }
            else {
                console.error('Error genérico:', err);
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Ocurrió un error inesperado.',
                    errors: err,
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }));
    }
    removeTeamById(id) {
        return this.taskServiceClient.send({ cmd: 'remove_task' }, { id });
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_c = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _c : Object)
], TaskController.prototype, "getTasks", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof task_dto_1.CreateTaskDto !== "undefined" && task_dto_1.CreateTaskDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], TaskController.prototype, "createTask", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_f = typeof task_dto_1.UpdateTaskDto !== "undefined" && task_dto_1.UpdateTaskDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], TaskController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Get)('paginated'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof task_dto_1.ByPageOptionsDto !== "undefined" && task_dto_1.ByPageOptionsDto) === "function" ? _h : Object]),
    __metadata("design:returntype", typeof (_j = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _j : Object)
], TaskController.prototype, "getAllTasks", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_k = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _k : Object)
], TaskController.prototype, "getTaskById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "removeTeamById", null);
exports.TaskController = TaskController = __decorate([
    (0, common_1.Controller)('task'),
    __param(1, (0, common_1.Inject)('TASK_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object])
], TaskController);


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),
/* 9 */
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
const mapped_types_1 = __webpack_require__(10);
const task_enum_1 = __webpack_require__(11);
const class_validator_1 = __webpack_require__(12);
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
/* 10 */
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

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
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 13 */
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const common_1 = __webpack_require__(3);
const microservices_1 = __webpack_require__(6);
const task_dto_1 = __webpack_require__(9);
const user_dto_1 = __webpack_require__(14);
const rxjs_1 = __webpack_require__(8);
let UserController = class UserController {
    constructor(userServiceClient) {
        this.userServiceClient = userServiceClient;
    }
    async createUser(createUserDto) {
        return this.userServiceClient
            .send({ cmd: 'create_user' }, createUserDto)
            .pipe((0, rxjs_1.catchError)((err) => {
            const { statusCode, message, errors } = err;
            if (err) {
                console.error('Error específico del microservicio:', err);
                throw new common_1.HttpException({
                    status: statusCode,
                    message: message || 'Error en la comunicación con el microservicio.',
                    error: errors || null,
                }, statusCode);
            }
            else {
                console.error('Error genérico:', err);
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Ocurrió un error inesperado.',
                    errors: err,
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }));
    }
    async updateUser(id, updateUserDto) {
        const requestUser = {
            id,
            updateUserDto: updateUserDto,
        };
        return this.userServiceClient
            .send({ cmd: 'update_user' }, requestUser)
            .pipe((0, rxjs_1.catchError)((err) => {
            const { statusCode, message, errors } = err;
            if (statusCode) {
                console.error('Error específico del microservicio:', err);
                throw new common_1.HttpException({
                    status: statusCode,
                    message: message || 'Error en la comunicación con el microservicio.',
                    error: errors || null,
                }, statusCode);
            }
            else {
                console.error('Error genérico:', err);
                throw new common_1.HttpException({
                    status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                    message: 'Ocurrió un error inesperado.',
                    errors: err,
                }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }));
    }
    getAllUsers(query) {
        return this.userServiceClient.send({ cmd: 'get_users_by_page' }, query);
    }
    getUsers() {
        return this.userServiceClient.send({ cmd: 'get_users' }, {});
    }
    getUserById(id) {
        return this.userServiceClient.send({ cmd: 'get_user' }, id);
    }
    removeTeamById(id) {
        return this.userServiceClient.send({ cmd: 'remove_user' }, { id });
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('user'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof user_dto_1.CreateUserDto !== "undefined" && user_dto_1.CreateUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Patch)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_d = typeof user_dto_1.UpdateUserDto !== "undefined" && user_dto_1.UpdateUserDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UserController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Get)('users'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof task_dto_1.ByPageOptionsDto !== "undefined" && task_dto_1.ByPageOptionsDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _g : Object)
], UserController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)('user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", typeof (_h = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _h : Object)
], UserController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_j = typeof rxjs_1.Observable !== "undefined" && rxjs_1.Observable) === "function" ? _j : Object)
], UserController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Delete)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "removeTeamById", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __param(0, (0, common_1.Inject)('USER_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], UserController);


/***/ }),
/* 14 */
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ByPageOptionsDto = exports.UpdateUserDto = exports.CreateUserDto = void 0;
const mapped_types_1 = __webpack_require__(10);
const class_validator_1 = __webpack_require__(12);
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser una cadena de texto' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "nombre", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El email es obligatorio' }),
    (0, class_validator_1.IsEmail)({}, { message: 'El email debe ser válido' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
class UpdateUserDto extends (0, mapped_types_1.PartialType)(CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;
__decorate([
    (0, class_validator_1.IsOptional)({ message: 'El email es obligatorio' }),
    (0, class_validator_1.IsBoolean)({ message: 'El valor is_enable debe ser un valor valido' }),
    __metadata("design:type", Boolean)
], UpdateUserDto.prototype, "is_enable", void 0);
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
/* 15 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

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
const app_module_1 = __webpack_require__(2);
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(15);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT_GETWAY') || 3000;
    await app.listen(port);
    app.useGlobalPipes(new common_1.ValidationPipe());
}
bootstrap();

})();

/******/ })()
;