---
title: Advanced Troubleshooting & Limits
description: A collection of common issues, limits, and advanced techniques for Classpad app development.

sidebar:
  order: 4
---

import { LinkCard, CardGrid, Icon } from '@astrojs/starlight/components';

This guide covers advanced topics that you might encounter as your projects grow in complexity. Here, you'll find solutions to common limitations and techniques to push what's possible on the Classpad.
 As new techniques are discovered, they will be added here, so be sure to check it regularly. If you encounter some issue that isn't yet known or listed here, feel free to **[💬 Join our Discord community](https://discord.gg/knpcNJTzpd)** or report it as issue in our GitHub bug tracker.

## Overcoming the 64kb App Size Limit

As your application grows, you might run into a strict 64 kilobyte (kb) size limit for your compiled ELF binary that prevent it loading properly. This is a fundamental constraint of the standard memory space allocated for applications.

### Issue description

When your application's compiled code exceeds 64kb, the calculator's loader cannot place it in the default memory region. This typically results in your app crashing or freezing immediately upon launch, without any clear error message. The standard memory space allocated for an app is simply not large enough for bigger projects.

:::tip[How to Check Your App's Size]
You can verify the final size of your application by using the `readelf` utility on the generated ELF or HH3 file. This tool provides detailed information about the binary, including the total size required to load it into memory. Modern compilers and linkers are efficient at including only the necessary code, but complex applications can still easily exceed the limit.
:::

### Solution: Using VBAK Memory

To bypass the 64kb limit, you can instruct the linker to place your application's code in a larger memory area known as `vbak` or `vram`. These regions, normally used for system operations like video memory backup, each offer approximately 330kb of space.

To do this, you need to add a specific linker flag to your project's `Makefile`.

1.  Open your `Makefile`.
2.  Locate the `LD_FLAGS` variable.
3.  Add the following flag: `-Wl,-Ttext-segment,0x8C052800`

Your `LD_FLAGS` line should look something like this:
```Makefile
LD_FLAGS = -Wl,-Ttext-segment,0x8C052800
```
This flag tells the YAL (HH3/v3) loader to place the executable code segment at the memory address `0x8C052800`, which corresponds to the `vbak` area.

### Important Side Effect: Managing the Screen Buffer

Placing your application code in the `vbak` region comes with a critical responsibility: you must now manually restore the screen's contents restore after run. Because your code occupies the memory space the operating system would use to back up the screen (`vram`), you must save and restore the screen state yourself upon starting and exiting your app.

Doing it is hopefully trivial, you need to override the default `calcInit` and `calcExit` functions. The following code allocates a temporary buffer on the heap, copies the current screen content into it, and restores it when the app closes.

```cpp
#include <type_traits>
#include <sdk/os/file.h>
#include <sdk/os/debug.h>
#include <sdk/os/lcd.h>
#include <sdk/os/string.h>
#include <sdk/calc/calc.h>
#include <cstring>
#include <cstdlib>

// A backup pointer for the original vram content
std::remove_pointer_t<decltype(vram)> (*vram_bak)[width * height];

// This function is called when your app starts
void calcInit(void)
{
    // Allocate memory on the heap to store the screen backup
    vram_bak = (decltype(vram_bak))malloc(sizeof(*vram_bak));
    
    // If allocation fails, we can't proceed safely
    if (!vram_bak)
    {
        return;
    }
    
    // Copy the current screen content to our backup buffer
    memcpy(vram_bak, vram, sizeof(*vram_bak));
    // Clear the screen for the app
    memset(vram, 0, sizeof(*vram_bak));
}

// This function is called when your app exits
void calcExit(void) 
{
    // Copy the backed-up screen content back to vram
    memcpy(vram, vram_bak, sizeof(*vram_bak));
    // Refresh the LCD to show the restored content
    LCD_Refresh();
    // Free the memory we allocated for the backup
    free(vram_bak);
}
```


For a complete implementation of this technique, you can look at the source code for CPDoom. The project uses the `vbak` memory region and provides a clear example of overriding `calcInit` and `calcExit` in its `bootstrap.cpp` file.

<LinkCard
  title="CPDoom bootstrap.cpp"
  description="View the source code on GitHub to see a practical application of these concepts."
  href="https://github.com/QBos07/CPDoom/blob/master/src/cas/bootstrap.cpp"
  target="_blank"
/>
