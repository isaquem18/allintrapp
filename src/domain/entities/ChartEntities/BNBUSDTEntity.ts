type BNBUSDTEntityProps = any[];

export function BNBUSDTEntity(data: BNBUSDTEntityProps) {
  return Object.freeze({
    x: new Date(data[0]), // Open time
    y: parseFloat(data[4]), // Close price
  });
}

export type BNBUSDTEntity = ReturnType<typeof BNBUSDTEntity>;
