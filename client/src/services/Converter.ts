type YYYYMMDD = {
    (time: number): string
    (time: string): number
}
export default class Converter {
    private static readonly Separator = '-'

    private static Alignment(number: number): string {
        return number < 9 ? '0' + number : number.toString()
    }

    public static YYYYMMDDHHMM = (time: number): string => {
        const mainDate = new Date(time)
    
        const year = mainDate.getFullYear()
        const month = mainDate.getMonth() + 1
        const date = mainDate.getDate()
    
        const hours = mainDate.getHours()
        const minutes = mainDate.getMinutes()
    
        return `${year}.${this.Alignment(month)}.${this.Alignment(date)}, ${this.Alignment(hours)}:${this.Alignment(minutes)}`
    }

    public static YYYYMMDD: YYYYMMDD = (time): any => {
        if (typeof time === 'number') {
            const mainDate = new Date(time)
        
            const year = mainDate.getFullYear()
            const month = mainDate.getMonth() + 1
            const date = mainDate.getDate()
    
            return year + this.Separator + this.Alignment(month) + this.Separator + this.Alignment(date)
        }

        const [year, month, date] = time.split(this.Separator).map(Number)
        const mainDate = new Date(year, month - 1, date)

        return mainDate.getTime()
    }
}