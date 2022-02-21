import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.schema';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    
    constructor(private readonly productService: ProductService) {}

    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
        try {
            return await this.productService.create(createProductDto);
        } catch (e) {
            console.log(createProductDto);
        }
    }

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }
}
