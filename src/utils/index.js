

// 输出：2023-06-30
export function formatToDate(dateString) {
    if (dateString != null) {
        const year = dateString.substring(0, 4);
        const month = dateString.substring(4, 6);
        const day = dateString.substring(6, 8);
        return `${year}-${month}-${day}`;
    }
}

export function roundFixed(num, fixed) {//修改js四舍五入
    var pos = num.toString().indexOf('.'),
        decimal_places = num.toString().length - pos - 1,
        _int = num * Math.pow(10, decimal_places),
        divisor_1 = Math.pow(10, decimal_places - fixed),
        divisor_2 = Math.pow(10, fixed);
    return Math.round(_int / divisor_1) / divisor_2;
}