// types/google-trends-api.d.ts
declare module 'google-trends-api' {
  interface InterestOverTimeOptions {
    keyword: string | string[]
    geo?: string
    hl?: string
    startTime?: Date
    endTime?: Date
    timezone?: number
  }

  export function interestOverTime(options: InterestOverTimeOptions): Promise<string>
}
