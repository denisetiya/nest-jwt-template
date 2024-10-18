import { Controller, UseGuards, Get } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('products')
export class ProductsController {

    @UseGuards(JwtAuthGuard)
    @Get()
    getHello() {
        return 'Hello World!';
    }
}
