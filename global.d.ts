export { }

declare global {
    namespace JSX {
        interface Element { render: () => string }
    }

}
