# Binary Reader

A helper class that wraps around [DataView]() to provide an easy way to read different types from a binary array buffer while maintaining the current buffer position.

## Usage

```typescript
import BinaryReader from "binary_reader";

let binaryReader = new BinaryReader(buffer);
let data = binaryReader.readUint8();
```