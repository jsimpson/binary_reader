export class BinaryReader {
  dataView: DataView = new DataView(
    this.buffer.buffer,
    this.buffer.byteOffset,
    this.buffer.byteLength,
  );
  #position = 0;

  constructor(private buffer: Uint8Array) {}

  /**
   * Returns the current position in the buffer.
   */
  get position(): number {
    return this.#position;
  }

  /**
   * Reads `size` unsigned 8-bit integers from the current position in the buffer.
   * @param size The number of bytes to read.
   */
  readBytes(size: number): Uint8Array {
    if (size === 0) {
      return new Uint8Array(0);
    }

    const buffer: Uint8Array = new Uint8Array(size);

    for (let i: number = 0; i < size; i++) {
      buffer[i] = this.readUint8();
    }

    this.#position += size;

    return buffer;
  }

  /**
   * Reads a signed 8-bit integer (byte) from the current position in the buffer.
   */
  readInt8(): number {
    const data: number = this.dataView.getInt8(this.#position);
    this.#position += 1;
    return data;
  }

  /**
   * Reads an unsigned 8-bit integer (byte) from the current position in the buffer.
   */
  readUint8(): number {
    const data: number = this.dataView.getUint8(this.#position);
    this.#position += 1;
    return data;
  }

  /**
   * Reads a signed 16-bit integer (short) from the current position in the buffer.
   * @param littleEndian Indicates if the 16-bit integer is stored in little- or big-endian. Reads big-endian if `false` or `undefined`.
   */
  readInt16(littleEndian?: boolean): number {
    const data: number = this.dataView.getInt16(this.#position, littleEndian);
    this.#position += 2;
    return data;
  }

  /**
   * Reads an unsigned 16-bit integer (unsigned short) from the current position in the buffer.
   * @param littleEndian Indicates if the 16-bit integer is stored in little- or big-endian. Reads big-endian if `false` or `undefined`.
   */
  readUint16(littleEndian?: boolean): number {
    const data: number = this.dataView.getUint16(this.#position, littleEndian);
    this.#position += 2;
    return data;
  }

  /**
   * Reads a signed 32-bit integer (long) from the current position in the buffer.
   * @param littleEndian Indicates if the 32-bit integer is stored in little- or big-endian. Reads big-endian if `false` or `undefined`.
   */
  readInt32(littleEndian?: boolean): number {
    const data: number = this.dataView.getInt32(this.#position, littleEndian);
    this.#position += 4;
    return data;
  }

  /**
   * Reads an unsigned 32-bit integer (unsigned long) from the current position in the buffer.
   * @param littleEndian Indicates if the 32-bit integer is stored in little- or big-endian. Reads big-endian if `false` or `undefined`.
   */
  readUint32(littleEndian?: boolean): number {
    const data: number = this.dataView.getUint32(this.#position, littleEndian);
    this.#position += 4;
    return data;
  }

  /**
   * Reads a signed 32-bit float (float) from the current position in the buffer.
   * @param littleEndian Indicates if the 32-bit float is stored in little- or big-endian. Reads big-endian if `false` or `undefined`.
   */
  readFloat32(littleEndian?: boolean): number {
    let data: number = this.dataView.getFloat32(this.#position, littleEndian);
    this.#position += 4;
    return data;
  }

  /**
   * Reads a signed 64-bit float (double) from the current position in the buffer.
   * @param littleEndian Indicates if the 64-bit float is stored in little- or big-endian. Reads big-endian if `false` or `undefined`.
   */
  readFloat64(littleEndian?: boolean): number {
    let data: number = this.dataView.getFloat64(this.#position, littleEndian);
    this.#position += 8;
    return data;
  }

  /**
   * Reads a signed 64-bit integer (long long) from the current position in the buffer.
   * @param littleEndian Indicates if the 64-bit integer is stored in little- or big-endian. Reads big-endian if `false` or `undefined`.
   */
  readBigInt64(littleEndian?: boolean): bigint {
    let data: bigint = this.dataView.getBigInt64(this.#position, littleEndian);
    this.#position += 8;
    return data;
  }

  /**
   * Reads an unsigned 64-bit integer (unsigned long long) from the current position in the buffer.
   * @param littleEndian Indicates if the 64-bit integer is stored in little- or big-endian. Reads big-endian if `false` or `undefined`.
   */
  readBigUint64(littleEndian?: boolean): bigint {
    let data: bigint = this.dataView.getBigUint64(this.#position, littleEndian);
    this.#position += 8;
    return data;
  }
}
