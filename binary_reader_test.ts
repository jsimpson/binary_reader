import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import { BinaryReader } from "./binary_reader.ts";

Deno.test(
  "readBytes()",
  function (): void {
    const buffer = new ArrayBuffer(4);
    const array = new Uint8Array(buffer);

    array[0] = 1;
    array[1] = 2;
    array[2] = 3;
    array[3] = 4;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readBytes(4), new Uint8Array([1, 2, 3, 4]));
  },
);

Deno.test(
  "readInt8()",
  function (): void {
    const buffer = new ArrayBuffer(1);
    const array = new Uint8Array(buffer);

    array[0] = 0x7F;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readInt8(), 0x7F);
  },
);

Deno.test(
  "readUint8()",
  function (): void {
    const buffer = new ArrayBuffer(1);
    const array = new Uint8Array(buffer);

    array[0] = 0xFF;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readUint8(), 0xFF);
  },
);

Deno.test(
  "readInt16() - big endian",
  function (): void {
    const buffer = new ArrayBuffer(2);
    const array = new Uint8Array(buffer);

    array[0] = 0x1F;
    array[1] = 0x7F;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readInt16(), 0x1F7F);
  },
);

Deno.test(
  "readInt16() - little endian",
  function (): void {
    const buffer = new ArrayBuffer(2);
    const array = new Uint8Array(buffer);

    array[0] = 0x1F;
    array[1] = 0x7F;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readInt16(true), 0x7F1F);
  },
);

Deno.test(
  "readUint16() - big endian",
  function (): void {
    const buffer = new ArrayBuffer(2);
    const array = new Uint8Array(buffer);

    array[0] = 0xFF;
    array[1] = 0xFE;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readUint16(), 0xFFFE);
  },
);

Deno.test(
  "readUint16() - little endian",
  function (): void {
    const buffer = new ArrayBuffer(2);
    const array = new Uint8Array(buffer);

    array[0] = 0xFF;
    array[1] = 0xFE;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readUint16(true), 0xFEFF);
  },
);

Deno.test(
  "readInt32() - big endian",
  function (): void {
    const buffer = new ArrayBuffer(4);
    const array = new Uint8Array(buffer);

    array[0] = 0x7F;
    array[1] = 0x00;
    array[2] = 0x00;
    array[3] = 0x00;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readInt32(), 0x7F000000);
  },
);

Deno.test(
  "readInt32() - little endian",
  function (): void {
    const buffer = new ArrayBuffer(4);
    const array = new Uint8Array(buffer);

    array[0] = 0x7F;
    array[1] = 0x00;
    array[2] = 0x00;
    array[3] = 0x00;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readInt32(true), 0x00000007F);
  },
);

Deno.test(
  "readFloat32() - little endian",
  function (): void {
    const buffer = new ArrayBuffer(4);
    const array = new Uint8Array(buffer);

    array[0] = 0xF9;
    array[1] = 0x0F;
    array[2] = 0x49;
    array[3] = 0x40;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readFloat32(true), 3.1415998935699463);
  },
);

Deno.test(
  "readFloat32() - big endian",
  function (): void {
    const buffer = new ArrayBuffer(4);
    const array = new Uint8Array(buffer);

    array[0] = 0x40;
    array[1] = 0x49;
    array[2] = 0x0F;
    array[3] = 0xF9;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readFloat32(), 3.1415998935699463);
  },
);

Deno.test(
  "readFloat64() - little endian",
  function (): void {
    const buffer = new ArrayBuffer(8);
    const array = new Uint8Array(buffer);

    array[0] = 0x00;
    array[1] = 0x00;
    array[2] = 0x00;
    array[3] = 0x00;
    array[4] = 0x00;
    array[5] = 0x00;
    array[6] = 0x00;
    array[7] = 0x40;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readFloat64(true), 2.0);
  },
);

Deno.test(
  "readFloat64() - big endian",
  function (): void {
    const buffer = new ArrayBuffer(8);
    const array = new Uint8Array(buffer);

    array[0] = 0x40;
    array[1] = 0x00;
    array[2] = 0x00;
    array[3] = 0x00;
    array[4] = 0x00;
    array[5] = 0x00;
    array[6] = 0x00;
    array[7] = 0x00;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readFloat64(), 2.0);
  },
);

Deno.test(
  "readBigInt64() - little endian",
  function (): void {
    const buffer = new ArrayBuffer(8);
    const array = new Uint8Array(buffer);

    array[0] = 0x40;
    array[1] = 0x00;
    array[2] = 0x00;
    array[3] = 0x00;
    array[4] = 0x00;
    array[5] = 0x00;
    array[6] = 0x00;
    array[7] = 0x00;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readBigInt64(true), 64n);
  },
);

Deno.test(
  "readBigInt64() - big endian",
  function (): void {
    const buffer = new ArrayBuffer(8);
    const array = new Uint8Array(buffer);

    array[0] = 0x00;
    array[1] = 0x00;
    array[2] = 0x00;
    array[3] = 0x00;
    array[4] = 0x00;
    array[5] = 0x00;
    array[6] = 0x00;
    array[7] = 0x40;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readBigInt64(), 64n);
  },
);

Deno.test(
  "readBigUint64() - little endian",
  function (): void {
    const buffer = new ArrayBuffer(8);
    const array = new Uint8Array(buffer);

    array[0] = 0x40;
    array[1] = 0x00;
    array[2] = 0x00;
    array[3] = 0x00;
    array[4] = 0x00;
    array[5] = 0x00;
    array[6] = 0x00;
    array[7] = 0x00;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readBigUint64(true), 64n);
  },
);

Deno.test(
  "readBigUint64() - big endian",
  function (): void {
    const buffer = new ArrayBuffer(8);
    const array = new Uint8Array(buffer);

    array[0] = 0x00;
    array[1] = 0x00;
    array[2] = 0x00;
    array[3] = 0x00;
    array[4] = 0x00;
    array[5] = 0x00;
    array[6] = 0x00;
    array[7] = 0x40;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readBigUint64(), 64n);
  },
);

Deno.test(
  "readChar",
  function (): void {
    const buffer = new ArrayBuffer(1);
    const array = new Uint8Array(buffer);

    array[0] = 0x41;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readChar(), "A");
  },
);

Deno.test(
  "readString",
  function (): void {
    const buffer = new ArrayBuffer(13);
    const array = new Uint8Array(buffer);

    array[0] = 0x48;
    array[1] = 0x65;
    array[2] = 0x6C;
    array[3] = 0x6C;
    array[4] = 0x6F;
    array[5] = 0x2C;
    array[6] = 0x20;
    array[7] = 0x57;
    array[8] = 0x6F;
    array[9] = 0x72;
    array[10] = 0x6C;
    array[11] = 0x64;
    array[12] = 0x21;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readString(13), "Hello, World!");
  },
);

Deno.test(
  "position",
  function (): void {
    const buffer = new ArrayBuffer(4);
    const array = new Uint8Array(buffer);

    array[0] = 0x48;
    array[1] = 0x65;
    array[2] = 0x6C;
    array[3] = 0x6C;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.position, 0);
    binaryReader.readBytes(4);
    assertEquals(binaryReader.position, 4);
  },
);

Deno.test(
  "rewind",
  function (): void {
    const buffer = new ArrayBuffer(4);
    const array = new Uint8Array(buffer);

    array[0] = 0x48;
    array[1] = 0x65;
    array[2] = 0x6C;
    array[3] = 0x6C;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.position, 0);
    binaryReader.readBytes(4);
    assertEquals(binaryReader.position, 4);

    binaryReader.rewind(4);
    assertEquals(binaryReader.position, 0);
    const data = binaryReader.readBytes(4);
    assertEquals(binaryReader.position, 4);

    assertEquals(data, [0x48, 0x65, 0x6C, 0x6C]);
  },
);

Deno.test(
  "seek",
  function (): void {
    const buffer = new ArrayBuffer(4);
    const array = new Uint8Array(buffer);

    array[0] = 0x48;
    array[1] = 0x65;
    array[2] = 0x6C;
    array[3] = 0x6C;

    const binaryReader = new BinaryReader(array);
    assertEquals(binaryReader.position, 0);
    binaryReader.seek(3);
    assertEquals(binaryReader.position, 3);
  },
);
