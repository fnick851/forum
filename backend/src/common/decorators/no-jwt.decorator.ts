import { SetMetadata } from '@nestjs/common'

export const NO_JWT_KEY = 'isPublic'
export const NoJWT = () => SetMetadata(NO_JWT_KEY, true)
