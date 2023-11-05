---
title: Memory Mapping
description: Internal memory mapping of the fx-CP400
---

Here's some of the mapping I know about :

- boot rom is at `0x0000_0000`, it's taken from the first part of the flashed rom

- bootloader is at `0x0000_0300` with the `LV777` then `CASIOABS` at `0x0000_3380`

- Clock Pulse Generator (CPG) is at `0xA415_0000` to `0xA415_FFFF`

- `0xA405_0100` may be the touchscreen, where `0xA405_01F3` changes when screen it touched

- RAM is `0x8c00_0000`

- ROM is `0x8000_0000` to `0x81ff_ffff`

- Cached rom is `0xa000_0000` to `0xa1ff_ffff`

- Display DMAC start at `0xb400_0000`

- There are some "direct Io" from `0xFEC0_0000` to `0xFEFF_FFFF`

When loading a .bin program, it is copied at `0x8cff_0000` and the PC jump to this offset
