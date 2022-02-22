import { DocumentBuilder } from "@nestjs/swagger";

export const config = new DocumentBuilder()
    .setTitle('Shop API')
    .setDescription('The shop API description')
    .setVersion('1.0')
    .build()