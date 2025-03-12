---
title: Memory Mapping
description: Internal memory mapping of the fx-CP400
---

Here's some of the mapping I know about :

- boot rom is at `0x0000_0000`, it's taken from the first part of the flashed rom

- bootloader is at `0x0000_0300` with the `LV777` then `CASIOABS` at `0x0000_3380`

- Clock Pulse Generator (CPG) is at `0xA415_0000` to `0xA415_FFFF`

- `0xA405_0100` may be the touchscreen, where `0xA405_01F3` changes when screen it touched

- RAM is `0x8c00_0000` to `0x8cff_ffff`

- MCS starts at `0x8e00_0000`

- Cached ROM is `0x8000_0000` to `0x81ff_ffff` 

- Uncached ROM is `0xa000_0000` to `0xa1ff_ffff`

- Display DMAC start at `0xb400_0000`

- There are some "direct Io" from `0xFEC0_0000` to `0xFEFF_FFFF`

## RAM

When [loading a .bin program](https://github.com/SnailMath/hollyhock-2/blob/master/launcher/bins.cpp#L178), it is copied at `0x8cff_0000` and the PC jump to this offset 

> For hollyhock, we usually use the end of the ram, that space is usually occupied by the mcs file system, but if it's not fully full, then it should work. Just note that the hollyhock launcher is running from ram, so it can't overwrite itself...`8C00_0000` to `8CFF_FFFF` is ram, we use [`8CFE_0000`](https://github.com/SnailMath/hollyhock-2/blob/master/patches/file_loader/file_loader.s#L134) for the launcher (from the run.bin file) and [`8CFF_0000`](https://github.com/SnailMath/hollyhock-2/blob/master/launcher/bins.cpp#L178) for [programs](https://github.com/TheRainbowPhoenix/CPAppTemplate/blob/main/linker_bin.ld#L4), just look at the launcher how big it is, you can squeeze out a bit if you start your program at `8CFE_8000`....
