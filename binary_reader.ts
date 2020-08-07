export default class BinaryReader {
  dataView: DataView = new DataView(
    this.buffer.buffer,
    this.buffer.byteOffset,
    this.buffer.byteLength,
  );
  position: number = 0;

  constructor(public buffer: Uint8Array) {}

  readBytes(size: number): Uint8Array {
    if (size === 0) {
      return new Uint8Array(0);
    }

    const buffer: Uint8Array = new Uint8Array(size);
 
    for (let i: number = 0; i < size; i++) {
      buffer[i] = this.readUint8();
    }

    this.position += size;

    return buffer;
  }

  readInt8(): number {
    const data: number = this.dataView.getInt8(this.position);
    this.position += 1;
    return data;
  }

  readUint8(): number {
    const data: number = this.dataView.getUint8(this.position);
    this.position += 1;
    return data;
  }

  readInt16(littleEndian?: boolean): number {
    const data: number = this.dataView.getInt16(this.position, littleEndian);
    this.position += 2;
    return data;
  }

  readUint16(littleEndian?: boolean): number {
    const data: number = this.dataView.getUint16(this.position, littleEndian);
    this.position += 2;
    return data;
  }

  readInt32(littleEndian?: boolean): number {
    const data: number = this.dataView.getInt32(this.position, littleEndian);
    this.position += 4
    return data;
  }

  readUint32(littleEndian?: boolean): number {
    const data: number = this.dataView.getUint32(this.position, littleEndian);
    this.position += 4;
    return data;
  }

  readFloat32(littleEndian?: boolean): number {
    let data: number = this.dataView.getFloat32(this.position, littleEndian)
    this.position += 4;
    return data;
  }

  readFloat64(littleEndian?: boolean): number {
    let data: number = this.dataView.getFloat64(this.position, littleEndian)
    this.position += 8;
    return data;
  }

  readBigInt64(littleEndian?: boolean): bigint {
    let data: bigint = this.dataView.getBigInt64(this.position, littleEndian)
    this.position += 8;
    return data;
  }

  readBigUint64(littleEndian?: boolean): bigint {
    let data: bigint = this.dataView.getBigUint64(this.position, littleEndian)
    this.position += 8;
    return data;
  }
}
