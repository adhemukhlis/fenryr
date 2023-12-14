# Fenryr
Front-end Safety Belt

[buka website](https://fenryr.netlify.app/)

## Kolaborasi
1. clone repo `https://github.com/adhemukhlis/fenryr.git`
    ```bash
    git clone https://github.com/adhemukhlis/fenryr.git
    ```
2. buat branch
    ```bash
    git checkout -b <my_name>-dev
    ```
3. install dependencies (menggunakan yarn)
    ```bash
    yarn
    ```
4. jalankan storybook
    ```bash
    yarn storybook
    ```

## Membuat Halaman
1. buat file `.mdx` pada directory `/src/stories`, misal `Hehe.mdx`
    > Nama file merepresentasikan url halaman
2. isi file
    ```jsx
    import { Meta } from "@storybook/blocks";
    <Meta title="Information/Hehe" />

    <div>
      <h1>hehe</h1>
    </div>
    ```
    > dua baris diawal harus ada di setiap file `.mdx`

    > pada tag `Meta` terdapat atribut `title` yang merepresentasikan path dan diakhiri dengan nama dari file `.mdx` terkait
3. how to use `.mdx`?
    > gugling :)

    > haha candaa.. tolong bantuannya buat bantu bikin konten penggunaan `.mdx`, nanti PR aja biar ke deploy