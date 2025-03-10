export interface WorldRecord {
    score: number // score
    formattedDuration?: string // hours:minutes:seconds - for ease of entry. i will auto convert them into seconds
    scorer: string // name of the scorer

}

export interface RecordData {
    [key: string]: {
        [key: string]: WorldRecord
    }
}