export function formatScore(score: number): string {
    if (score >= 1000000) return (Math.round(score / 1000) / 1000) + "m"
    if (score >= 1000) return (score / 1000) + "k"
    return score + ""
}