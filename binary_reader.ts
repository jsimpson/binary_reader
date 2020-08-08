export class BinaryReader {
  dataView = new DataView(
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
   * Reads `length` unsigned 8-bit integers from the current position in the buffer.
   * @param length The number of bytes to read.
   */
  readBytes(length: number): Uint8Array {
    if (length === 0) {
      return new Uint8Array(0);
    }

    const buffer = new Uint8Array(length);

    for (let i = 0; i < length; i++) {
      buffer[i] = this.readUint8();
    }

    this.#position += length;

    return buffer;
  }

  /**
   * Reads a signed 8-bit integer (byte) from the current position in the buffer.
   */
  readInt8(): number {
    const data = this.dataView.getInt8(this.#position);
    this.#position += 1;
    return data;
  }

  /**
   * Reads an unsigned 8-bit integer (byte) from the current position in the buffer.
   */
  readUint8(): number {
    const data = this.dataView.getUint8(this.#position);
    this.#position += 1;
    return data;
  }

  /**
   * Reads a signed 16-bit integer (short) from the current position in the buffer.
   * @param littleEndian Indicates if the 16-bit integer is stored in little- or big-endian. Reads big-endian if `false` or `undefined`.
   */
  readInt16(littleEndian?: boolean): number {
    const data = this.dataView.getInt16(this.#position, littleEndian);
    this.#position += 2;
    return data;
  }

  /**
   * Reads an unsigned 16-bit integer (unsigned short) from the current position in the buffer.
   * @param littleEndian Indicates if the 16-bit integer is stored in little- or big-endian. Reads big-endian if `false` or `undefined`.
   */
  readUint16(littleEndian?: boolean): number {
    const data = this.dataView.getUint16(this.#position, littleEndian);
    this.#position += 2;
    return data;
  }

  /**
   * Reads a signed 32-bit integer (long) from the current position in the buffer.
   * @param littleEndian Indicates if the 32-bit integer is stored in little- or big-endian. Reads big-endian if `false` or `undefined`.
   */
  readInt32(littleEndian?: boolean): number {
    const data = this.dataView.getInt32(this.#position, littleEndian);
    this.#position += 4;
    return data;
  }

  /**
   * Reads an unsigned 32-bit integer (unsigned long) from the current position in the buffer.
   * @param littleEndian Indicates if the 32-bit integer is stored in little- or big-endian. Reads big-endian if `false` or `undefined`.
   */
  readUint32(littleEndian?: boolean): number {
    const data = this.dataView.getUint32(this.#position, littleEndian);
    this.#position += 4;
    return data;
  }

  /**
   * Reads a signed 32-bit float (float) from the current position in the buffer.
   * @param littleEndian Indicates if the 32-bit float is stored in little- or big-endian. Reads big-endian if `false` or `undefined`.
   */
  readFloat32(littleEndian?: boolean): number {
    let data = this.dataView.getFloat32(this.#position, littleEndian);
    this.#position += 4;
    return data;
  }

  /**
   * Reads a signed 64-bit float (double) from the current position in the buffer.
   * @param littleEndian Indicates if the 64-bit float is stored in little- or big-endian. Reads big-endian if `false` or `undefined`.
   */
  readFloat64(littleEndian?: boolean): number {
    let data = this.dataView.getFloat64(this.#position, littleEndian);
    this.#position += 8;
    return data;
  }

  /**
   * Reads a signed 64-bit integer (long long) from the current position in the buffer.
   * @param littleEndian Indicates if the 64-bit integer is stored in little- or big-endian. Reads big-endian if `false` or `undefined`.
   */
  readBigInt64(littleEndian?: boolean): bigint {
    let data = this.dataView.getBigInt64(this.#position, littleEndian);
    this.#position += 8;
    return data;
  }

  /**
   * Reads an unsigned 64-bit integer (unsigned long long) from the current position in the buffer.
   * @param littleEndian Indicates if the 64-bit integer is stored in little- or big-endian. Reads big-endian if `false` or `undefined`.
   */
  readBigUint64(littleEndian?: boolean): bigint {
    let data = this.dataView.getBigUint64(this.#position, littleEndian);
    this.#position += 8;
    return data;
  }

  /**
   * Reads a single utf8 encoded character from the current position in the buffer.
   */
  readChar(): string {
    return this.readString(1);
  }

  /**
   * Reads a utf8 encoded string from the current position in the buffer.
   * @param length The length of the string.
   */
  readString(length: number): string {
    const bytes = this.readBytes(length);
    const decoder = new TextDecoder();
    return decoder.decode(bytes);
  }
}
