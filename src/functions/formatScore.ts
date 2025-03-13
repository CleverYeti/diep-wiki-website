export function formatScore(score: number): string {
    if (score >= 1000000) return (Math.round(score / 10000) / 100) + "m"
    if (score >= 1000) return (Math.round(score / 100) / 10) + "k"
    return score + ""
}