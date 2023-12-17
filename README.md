# Roadmap

## v0.1.0

- forked from [`mise`](https://github.com/kylehorton33/mise)
- static app with data and images loaded file asset `data.ts` or `static/images`
- track stockList changes in `local storage`

## v0.1.1

- added more data to `data.ts`

## v0.1.2

- switch back to PocketBase for data, keep `stockList` in `local storage`
- load from `data.ts` to PocketBase with `npm run create`

## Next steps?

- `12.16` - user tests
- `12.17` - link tests up with PocketBase data
- `12.17` - fraction display raw tag: `{@html exp}`
- `12.17` - work on image loading bugs, save imageUrl path directly when creating store
- `12.17` - @kate press enter/search to exit input bar
- `12.17` - @kate keep search results when navigating back to `/recipes` from `/recipe/[slug]`
