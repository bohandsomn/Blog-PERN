class Pagination {
    private static readonly STEP = 10

    public static getNumberOfPages = <T>(data: T[]): number => {
        return Math.ceil(data.length / 10)
    }
}

export default Pagination
