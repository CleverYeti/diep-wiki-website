export interface WorldRecord {
    score: number // score
    formattedDuration?: string // hours:minutes:seconds - for ease of entry. i will auto convert them into seconds
    scorer: string // name of the scorer
    proofImages?: Array<string>,
    proofVideo?: string,
    year?: number
}

export interface RecordData {
    [key: string]: {
        [key: string]: WorldRecord
    }
}