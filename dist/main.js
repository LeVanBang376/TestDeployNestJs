"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const fs = require("fs");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalPipes(new common_1.ValidationPipe());
    process.env.TZ = 'ETC/Universal';
    const options = new swagger_1.DocumentBuilder().setTitle('Title').setDescription('description').setVersion('1.0').build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    fs.writeFileSync('./swagger-spec.json', JSON.stringify(document));
    swagger_1.SwaggerModule.setup('/auth', app, document);
    await app.listen(3000);
}
exports.bootstrap = bootstrap;
bootstrap();
//# sourceMappingURL=main.js.map