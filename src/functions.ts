export const range = (
    start: number,
    repeat: number,
    step: number = 1,
    transform: (value: number) => string = (value) => value.toString(),
    dirty: boolean = false
) => {
    const values: { name: string, value: string }[] = [];
    for (let i = 0; i < repeat; i++) {
        let value = start + (i * step);

        if (value % 1 !== 0) {
            const decimals = step.toString().split(".")[1]?.length || 0;

            value = parseFloat(value.toFixed(decimals));
        }

        values.push({
            name: dirty ? transform(value) : String(value),
            value: transform(value)
        });
    }
    return values;
};