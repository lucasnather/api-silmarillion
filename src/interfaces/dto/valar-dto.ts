import { Valar } from "@prisma/client";

export type ValarDto = Omit<Valar, 'createdAt' | 'updatedAt' | 'deletedAt' >