---
title: Setting up the SDK
description: Something here
---

:::caution
This part is aimed at technical people that want to create their own programs.
**If you're here for using games, you can ignore this guide**.
:::

## About the SDK

You can find the source at the following page :

<a href="https://github.com/SnailMath/hollyhock-2" target="_blank" rel="noreferrer">
<img alt="GitHub Repo Preview" src="https://gh-card.dev/repos/SnailMath/hollyhock-2.svg?fullname="></img>
</a>

## Building the Compiler

Setup env vars

```bash
export PREFIX="$HOME/opt/cross"
export TARGET=sh4eb-elf
export PATH="$PREFIX/bin:$PATH"

```

Install and build BinUtils

`Install-binutils.sh`
```bash
version=2.37

prefix=$PREFIX/sh4eb-nofpu-elf

jobs=`nproc 2> /dev/null || echo 1`

tar=binutils-${version}.tar.gz
url=ftp://ftp.gnu.org/gnu/binutils/$tar
test -f $tar || curl -L $url -o $tar
tar -zxf $tar

mkdir binutils-${version}-build
cd binutils-${version}-build
../binutils-${version}/configure --target=sh4eb-nofpu-elf --prefix=$prefix \
          --disable-nls --disable-shared --disable-multilib
make -j $jobs
make install
cd ..
```

And GCC
`Install-gcc.sh`
```bash
version=11.2.0

prefix=$PREFIX/sh4eb-nofpu-elf

jobs=`nproc 2> /dev/null || echo 1`

tar=gcc-${version}.tar.gz
url=ftp://ftp.gnu.org/gnu/gcc/gcc-${version}/$tar
test -f $tar || curl -L $url -o $tar
tar -zxf $tar

cd gcc-${version}
./contrib/download_prerequisites
cd ..

mkdir gcc-${version}-build
cd gcc-${version}-build
../gcc-${version}/configure --target=sh4eb-nofpu-elf --prefix=$prefix \
          --enable-languages=c,c++ \
            --with-newlib --without-headers --disable-hosted-libstdcxx \
              --disable-nls --disable-shared --enable-libssp --enable-lto --with-multilib-list=m4-nofpu
make -j $jobs all-gcc all-target-libgcc
make install-gcc install-target-libgcc
cd ..
```
Now NewLib
`Install-newlib.sh`
```bash
version=1.14.0

prefix=$PREFIX/../src/hollyhock-2/sdk/newlib

jobs=`nproc 2> /dev/null || echo 1`


wget ftp://sourceware.org/pub/newlib/newlib-${version}.tar.gz

tar xzfv newlib-${version}.tar.gz

mkdir newlib-${version}-build
cd newlib-${version}-build

export TARGET_BINS="sh4eb-nofpu-elf"

../newlib-${version}/configure --target="sh-elf" --prefix=$PREFIX

# Fix CC
grep -rli 'sh-elf-' * | xargs -i@ sed -i 's/sh-elf-/sh4eb-nofpu-elf-/g' @
grep -rli 'sh4eb-nofpu-elf-cc' * | xargs -i@ sed -i 's/sh4eb-nofpu-elf-cc/sh4eb-nofpu-elf-gcc/g' @

make -j $jobs
make install
cd ..

```

Rebuild Full GCC
`Full-gcc.sh`
```bash
version=11.2.0
prefix=$PREFIX/sh4eb-nofpu-elf-full

mkdir gcc-${version}-build-full
cd gcc-${version}-build-full

../gcc-${version}/configure --target=sh4eb-nofpu-elf --prefix=$prefix \
          --enable-languages=c,c++ \
            --with-newlib --without-headers --disable-hosted-libstdcxx \
              --disable-nls --disable-shared --enable-libssp --enable-lto --with-multilib-list=m4-nofpu

```
