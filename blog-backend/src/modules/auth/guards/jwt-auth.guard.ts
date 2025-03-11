import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core'; // ✅ Correct Import
import { IS_PUBLIC_KEY } from 'src/common/decorators/public.decorator';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Check if route is public
    const isPublic = this.reflector.get<boolean>(
      IS_PUBLIC_KEY,
      context.getHandler(),
    );
    if (isPublic) {
      return true; // Allow access without authentication
    }

    // Apply regular authentication logic
    const request = context.switchToHttp().getRequest();
    return request.user ? true : false;
  }
}
