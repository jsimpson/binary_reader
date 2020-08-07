import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import BinaryReader from "./binary_reader.ts";

Deno.test(
  "readBytes()",
  function (): void {
    let buffer: ArrayBuffer = new ArrayBuffer(4);
    let array: Uint8Array = new Uint8Array(buffer);

    array[0] = 1;
    array[1] = 2;
    array[2] = 3;
    array[3] = 4;

    const binaryReader: BinaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readBytes(4), new Uint8Array([1, 2, 3, 4]));
  }
)

Deno.test(
  "readInt8()",
  function (): void {
    let buffer: ArrayBuffer = new ArrayBuffer(1);
    let array: Uint8Array = new Uint8Array(buffer);

    array[0] = 0x7F;

    const binaryReader: BinaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readInt8(), 0x7F);
  }
)

Deno.test(
  "readUint8()",
  function (): void {
    let buffer: ArrayBuffer = new ArrayBuffer(1);
    let array: Uint8Array = new Uint8Array(buffer);

    array[0] = 0xFF;

    const binaryReader: BinaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readUint8(), 0xFF);
  }
)

Deno.test(
  "readInt16() - big endian",
  function (): void {
    let buffer: ArrayBuffer = new ArrayBuffer(2);
    let array: Uint8Array = new Uint8Array(buffer);

    array[0] = 0x1F;
    array[1] = 0x7F;

    const binaryReader: BinaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readInt16(), 0x1F * 256 + 0x7F);
  }
)

Deno.test(
  "readInt16() - little endian",
  function (): void {
    let buffer: ArrayBuffer = new ArrayBuffer(2);
    let array: Uint8Array = new Uint8Array(buffer);

    array[0] = 0x1F;
    array[1] = 0x7F;

    const binaryReader: BinaryReader = new BinaryReader(array);
    assertEquals(binaryReader.readInt16(true), 0x7F * 256 + 0x1F);
  }
)