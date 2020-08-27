# Binary Reader

A Deno module helper class that wraps around [DataView](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) to provide an easy way to read different types from a binary array buffer while maintaining the current buffer position.

## Usage

```typescript
import { BinaryReader } from "https://deno.land/x/binary_reader@v0.1.3/mod.ts";

const filename = "some-file.bin";
const file = Deno.openSync(filename);
const buffer = Deno.readAllSync(file);
Deno.close(file.rid);

const binaryReader = new BinaryReader(buffer);
let data = binaryReader.readUint8();
```
