import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    return this.prisma.order.create({
      data: createOrderDto,
    });
  }

  async findAll() {
    return this.prisma.order.findMany();
  }

  async findOne(id: number) {
    return this.prisma.order.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.prisma.order.update({
      where: { id },
      data: updateOrderDto,
    });
  }

  async remove(id: number) {
    return this.prisma.order.delete({
      where: { id },
    });
  }

  async processPayment(orderId: number) {
    // Implement payment processing logic here
    // This is a placeholder implementation
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
    });

    if (!order) {
      throw new Error('Order not found');
    }

    // Simulate payment processing
    const paymentSuccessful = true;

    if (paymentSuccessful) {
      return this.prisma.order.update({
        where: { id: orderId },
        data: { status: 'PAID' },
      });
    } else {
      throw new Error('Payment failed');
    }
  }
}
