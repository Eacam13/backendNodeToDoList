"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const CreateTaskController_1 = require("./controllers/CreateTaskController");
const ListTasksController_1 = require("./controllers/ListTasksController");
const DeleteTaskController_1 = require("./controllers/DeleteTaskController");
const EditTaskController_1 = require("./controllers/EditTaskController");
function routes(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.post('/task', (request, reply) => {
            return new CreateTaskController_1.CreateTaskController().handle(request, reply);
        });
        fastify.get('/tasks', (request, reply) => {
            return new ListTasksController_1.ListTasksController().handle(request, reply);
        });
        fastify.delete('/task', (request, reply) => {
            return new DeleteTaskController_1.DeleteTaskController().handle(request, reply);
        });
        fastify.put('/task/:id', (request, reply) => {
            return new EditTaskController_1.EditTaskController().handle(request, reply);
        });
    });
}
exports.routes = routes;
