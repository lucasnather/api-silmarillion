import z from 'zod'

const envSchema = z.object({
    PORT: z.coerce.number().default(8080)
})

const _env = envSchema.safeParse(process.env)

const errorProcessEnvSchema = !_env.success

if(errorProcessEnvSchema) {
    console.error('Environment Variable Error')

    throw new Error('Environment Variable Error')
}

export const env = _env.data