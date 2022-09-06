import { UseGuards } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthcredentialDto } from './dto/auth-credential.dto';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authcredentialDto: AuthcredentialDto,
  ): Promise<void> {
    return this.authService.signUp(authcredentialDto);
  }
  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authcredentialDto: AuthcredentialDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authcredentialDto);
  }
  @Post('/test')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log('user', user);
  }
}
