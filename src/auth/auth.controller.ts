import { UseGuards } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthcredentialDto } from './dto/auth-credential.dto';

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
  test(@Req() req) {}
}
