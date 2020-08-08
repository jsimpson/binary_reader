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
