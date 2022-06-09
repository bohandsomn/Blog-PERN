class Pagination {
    private static readonly STEP = 10

    public static readonly getChank = <T>(sequence: T[]) => {
        const chank: T[][] = []

        for (let index = 0; index < sequence.length; index += this.STEP) {
            const start = index 
            const end = start + this.STEP 

            chank.push(sequence.slice(start, end))
        }

        return chank
    }
}

export default Pagination
